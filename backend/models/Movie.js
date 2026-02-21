const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  language: String,
  duration: Number,
  rating: Number,
  description: String,
  poster: String
}, { timestamps: true });

module.exports = mongoose.model("Movie", movieSchema);