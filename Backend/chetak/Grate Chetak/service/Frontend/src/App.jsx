import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Contact from "./pages/Contact";

function NotFound() {
  return <div className="flex min-h-[60vh] items-center justify-center gc-bg-light"><div className="text-center"><h1 className="gc-h1 gc-dark">404</h1><p className="mt-3 gc-small">Page not found.</p></div></div>;
}

export default function App() {
  return <div className="min-h-screen"><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<ServicesPage />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes><Footer /></div>;
}
