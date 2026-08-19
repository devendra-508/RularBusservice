import { motion } from "framer-motion";
import BusScene from "./BusScene";
import BookingSearch from "../Booking/BookingSearch";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 pt-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

      {/* ================= HERO CONTENT ================= */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[620px] items-center gap-4 py-10 sm:py-14 lg:min-h-[680px] lg:grid-cols-2 lg:gap-8">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center lg:text-left"
          >
            <span className="inline-flex rounded-full bg-green-100 px-3 py-2 text-xs font-bold text-green-700 sm:px-4 sm:text-sm">
              🚌 RURAL BUS CONNECT
            </span>

            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
              Connecting

              <span className="block text-green-600">
                Villages
              </span>

              <span className="block">
                One Journey
              </span>

              <span className="block">
                at a Time.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
              Simple, affordable and reliable bus services
              connecting rural villages with towns and cities.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                className="rounded-full bg-green-600 px-7 py-3.5 font-bold text-white shadow-xl shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700"
              >
                Explore Routes
              </button>

              <button
                type="button"
                className="rounded-full border border-gray-300 bg-white px-7 py-3.5 font-bold text-gray-700 shadow-sm transition hover:-translate-y-1 hover:bg-gray-50"
              >
                Track My Bus
              </button>
            </div>
          </motion.div>

          {/* 3D BUS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto h-[280px] w-full max-w-[380px] sm:h-[350px] md:h-[400px] lg:h-[500px] lg:max-w-[520px]"
          >
            <BusScene />
          </motion.div>
        </div>
      </div>

      {/* ================= BOOKING SEARCH ================= */}
      {/* IMPORTANT: This is OUTSIDE max-w-7xl */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="relative z-20 flex w-full justify-center px-4 pb-12 sm:px-6 sm:pb-16"
      >
        <div className="w-full max-w-5xl">
          <BookingSearch />
        </div>
      </motion.div>
    </section>
  );
}