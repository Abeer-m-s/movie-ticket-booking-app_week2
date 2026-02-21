const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Show",
  },
  seatNumber: String,
  seatType: String,
  status: {
    type: String,
    enum: ["available", "booked"],
    default: "available",
  },
}, { timestamps: true });

module.exports = mongoose.model("Seat", seatSchema);