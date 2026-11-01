import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../../../Assets/WhatsApp Image 2026-09-01 at 5.43.45 PM.jpeg";

const links = [
  ["HOME", "/"],
  ["ABOUT", "/about"],
  ["SERVICES", "/services"],
  ["CONTACT", "/contact"],
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="navbar-premium">
      <nav className="flex min-h-[70px] items-center justify-between px-4 sm:px-6">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">

          <img src={logo} alt="Great Chetak Logo" className="h-18 w-18 rounded-full border-2 border-yellow-500 object-cover"/>

          <div className="leading-tight">
            <p className="gc-logo-title gc-white">THE GREAT CHETAK</p>
            <p className="mt-0.5 gc-logo-sub gc-primary">
              SECURITY & ALLIED SERVICES
            </p>
          </div>

        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className={`nav-link-premium ${
                location.pathname === href ? "active" : ""
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="btn-primary !min-h-[42px] !px-5"
          >
            GET A QUOTE <ArrowRight size={15} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border gc-border-white gc-white md:hidden"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t gc-border-white gc-bg-dark px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                onClick={closeMenu}
                className="border-b gc-border-white py-4 gc-nav gc-text-white-soft hover-gc-primary"
              >
                {label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="btn-primary mt-4"
            >
              GET A QUOTE <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}