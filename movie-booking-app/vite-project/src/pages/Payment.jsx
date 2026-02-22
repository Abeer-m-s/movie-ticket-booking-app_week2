import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.seats) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        No booking data found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6 text-pink-400">
        Payment
      </h1>

      <p className="mb-4">
        Seats: {state.seats.join(", ")}
      </p>

      <p className="mb-6 text-xl">
        Total: ₹{state.total}
      </p>

      <button
        onClick={() => {
          alert("Payment Successful 🎉");
          navigate("/");
        }}
        className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded"
      >
        Pay Now 💳
      </button>
    </div>
  );
};

export default Payment;