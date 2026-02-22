import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";

const TOTAL_SEATS = 40;

const Booking = () => {
  const { showId } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
console.log("ShowId from URL:", showId);
  const ticketPrice = 200;

useEffect(() => {
  const fetchShow = async () => {
    try {
      const res = await api.get(`/shows/${showId}`);
      setShow(res.data);
    } catch (err) {
      console.error("Error fetching show:", err);
    }
  };

  fetchShow();
}, [showId]);

  const toggleSeat = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleProceedToPayment = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    navigate("/payment", {
      state: {
        showId,
        seats: selectedSeats,
        total: selectedSeats.length * ticketPrice,
      },
    });
  };

  // 🔥 FIXED: use show instead of movie
  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* Show Info */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-bold mb-2">
          {show.movie?.title}
        </h1>

        <p className="text-gray-400">
          {show.movie?.genre}
        </p>

        <p className="text-cyan-400 text-sm mt-2">
          Showtime: {show.showTime}
        </p>

        <p className="text-gray-500 text-sm">
          Theatre: {show.theatre?.name}
        </p>
      </div>

      {/* Screen */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="bg-gray-700 text-center py-2 rounded-t-xl">
          SCREEN
        </div>
      </div>

      {/* Seats Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-8 gap-4 mb-10">
        {Array.from({ length: TOTAL_SEATS }, (_, i) => {
          const seatNumber = i + 1;
          const isBooked = bookedSeats.includes(seatNumber);
          const isSelected = selectedSeats.includes(seatNumber);

          return (
            <div
              key={seatNumber}
              onClick={() => toggleSeat(seatNumber)}
              className={`
                h-10 flex items-center justify-center rounded cursor-pointer text-sm transition
                ${
                  isBooked
                    ? "bg-red-600 cursor-not-allowed"
                    : isSelected
                    ? "bg-cyan-500"
                    : "bg-gray-700 hover:bg-gray-600"
                }
              `}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>

      {/* Booking Summary */}
      <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-xl space-y-4">
        <p>
          Selected Seats:{" "}
          <span className="text-cyan-400">
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "None"}
          </span>
        </p>

        <p>
          Total Price:{" "}
          <span className="text-cyan-400">
            ₹{selectedSeats.length * ticketPrice}
          </span>
        </p>

        <button
          onClick={handleProceedToPayment}
          className="w-full bg-green-600 hover:bg-green-700 p-3 rounded font-semibold transition"
        >
          Proceed to Payment 💳
        </button>
      </div>
    </div>
  );
};

export default Booking;