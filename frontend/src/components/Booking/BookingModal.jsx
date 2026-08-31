import { useState, useEffect } from "react";
import {
  X,
  User,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { createBooking } from "../../services/bookingService";

export default function BookingModal({
  isOpen,
  onClose,
  bus,
  seatsCount,
  travelDate,
}) {
  const [passengerNames, setPassengerNames] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // ============================================
  // RESET MODAL
  // ============================================

  useEffect(() => {
    if (isOpen) {
      setPassengerNames(
        Array(Number(seatsCount)).fill("")
      );

      setError("");
      setConfirmedBooking(null);
      setLoading(false);
    }
  }, [isOpen, seatsCount]);

  // ============================================
  // MODAL CLOSED
  // ============================================

  if (!isOpen || !bus) {
    return null;
  }

  // ============================================
  // PASSENGER NAME CHANGE
  // ============================================

  const handleNameChange = (index, value) => {
    const updatedNames = [...passengerNames];

    updatedNames[index] = value;

    setPassengerNames(updatedNames);
  };

  // ============================================
  // CONFIRM BOOKING
  // ============================================

  const handleConfirm = async (e) => {
    e.preventDefault();

    setError("");

    // --------------------------------------------
    // VALIDATE PASSENGER NAMES
    // --------------------------------------------

    if (
      passengerNames.length !== Number(seatsCount)
    ) {
      setError("Please enter all passenger names.");
      return;
    }

    if (
      passengerNames.some(
        (name) => !name || !name.trim()
      )
    ) {
      setError(
        "Please enter names for all passengers."
      );
      return;
    }

    // --------------------------------------------
    // VALIDATE TRAVEL DATE
    // --------------------------------------------

    if (!travelDate) {
      setError(
        "Please select a travel date before booking."
      );
      return;
    }

    // --------------------------------------------
    // VALIDATE SEATS
    // --------------------------------------------

    if (
      Number(seatsCount) < 1
    ) {
      setError("Please select at least one seat.");
      return;
    }

    if (
      Number(seatsCount) >
      Number(bus.availableSeats)
    ) {
      setError("Not enough seats available.");
      return;
    }

    setLoading(true);

    try {
      // ==========================================
      // CREATE BOOKING
      // ==========================================

      const booking = await createBooking(
        bus._id,
        travelDate,
        Number(seatsCount),
        passengerNames.map((name) =>
          name.trim()
        )
      );

      console.log(
        "Booking Response:",
        booking
      );

      // ==========================================
      // SAVE CONFIRMED BOOKING
      // ==========================================

      setConfirmedBooking(booking);

    } catch (err) {
      console.error(
        "Booking error:",
        err
      );

      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to create booking. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // TOTAL FARE
  // ============================================

  const totalFare =
    Number(bus.fare) *
    Number(seatsCount);

  // ============================================
  // CLOSE MODAL
  // ============================================

  const handleClose = () => {
    if (loading) {
      return;
    }

    setConfirmedBooking(null);
    setError("");
    onClose();
  };

  // ============================================
  // UI
  // ============================================

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-24"
      onClick={handleClose}
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        {/* ======================================
            CLOSE BUTTON
        ====================================== */}

        <button
          type="button"
          onClick={handleClose}
          disabled={loading}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <X size={22} />
        </button>

        {/* ======================================
            BOOKING CONFIRMED
        ====================================== */}

        {confirmedBooking ? (
          <div className="flex flex-col items-center text-center">
            {/* SUCCESS ICON */}

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 size={36} />
            </div>

            {/* TITLE */}

            <h2 className="mt-4 text-2xl font-black text-gray-900">
              Booking Confirmed!
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your booking has been successfully confirmed.
            </p>

            {/* ==================================
                PNR
            ================================== */}

            <div className="mt-5 w-full rounded-xl bg-green-50 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                PNR Number
              </p>

              <p className="mt-1 text-2xl font-black tracking-widest text-green-800">
                {confirmedBooking.pnr || "N/A"}
              </p>
            </div>

            {/* ==================================
                BOOKING DETAILS
            ================================== */}

            <div className="mt-4 w-full space-y-2 rounded-xl bg-gray-50 p-4 text-left text-sm text-gray-600">
              <p>
                <span className="font-semibold text-gray-800">
                  Booking ID:
                </span>{" "}
                {confirmedBooking.bookingId ||
                  confirmedBooking._id ||
                  "N/A"}
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Bus:
                </span>{" "}
                {bus.busName} ({bus.busNumber})
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Route:
                </span>{" "}
                {bus.from} → {bus.to}
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Travel Date:
                </span>{" "}
                {travelDate}
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Seats:
                </span>{" "}
                {confirmedBooking.seatsBooked ||
                  seatsCount}
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Total Fare:
                </span>{" "}
                ₹
                {confirmedBooking.totalFare ||
                  totalFare}
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Payment:
                </span>{" "}
                <span className="font-semibold text-orange-600">
                  {confirmedBooking.paymentStatus ||
                    "Pending"}
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Status:
                </span>{" "}
                <span className="font-semibold text-green-600">
                  {confirmedBooking.status ||
                    "Confirmed"}
                </span>
              </p>
            </div>

            {/* ==================================
                DONE BUTTON
            ================================== */}

            <button
              type="button"
              onClick={handleClose}
              className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-green-600 text-sm font-bold text-white transition hover:bg-green-700"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* ==================================
                TITLE
            ================================== */}

            <h2 className="text-2xl font-black text-gray-900">
              Confirm Booking
            </h2>

            {/* BUS INFO */}

            <p className="mt-1 text-sm text-gray-500">
              {bus.busName} ({bus.busNumber})
              {" · "}
              {bus.from} → {bus.to}
            </p>

            {/* ==================================
                FORM
            ================================== */}

            <form
              onSubmit={handleConfirm}
              className="mt-6 flex flex-col gap-4"
            >
              {/* =================================
                  PASSENGER NAMES
              ================================= */}

              {passengerNames.map(
                (name, index) => (
                  <div
                    key={index}
                    className="flex h-14 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100"
                  >
                    <User
                      size={20}
                      className="shrink-0 text-green-600"
                    />

                    <input
                      type="text"
                      placeholder={`Passenger ${
                        index + 1
                      } Name`}
                      value={name}
                      onChange={(e) =>
                        handleNameChange(
                          index,
                          e.target.value
                        )
                      }
                      required
                      disabled={loading}
                      className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    />
                  </div>
                )
              )}

              {/* =================================
                  TRAVEL DATE
              ================================= */}

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-sm">
                <span className="text-gray-600">
                  Travel Date
                </span>

                <span className="font-semibold text-gray-800">
                  {travelDate}
                </span>
              </div>

              {/* =================================
                  AVAILABLE SEATS
              ================================= */}

              <div className="flex items-center justify-between rounded-xl bg-green-50 px-4 py-3 text-sm">
                <span className="text-gray-600">
                  Available Seats
                </span>

                <span className="font-bold text-green-700">
                  {bus.availableSeats}
                </span>
              </div>

              {/* =================================
                  SELECTED SEATS
              ================================= */}

              <div className="flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-sm">
                <span className="text-gray-600">
                  Seats Booking
                </span>

                <span className="font-bold text-blue-700">
                  {seatsCount}
                </span>
              </div>

              {/* =================================
                  TOTAL FARE
              ================================= */}

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-sm">
                <span className="text-gray-600">
                  Total Fare
                </span>

                <span className="text-lg font-black text-green-700">
                  ₹{totalFare}
                </span>
              </div>

              {/* =================================
                  ERROR
              ================================= */}

              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {/* =================================
                  BOOK BUTTON
              ================================= */}

              <button
                type="submit"
                disabled={loading}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={20}
                      className="animate-spin"
                    />

                    Creating Booking...
                  </>
                ) : (
                  `Confirm Booking ₹${totalFare}`
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}