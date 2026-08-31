import { motion } from "framer-motion";
import CarImage from "./CarImage";
import BookingSearch from "../Booking/BookingSearch";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 pt-[120px]"
    >
      {/* Background decoration */}
      
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

      <div className="pointer-events-none absolute right-0 bottom-10 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

      {/* ================= HERO CONTENT ================= */}
      <div className="flex w-full flex-col items-center">

        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex w-full flex-col items-center px-4 text-center"
        >
         
          {/* Heading */}
          <h1 className="mt-5 w-full max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
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

          {/* Description */}
          <p className="mt-5 w-full max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Simple, affordable and reliable bus services
            connecting rural villages with towns and cities.
          </p>
        </motion.div>

        {/* ================= CAR ================= */}
        {/* CAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="flex h-[320px] w-full items-center justify-center"
        >
          <div className="w-full max-w-[440px]">
            <CarImage />
          </div>
        </motion.div>

        {/* ================= BOOKING SEARCH ================= */}
       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="relative z-20 mt-20 flex w-full justify-center px-4 pb-12 sm:px-6 sm:pb-16"
        >
          <div className="w-full max-w-5xl">
            <BookingSearch />
          </div>
        </motion.div>

      </div>
    </section>
  );
}