import { useState } from "react";
import { Bus, Search, Loader2, MapPin, Clock, Users } from "lucide-react";
import { searchRoutes } from "../../services/routeService";

export default function TrackBus() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    setError("");
    setResults([]);

    if (!query.trim()) {
      setError("Please enter a bus name, number, or route.");
      return;
    }

    setLoading(true);
    setHasSearched(true);

    try {
      const [fromResults, toResults] = await Promise.all([
        searchRoutes(query.trim(), ""),
        searchRoutes("", query.trim()),
      ]);

      const merged = [...fromResults, ...toResults];
      const unique = merged.filter(
        (route, index, self) => index === self.findIndex((r) => r._id === route._id)
      );

      setResults(unique);
    } catch (err) {
      setError("Something went wrong while tracking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="tracking"
      className="flex w-full scroll-mt-[80px] justify-center bg-gray-50 px-4 py-14 sm:px-6"
    >
      <div className="w-full max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700 sm:text-sm">
          {/* 📍 LIVE TRACKING */}
        </span>

        <h2 className="mt-5 text-3xl font-black text-gray-600 sm:text-3xl">
          Track Your Bus
        </h2>
        <p className="mt-3 text-gray-600">
          Search by village, town, or city to see buses running on that route.
        </p>

        <form onSubmit={handleTrack} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <div className="flex h-14 w-full min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <MapPin size={20} className="shrink-0 text-green-600" />
            <input
              type="text"
              placeholder="Enter village, town, or city"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {loading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Search size={20} />
            )}
          </button>
        </form>

        {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

        {hasSearched && !loading && (
          <div className="mt-8">
            {results.length === 0 && !error ? (
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500">
                No buses found for "{query}". Try a different village or city name.
              </div>
            ) : (
              <div className="flex flex-col gap-4 text-left">
                {results.map((bus) => (
                  <div
                    key={bus._id}
                    className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <Bus size={22} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">
                          {bus.busName}{" "}
                          <span className="font-normal text-gray-400">({bus.busNumber})</span>
                        </p>
                        <p className="text-sm text-gray-600">{bus.from} → {bus.to}</p>
                        <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                          <Clock size={14} />
                          {bus.departureTime} - {bus.arrivalTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start rounded-full bg-green-50 px-4 py-2 text-xs font-bold text-green-700 sm:self-center">
                      <Users size={14} />
                      {bus.availableSeats} seats available
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}