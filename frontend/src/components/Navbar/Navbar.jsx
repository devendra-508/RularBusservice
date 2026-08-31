import { useState } from "react";
import { Bus, Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import AuthModal from "../Auth/AuthModal";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    // { href: "#routes", label: "Routes" },
    { href: "#tracking", label: "Track Bus" },
    { href: "#status", label: "Booking Status" },
    { href: "#help", label: "Help" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">

        <div className="flex h-[72px] w-full items-center justify-between px-6">

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

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-medium transition hover:text-green-600">
                {link.label}
              </a>
            ))}
            {user?.role === "admin" && (
              <a href="/admin" className="font-medium text-green-700 transition hover:text-green-600">
                Admin
              </a>
            )}
          </div>

          <div className="hidden items-center gap-3 lg:flex">

            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                  <User size={16} />
                  Hi, {user.name.split(" ")[0]}
                </div>
                <button
                  type="button"
                  onClick={logout}
                  title="Logout"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsAuthModalOpen(true)}
                className="rounded-full border border-green-600 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-50"
              >
                Login
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-gray-700 lg:hidden"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-gray-800 transition hover:text-green-600"
                >
                  {link.label}
                </a>
              ))}

              {user?.role === "admin" && (
                <a
                  href="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-green-700 transition hover:text-green-600"
                  a>
                  Admin
                </a>
              )}

              <div className="mt-2 flex flex-col gap-3 border-t border-gray-100 pt-4">
                {user ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                      <User size={16} />
                      Hi, {user.name.split(" ")[0]}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      title="Logout"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                    >
                      <LogOut size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="rounded-full border border-green-600 px-5 py-2.5 text-center font-semibold text-green-700 transition hover:bg-green-50"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}