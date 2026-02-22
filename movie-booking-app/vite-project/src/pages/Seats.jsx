import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const TOTAL_SEATS = 40;

const Seats = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const toggleSeat = (seat) => {
    if (selected.includes(seat)) {
      setSelected(selected.filter((s) => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">
        {state.theatre} — {state.time}
      </h1>

      <div className="grid grid-cols-8 gap-4 mb-10">
        {Array.from({ length: TOTAL_SEATS }, (_, i) => {
          const seat = i + 1;
          return (
            <div
              key={seat}
              onClick={() => toggleSeat(seat)}
              className={`h-10 flex items-center justify-center rounded cursor-pointer
                ${
                  selected.includes(seat)
                    ? "bg-pink-500"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
            >
              {seat}
            </div>
          );
        })}
      </div>

      <button
        onClick={() =>
          navigate("/payment", {
            state: {
              seats: selected,
              total: selected.length * 200
            }
          })
        }
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
      >
        Proceed to Payment 💳
      </button>
    </div>
  );
};

export default Seats;