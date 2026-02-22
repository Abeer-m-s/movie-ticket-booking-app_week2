const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: String,
  japaneseTitle: String,   // ADD
  year: String,            // ADD
  rating: String,          // ADD
  genre: String,
  description: String,     // ADD
  duration: String,
  poster: String
});
module.exports = mongoose.model("Movie", movieSchema);