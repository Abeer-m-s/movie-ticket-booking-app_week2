const express = require("express");
const router = express.Router();

// Create Booking
const { auth, authorizeRoles } = require("../middleware/authMiddleware");

const createBookingController = (req, res) => {
  res.json({ message: "Ticket booked successfully" });
};

router.post(
  "/",
  auth,
  authorizeRoles("user"),
  createBookingController
);

// Get User Bookings
router.get("/my-bookings", (req, res) => {
  res.send("My Bookings");
});

// Cancel Booking
router.delete("/:id", (req, res) => {
  res.send("Cancel Booking");
});

module.exports = router;