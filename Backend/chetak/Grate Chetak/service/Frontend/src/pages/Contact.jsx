import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const social = [
  ["Facebook", "gc-social-facebook", Facebook],
  ["Instagram", "gc-social-instagram", Instagram],
  ["LinkedIn", "gc-social-linkedin", Linkedin],
  ["X", "gc-social-x", null],
  ["YouTube", "gc-social-youtube", Youtube],
];

export default function Contact() {
  return (
    <main className="w-full overflow-x-hidden gc-bg-white">
      <section className="w-full px-3 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <h1 className="gc-h2 gc-dark">Contact Us</h1>
            <p className="mx-auto mt-6 max-w-full gc-label gc-dark">BETTER YET, SEE US IN PERSON!</p>
            <p className="mx-auto mt-5 max-w-2xl gc-small">We value our customers, so feel free to contact us during normal business hours.</p>
          </div>

          <div className="mt-8 flex justify-center">
            <a href="https://wa.me/919099000622" target="_blank" rel="noopener noreferrer" className="gc-whatsapp flex w-full max-w-xs items-center justify-center gap-2 rounded-full px-4 py-4 text-center gc-button-text transition hover:-translate-y-0.5 sm:w-auto sm:px-8">
              <MessageCircle size={21} className="shrink-0" />
              <span>Message us on WhatsApp</span>
            </a>
          </div>

          <div className="mt-12 grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
            <div className="min-w-0">
              <Phone size={28} className="mx-auto gc-primary" />
              <h2 className="mt-4 gc-h3 gc-dark">Call Us</h2>
              <a href="tel:+919099000622" className="mt-2 block break-all gc-small hover-gc-primary">+91 9099000622</a>
            </div>
            <div className="min-w-0">
              <Mail size={28} className="mx-auto gc-primary" />
              <h2 className="mt-4 gc-h3 gc-dark">Email Us</h2>
              <a href="mailto:thegreatchetaksecurity@gmail.com" className="mt-2 block break-all gc-small hover-gc-primary">thegreatchetaksecurity@gmail.com</a>
            </div>
            <div className="min-w-0">
              <MapPin size={28} className="mx-auto gc-primary" />
              <h2 className="mt-4 gc-h3 gc-dark">Visit Us</h2>
              <p className="mx-auto mt-2 max-w-xs gc-small">Your Business Address,<br />Your City, Your State,<br />India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-3 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-lg)] sm:aspect-[2/1]">
            <iframe title="Our Location" src="https://www.google.com/maps?q=Vadodara,India&output=embed" className="h-full w-full border-0" loading="lazy" allowFullScreen />
          </div>
        </div>
      </section>

      <section className="w-full px-3 py-10 text-center sm:px-6 sm:py-16">
        <Clock size={28} className="mx-auto gc-primary" />
        <h2 className="mt-4 gc-h3 gc-dark">Business Hours</h2>
        <p className="mt-3 gc-small">Monday – Saturday</p>
        <p className="mt-1 gc-small gc-contact-heading gc-dark">10:00 AM – 07:00 PM</p>
      </section>

      <section className="w-full px-3 pb-14 pt-8 text-center sm:px-6 sm:pb-20">
        <h2 className="gc-h2 gc-dark">Connect With Us</h2>
        <div className="mx-auto mt-8 flex max-w-md flex-wrap justify-center gap-3 sm:gap-5">
          {social.map(([label, colorClass, Icon]) => (
            <a key={label} href="#" aria-label={label} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition hover:scale-110 sm:h-12 sm:w-12 ${colorClass}`}>
              {Icon ? <Icon size={20} /> : <span className="gc-contact-heading">X</span>}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
