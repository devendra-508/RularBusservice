import { useState } from "react";
import { X, Mail, Lock, User, Phone, Loader2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function AuthModal({ isOpen, onClose }) {
  const { login, signup } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignup) {
        await signup(form.name, form.email, form.phone, form.password);
      } else {
        await login(form.email, form.password);
      }
      onClose();
      setForm({ name: "", email: "", phone: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-24"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-black text-gray-900">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {isSignup
            ? "Sign up to book your bus tickets easily."
            : "Login to manage and track your bookings."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">

          {isSignup && (
            <>
              <div className="flex h-14 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
                <User size={20} className="shrink-0 text-green-600" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>

              <div className="flex h-14 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
                <Phone size={20} className="shrink-0 text-green-600" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </>
          )}

          <div className="flex h-14 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <Mail size={20} className="shrink-0 text-green-600" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex h-14 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
            <Lock size={20} className="shrink-0 text-green-600" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Please wait...
              </>
            ) : isSignup ? (
              "Sign Up"
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          {isSignup ? "Already have an account?" : "New here?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
            className="font-bold text-green-700 hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}