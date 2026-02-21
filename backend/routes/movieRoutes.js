const express = require("express");
const router = express.Router();

// Get All Movies
router.get("/", (req, res) => {
  res.send("All Movies");
});

// Get Single Movie
router.get("/:id", (req, res) => {
  res.send(`Movie ID: ${req.params.id}`);
});

// Add Movie (Admin)
const { auth, authorizeRoles } = require("../middleware/authMiddleware");
const addMovieController = (req, res) => {
  res.json({ message: "Movie added successfully" });
};

router.post(
  "/",
  auth,
  authorizeRoles("admin"),
  addMovieController
);

// Update Movie
router.put("/:id", (req, res) => {
  res.send("Update Movie");
});

// Delete Movie
router.delete("/:id", (req, res) => {
  res.send("Delete Movie");
});

module.exports = router;