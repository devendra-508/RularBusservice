export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-gray-950 text-white"
    >
      {/* Main Footer */}
      <div className="w-full px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Rural<span className="text-green-400">Bus</span>
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              EVERY VILLAGE • EVERY JOURNEY
            </p>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              Connecting rural villages with towns and cities
              through affordable, reliable and accessible bus
              transportation.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
        
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold hover:bg-green-600"
              >
                X
              </button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg hover:bg-green-600"
              >
                ☎
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="transition hover:text-green-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#routes"
                  className="transition hover:text-green-400"
                >
                  Popular Routes
                </a>
              </li>

              <li>
                <a
                  href="#tracking"
                  className="transition hover:text-green-400"
                >
                  Track Bus
                </a>
              </li>

              <li>
                <a
                  href="#status"
                  className="transition hover:text-green-400"
                >
                  Booking Status
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Bus Booking</li>
              <li>Live Bus Tracking</li>
              <li>Seat Availability</li>
              <li>Booking Status</li>
              <li>Route Information</li>
              <li>Online Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                📍 Rural Bus Service Center,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; chouthan, Uttarakhand
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p className="break-all">
                ✉ support@ruralbus.com
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-sm text-gray-500 md:flex-row md:text-left">

          <p>
            © 2026 RuralBus. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#"
              className="hover:text-green-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-green-400"
            >
              DSR
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}