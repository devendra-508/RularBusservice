import crypto from "crypto";
import Booking from "../models/Booking.js";
import Route from "../models/Route.js";

// ============================================
// GENERATE PNR
// ============================================

const generatePNR = () => {
  return (
    "RB" +
    crypto
      .randomBytes(4)
      .toString("hex")
      .toUpperCase()
  );
};


// ============================================
// CREATE BOOKING
// POST /api/bookings
// ============================================

export const createBooking = async (
  req,
  res,
  next
) => {
  try {
    const {
      routeId,
      travelDate,
      seatsBooked,
      passengerNames,
    } = req.body;

    // ========================================
    // VALIDATE REQUIRED FIELDS
    // ========================================

    if (
      !routeId ||
      !travelDate ||
      !seatsBooked ||
      !passengerNames
    ) {
      return res.status(400).json({
        message:
          "Missing required booking fields",
      });
    }

    // ========================================
    // VALIDATE SEATS
    // ========================================

    const numberOfSeats =
      Number(seatsBooked);

    if (
      !Number.isInteger(numberOfSeats) ||
      numberOfSeats < 1
    ) {
      return res.status(400).json({
        message:
          "Seats booked must be at least 1",
      });
    }

    // ========================================
    // VALIDATE PASSENGER NAMES
    // ========================================

    if (
      !Array.isArray(passengerNames) ||
      passengerNames.length !== numberOfSeats
    ) {
      return res.status(400).json({
        message:
          "Passenger names must match the number of seats",
      });
    }

    if (
      passengerNames.some(
        (name) =>
          !name ||
          typeof name !== "string" ||
          !name.trim()
      )
    ) {
      return res.status(400).json({
        message:
          "Please provide names for all passengers",
      });
    }

    // ========================================
    // FIND ROUTE
    // ========================================

    const route =
      await Route.findById(routeId);

    if (!route) {
      return res.status(404).json({
        message: "Route not found",
      });
    }

    // ========================================
    // CHECK AVAILABLE SEATS
    // ========================================

    if (
      Number(route.availableSeats) <
      numberOfSeats
    ) {
      return res.status(400).json({
        message:
          "Not enough seats available",
      });
    }

    // ========================================
    // CALCULATE TOTAL FARE
    // ========================================

    const totalFare =
      Number(route.fare) *
      numberOfSeats;

    // ========================================
    // GENERATE UNIQUE PNR
    // ========================================

    let pnr = generatePNR();

    while (
      await Booking.findOne({ pnr })
    ) {
      pnr = generatePNR();
    }

    // ========================================
    // CREATE BOOKING
    // ========================================

    const booking =
      await Booking.create({
        user: req.user._id,

        route: routeId,

        travelDate,

        seatsBooked:
          numberOfSeats,

        passengerNames:
          passengerNames.map((name) =>
            name.trim()
          ),

        totalFare,

        pnr,

        // No online payment
        paymentStatus: "pending",

        // Booking is confirmed
        status: "confirmed",
      });

    // ========================================
    // REDUCE AVAILABLE SEATS
    // ========================================

    route.availableSeats -=
      numberOfSeats;

    await route.save();

    // ========================================
    // RESPONSE
    // ========================================

    return res.status(201).json({
      message:
        "Booking confirmed successfully",

      bookingId:
        booking._id,

      pnr:
        booking.pnr,

      seatsBooked:
        booking.seatsBooked,

      totalFare:
        booking.totalFare,

      amount:
        booking.totalFare,

      paymentStatus:
        booking.paymentStatus,

      status:
        booking.status,
    });

  } catch (error) {
    next(error);
  }
};


// ============================================
// GET MY BOOKINGS
// GET /api/bookings/my
// ============================================

export const getMyBookings = async (
  req,
  res,
  next
) => {
  try {
    const bookings =
      await Booking.find({
        user: req.user._id,
      })
        .populate("route")
        .sort({
          createdAt: -1,
        });

    return res.json(bookings);

  } catch (error) {
    next(error);
  }
};


// ============================================
// TRACK BOOKING BY PNR
// GET /api/bookings/track/:pnr
// ============================================

export const trackByPNR = async (
  req,
  res,
  next
) => {
  try {
    const booking =
      await Booking.findOne({
        pnr:
          req.params.pnr.toUpperCase(),
      }).populate("route");

    if (!booking) {
      return res.status(404).json({
        message:
          "No booking found with this PNR",
      });
    }

    return res.json(booking);

  } catch (error) {
    next(error);
  }
};


// ============================================
// CANCEL BOOKING
// PUT /api/bookings/:id/cancel
// ============================================

export const cancelBooking = async (
  req,
  res,
  next
) => {
  try {
    const booking =
      await Booking.findById(
        req.params.id
      );

    // ========================================
    // BOOKING NOT FOUND
    // ========================================

    if (!booking) {
      return res.status(404).json({
        message:
          "Booking not found",
      });
    }

    // ========================================
    // CHECK OWNER
    // ========================================

    if (
      booking.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        message:
          "Not authorized to cancel this booking",
      });
    }

    // ========================================
    // ALREADY CANCELLED
    // ========================================

    if (
      booking.status ===
      "cancelled"
    ) {
      return res.status(400).json({
        message:
          "Booking already cancelled",
      });
    }

    // ========================================
    // CANCEL BOOKING
    // ========================================

    booking.status =
      "cancelled";

    await booking.save();

    // ========================================
    // RETURN SEATS
    // ========================================

    const route =
      await Route.findById(
        booking.route
      );

    if (route) {
      route.availableSeats +=
        booking.seatsBooked;

      await route.save();
    }

    // ========================================
    // RESPONSE
    // ========================================

    return res.json({
      message:
        "Booking cancelled",

      booking,
    });

  } catch (error) {
    next(error);
  }
};