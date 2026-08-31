import { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Users,
  Search,
  Loader2,
  Bus,
} from "lucide-react";
import { searchRoutes } from "../../services/routeService";
import { useAuth } from "../../context/AuthContext";
import BookingModal from "./BookingModal";
import AuthModal from "../Auth/AuthModal";

export default function BookingSearch() {
  const { user } = useAuth();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const [selectedBus, setSelectedBus] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleSearch = async () => {
    setError("");

    if (!from.trim() || !to.trim()) {
      setError("Please enter both From and Destination.");
      return;
    }

    setLoading(true);
    setHasSearched(true);

    try {
      const results = await searchRoutes(from.trim(), to.trim());
      setBuses(results);
    } catch (err) {
      setError("Something went wrong while searching. Please try again.");
      setBuses([]);
    } finally {
      setLoading(false);
    }
  };

  const handleBookNow = (bus) => {
    setSelectedBus(bus);
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="mx-auto w-full max-w-6xl p-4 sm:p-6">

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <div className="w-full">
          <label className="mb-2 block text-sm font-semibold text-gray-700">From</label>
          <div className="flex h-14 w-full min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <MapPin size={20} className="shrink-0 text-green-600" />
            <input
              type="text"
              placeholder="Village / Bus Stop"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="mb-2 block text-sm font-semibold text-gray-700">Destination</label>
          <div className="flex h-14 w-full min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <MapPin size={20} className="shrink-0 text-red-500" />
            <input
              type="text"
              placeholder="Town / City / Bus Stop"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="mb-2 block text-sm font-semibold text-gray-700">Travel Date</label>
          <div className="flex h-14 w-full min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <CalendarDays size={20} className="shrink-0 text-green-600" />
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="mb-2 block text-sm font-semibold text-gray-700">Passengers</label>
          <div className="flex h-14 w-full min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <Users size={20} className="shrink-0 text-green-600" />
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="min-w-0 flex-1 cursor-pointer bg-transparent text-sm text-gray-800 outline-none"
            >
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5">5 Passengers</option>
              <option value="6">6 Passengers</option>
              <option value="7">7 Passengers</option>
              <option value="8">8 Passengers</option>
              <option value="9">9 Passengers</option>
              <option value="10">10 Passengers</option>
            </select>
          </div>
        </div>

      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      <button
        type="button"
        onClick={handleSearch}
        disabled={loading}
        style={{ marginTop: "20px", marginBottom: "20px" }}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {loading ? (
          <>
            <Loader2 size={21} className="animate-spin" />
            Searching...
          </>
        ) : (
          <>
            <Search size={21} />
            Search Available Buses
          </>
        )}
      </button>

      {hasSearched && !loading && (
        <div className="mt-6">
          {buses.length === 0 && !error ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500">
              No buses found for this route. Try a different search.
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {buses.map((bus) => (
                <div
                  key={bus._id}
                  className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-green-100 p-2 text-green-700">
                      <Bus size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        {bus.busName}{" "}
                        <span className="font-normal text-gray-400">({bus.busNumber})</span>
                      </p>
                      <p className="text-sm text-gray-600">{bus.from} → {bus.to}</p>
                      <p className="text-xs text-gray-500">
                        {bus.departureTime} - {bus.arrivalTime} · {bus.busType}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-center">
                    <p className="text-lg font-black text-green-700">₹{bus.fare}</p>
                    <p className="text-xs text-gray-500">{bus.availableSeats} seats left</p>
                    <button
                      type="button"
                      onClick={() => handleBookNow(bus)}
                      className="rounded-lg bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        bus={selectedBus}
        seatsCount={passengers}
        travelDate={travelDate}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

    </div>
  );
}