import { useState } from "react";
import {
  Search,
  Loader2,
  Ticket,
  MapPin,
  Calendar,
  Users,
  IndianRupee,
} from "lucide-react";

import { trackByPNR } from "../../services/bookingService";

const statusStyles = {
  confirmed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  completed: "bg-blue-100 text-blue-700",
};

export default function BookingStatus() {
  const [pnr, setPnr] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();

    setError("");
    setBooking(null);
    setHasSearched(true);

    if (!pnr.trim()) {
      setError("Please enter a PNR number.");
      return;
    }

    setLoading(true);

    try {
      const result = await trackByPNR(
        pnr.trim().toUpperCase()
      );

      console.log("PNR Result:", result);

      // Check if booking exists
      if (!result) {
        setError("No booking found with this PNR.");
        return;
      }

      // Check if route still exists
      if (!result.route) {
        setError(
          "This booking exists, but its bus route is no longer available."
        );
        return;
      }

      setBooking(result);

    } catch (err) {
      console.error("PNR tracking error:", err);

      setError(
        err.response?.data?.message ||
          "No booking found with this PNR."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="status"
      className="flex w-full scroll-mt-[80px] justify-center bg-gradient-to-br from-emerald-50 via-white to-green-50 px-4 py-14 sm:px-6"
    >
      <div className="w-full max-w-3xl text-center">

        {/* TITLE */}

        <h2 className="mt-5 text-3xl font-black text-gray-600 sm:text-3xl">
          Check Booking Status
        </h2>

        <p className="mt-3 text-gray-600">
          Enter your PNR number to view your booking details instantly.
        </p>

        {/* SEARCH */}

        <form
          onSubmit={handleTrack}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <div className="flex h-14 w-full min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">

            <Ticket
              size={20}
              className="shrink-0 text-green-600"
            />

            <input
              type="text"
              placeholder="Enter PNR (e.g. RB8A2F91C3)"
              value={pnr}
              onChange={(e) =>
                setPnr(e.target.value)
              }
              className="min-w-0 flex-1 bg-transparent text-sm uppercase tracking-wide text-gray-800 outline-none placeholder:normal-case placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <Loader2
                size={20}
                className="animate-spin"
              />
            ) : (
              <Search size={20} />
            )}
          </button>
        </form>

        {/* ERROR */}

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {/* RESULT */}

        {!loading && booking && booking.route && (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-md sm:p-8">

            {/* HEADER */}

            <div className="flex flex-wrap items-center justify-between gap-3">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  PNR
                </p>

                <p className="text-xl font-black tracking-widest text-gray-900">
                  {booking.pnr}
                </p>
              </div>

              <span
                className={`rounded-full px-4 py-1.5 text-xs font-bold capitalize ${
                  statusStyles[booking.status] ||
                  "bg-gray-100 text-gray-700"
                }`}
              >
                {booking.status}
              </span>

            </div>

            {/* DETAILS */}

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* BUS / ROUTE */}

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Route
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {booking.route.busName}
                  </p>

                  <p className="text-sm text-gray-600">
                    {booking.route.busNumber}
                  </p>

                  <p className="text-sm text-gray-600">
                    {booking.route.from} →{" "}
                    {booking.route.to}
                  </p>
                </div>

              </div>

              {/* DATE */}

              <div className="flex items-start gap-3">

                <Calendar
                  size={18}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Travel Date
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {new Date(
                      booking.travelDate
                    ).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-sm text-gray-600">
                    {booking.route.departureTime} -{" "}
                    {booking.route.arrivalTime}
                  </p>
                </div>

              </div>

              {/* PASSENGERS */}

              <div className="flex items-start gap-3">

                <Users
                  size={18}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Passengers
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {booking.seatsBooked} Seat(s)
                  </p>

                  <p className="text-sm text-gray-600">
                    {booking.passengerNames?.join(
                      ", "
                    )}
                  </p>
                </div>

              </div>

              {/* FARE */}

              <div className="flex items-start gap-3">

                <IndianRupee
                  size={18}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Total Fare
                  </p>

                  <p className="text-lg font-black text-green-700">
                    ₹{booking.totalFare}
                  </p>
                </div>

              </div>

            </div>

            {/* PAYMENT */}

            <div className="mt-6 border-t border-gray-100 pt-4">

              <div className="flex justify-between text-sm">

                <span className="text-gray-500">
                  Payment Status
                </span>

                <span className="font-bold capitalize text-orange-600">
                  {booking.paymentStatus ||
                    "Pending"}
                </span>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}