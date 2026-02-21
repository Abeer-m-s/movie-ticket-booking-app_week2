const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  totalScreens: Number
}, { timestamps: true });

module.exports = mongoose.model("Theatre", theatreSchema);