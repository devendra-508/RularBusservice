import express from "express";

import {
  createBooking,
  getMyBookings,
  trackByPNR,
  cancelBooking,
} from "../controllers/bookingController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE BOOKING
router.post("/", protect, createBooking);

// GET MY BOOKINGS
router.get("/my", protect, getMyBookings);

// TRACK BOOKING
router.get("/track/:pnr", trackByPNR);

// CANCEL BOOKING
router.put("/:id/cancel", protect, cancelBooking);

export default router;