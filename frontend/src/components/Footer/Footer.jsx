export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full border-t-4 bg-gray-800 text-white"
    >



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