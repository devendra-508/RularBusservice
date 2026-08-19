import { Bus, MapPin, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
            <Bus size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Rural<span className="text-green-600">Bus</span>
            </h1>

            <p className="text-[10px] text-gray-500">
              EVERY VILLAGE • EVERY JOURNEY
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#home" className="font-medium hover:text-green-600">
            Home
          </a>

          <a href="#routes" className="font-medium hover:text-green-600">
            Routes
          </a>

          <a href="#tracking" className="font-medium hover:text-green-600">
            Track Bus
          </a>

          <a href="#status" className="font-medium hover:text-green-600">
            Booking Status
          </a>

          <a href="#help" className="font-medium hover:text-green-600">
            Help
          </a>
        </div>

        {/* Action */}
        <button className="hidden items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 lg:flex">
          <MapPin size={18} />
          Find My Bus
        </button>

        {/* Mobile */}
        <button className="rounded-lg p-2 md:hidden">
          <Menu />
        </button>

      </div>
    </nav>
  );
}