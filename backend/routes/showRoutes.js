const express = require("express");
const router = express.Router();

// Get shows for a movie
router.get("/movie/:movieId", (req, res) => {
  res.send(`Shows for movie ${req.params.movieId}`);
});

// Create show (Admin)
const { auth, authorizeRoles } = require("../middleware/authMiddleware");

const createShowController = (req, res) => {
  res.json({ message: "Show created successfully" });
};

router.post(
  "/",
  auth,
  authorizeRoles("admin", "theatreManager"),
  createShowController
);

module.exports = router;