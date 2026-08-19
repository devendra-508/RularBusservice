import {
  MapPin,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";

export default function BookingSearch() {
  return (
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-5">

      {/* Booking Fields */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

        {/* FROM */}
        <div className="w-full">
          <label className="mb-2 ml- block text-sm font-semibold text-gray-600">
            From
          </label>

          <div className="flex h-14 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <MapPin
              size={20}
              className="shrink-0 text-green-600"
            />

            <input
              type="text"
              placeholder="Village / Bus Stop"
              className="min-w-0 w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* DESTINATION */}
        <div className="w-full">
          <label className="mb-2 block text-sm font-semibold text-gray-600">
            Destination
          </label>

          <div className="flex h-14 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <MapPin
              size={20}
              className="shrink-0 text-red-500"
            />

            <input
              type="text"
              placeholder="Town / City / Bus Stop"
              className="min-w-0 w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* TRAVEL DATE */}
        <div className="w-full">
          <label className="mb-2 block text-sm font-semibold text-gray-600">
            Travel Date
          </label>

          <div className="flex h-14 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <CalendarDays
              size={20}
              className="shrink-0 text-green-600"
            />

            <input
              type="date"
              className="min-w-0 w-full bg-transparent text-sm text-gray-800 outline-none"
            />
          </div>
        </div>

        {/* PASSENGERS */}
        <div className="w-full">
          <label className="mb-2 block text-sm font-semibold text-gray-600">
            Passengers
          </label>

          <div className="flex h-14 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <Users
              size={20}
              className="shrink-0 text-green-600"
            />

            <select
              className="min-w-0 w-full cursor-pointer bg-transparent text-sm text-gray-800 outline-none"
              defaultValue="1"
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

      {/* SEARCH BUTTON */}
      <button
        type="button"
        className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 font-bold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-700"
      >
        <Search size={21} />
        Search Available Buses
      </button>

    </div>
  );
}