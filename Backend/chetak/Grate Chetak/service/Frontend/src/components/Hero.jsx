import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, ArrowUpRight } from "lucide-react";
import heroImage from "../../../Assets/WhatsApp Image 2026-09-01 at 5.33.57 PM.jpeg";
export default function Hero() {
  return (
    <section className="hero-premium isolate">
      <img
        src={heroImage}
        alt="Professional security services"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-100"
      />
      
      <div className="hero-grid -z-10" />
      <div className="premium-glow -right-56 top-20 -z-10" />

      <div className="container-custom relative z-10 flex min-h-[100svh] items-center py-28">
        <div className="max-w-5xl">
          <p className="eyebrow">Professional Security Services</p>
          <h1 className="hero-title">
            <span className="hero-title-line-1 whitespace-nowrap">
               Security You Can Trust.
            </span>

            <span className="hero-title-line-2" whitespace-nowrap>
               Protection Without Compromise.
            </span>
          </h1>
          <p className="hero-description ">
            Professional security solutions designed to protect your people, property and business with discipline, reliability and care.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/services" className="btn-primary">
              OUR SERVICES <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              GET A QUOTE <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-6 border-t gc-border-white pt-7 sm:grid-cols-3">
            <div className="premium-stat">
              <div className="flex items-center gap-2 gc-stat gc-text-white-soft"><ShieldCheck size={18} className="gc-primary" /> Trained Teams</div>
              <p className="gc-stat-label">Professional Standards</p>
            </div>
            <div className="premium-stat">
              <div className="flex items-center gap-2 gc-stat gc-text-white-soft"><ShieldCheck size={18} className="gc-primary" /> Reliable Protection</div>
              <p className="gc-stat-label">Security First</p>
            </div>
            <div className="premium-stat">
              <div className="flex items-center gap-2 gc-stat gc-text-white-soft"><ShieldCheck size={18} className="gc-primary" /> Responsive Support</div>
              <p className="gc-stat-label">Client Focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
