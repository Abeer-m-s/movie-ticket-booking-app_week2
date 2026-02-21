const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Show",
  },
  seats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seat",
    },
  ],
  totalAmount: Number,
  status: {
    type: String,
    enum: ["confirmed", "cancelled"],
    default: "confirmed",
  }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);