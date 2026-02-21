const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theatre",
    required: true,
  },
  showDate: Date,
  showTime: String,
  ticketPrice: Number
}, { timestamps: true });

module.exports = mongoose.model("Show", showSchema);