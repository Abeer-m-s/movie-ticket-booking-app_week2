const express = require("express");
const router = express.Router();
const Show = require("../models/Show");

const { auth, authorizeRoles } = require("../middleware/authMiddleware");
const { createShow } = require("../controllers/showController");

// Create show (Admin only)
router.post("/", auth, authorizeRoles("admin"), createShow);

// Get all shows OR filter by movieId
router.get("/", async (req, res) => {
  try {
    const { movieId } = req.query;

    const filter = movieId ? { movie: movieId } : {};

    const shows = await Show.find(filter)
      .populate("movie")
      .populate("theatre");

    res.json(shows);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get single show by ID
router.get("/:id", async (req, res) => {
  try {
    const show = await Show.findById(req.params.id)
      .populate("movie")
      .populate("theatre");

    if (!show) {
      return res.status(404).json({ message: "Show not found" });
    }

    res.json(show);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;