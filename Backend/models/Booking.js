import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
      required: true
    },

    travelDate: {
      type: Date,
      required: true
    },

    seatsBooked: {
      type: Number,
      required: true,
      min: 1
    },

    passengerNames: [
      {
        type: String,
        required: true
      }
    ],

    totalFare: {
      type: Number,
      required: true
    },

    pnr: {
      type: String,
      required: true,
      unique: true
    },

    // Booking status
    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "cancelled",
        "completed"
      ],
      default: "pending"
    },

    // Payment status
    paymentStatus: {
      type: String,
      enum: [
        "pending",
        "paid",
        "failed",
        "refunded"
      ],
      default: "pending"
    },

    // Razorpay
    razorpayOrderId: {
      type: String,
      default: null
    },

    razorpayPaymentId: {
      type: String,
      default: null
    },

    razorpaySignature: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Booking",
  bookingSchema
);