const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
  },
  method: String,
  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "failed"],
  },
  transactionId: String
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);