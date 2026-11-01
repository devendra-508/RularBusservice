import { Link } from "react-router-dom";
import { ShieldCheck, Building2, Users, CalendarCheck, Factory, Home, ArrowUpRight } from "lucide-react";

const services = [
  { title: "SECURITY GUARDS", text: "Professional security personnel trained to protect people, property and operations.", icon: ShieldCheck },
  { title: "CORPORATE SECURITY", text: "Reliable security solutions for offices, commercial buildings and corporate environments.", icon: Building2 },
  { title: "INDUSTRIAL SECURITY", text: "Site-focused protection designed for industrial facilities, warehouses and critical assets.", icon: Factory },
  { title: "RESIDENTIAL SECURITY", text: "Dedicated security services for residential communities, apartments and private properties.", icon: Home },
  { title: "EVENT SECURITY", text: "Professional security management for events, gatherings and high-footfall locations.", icon: CalendarCheck },
  { title: "SUPERVISION & MANAGEMENT", text: "Experienced supervision to maintain discipline, performance and service standards.", icon: Users },
];

export default function Services() {
  return (
    <section className="section gc-bg-light">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="section-label"><span className="gold-line" /> What We Do</p>
          <h2 className="section-title">Comprehensive Security <span className="block gc-primary">Solutions for Every Need.</span></h2>
          <p className="section-description">From corporate offices to industrial facilities and events, Great Chetak provides dependable security solutions tailored to your requirements.</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="service-card group">
                <div className="absolute right-7 top-6 gc-card-index gc-gold">0{index + 1}</div>
                <div className="premium-icon"><Icon size={23} /></div>
                <h3 className="mt-7 gc-h3 gc-dark">{service.title}</h3>
                <p className="mt-3 gc-small">{service.text}</p>
                <Link to="/services" className="mt-7 inline-flex items-center gap-2 gc-button-text gc-dark-light transition hover-gc-dark">EXPLORE SERVICE <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
