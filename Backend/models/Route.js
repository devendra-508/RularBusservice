import mongoose from "mongoose";

const routeSchema = new mongoose.Schema(
  {
    busName: { type: String, required: true },
    busNumber: { type: String, required: true, unique: true },
    from: { type: String, required: true, trim: true },
    to: { type: String, required: true, trim: true },
    departureTime: { type: String, required: true }, // e.g. "07:30 AM"
    arrivalTime: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    fare: { type: Number, required: true },
    totalSeats: { type: Number, required: true, default: 40 },
    availableSeats: { type: Number, required: true, default: 40 },
    stops: [{ type: String }],
    busType: { type: String, enum: ["Standard", "Deluxe", "Mini"], default: "Standard" },
    daysOfOperation: {
      type: [String],
      default: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

routeSchema.index({ from: 1, to: 1 });

export default mongoose.model("Route", routeSchema);
