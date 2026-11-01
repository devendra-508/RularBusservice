import { MapPin, Phone, Mail, Clock, MessageCircle, Download, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const social = [
  ["Facebook", "gc-social-facebook", Facebook],
  ["Instagram", "gc-social-instagram", Instagram],
  ["LinkedIn", "gc-social-linkedin", Linkedin],
  ["X", "gc-social-x", null],
  ["YouTube", "gc-social-youtube", Youtube],
];

export default function ContactSection() {
  return (
    <section className="w-full overflow-hidden gc-bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <h2 className="gc-h2 gc-dark">Contact Us</h2>
            <p className="mt-7 gc-label gc-dark">BETTER YET, SEE US IN PERSON!</p>
            <p className="mt-5 max-w-xl gc-small">We value our customers, so feel free to contact us during normal business hours.</p>

            <div className="mt-9 flex min-w-0 gap-3">
              <MapPin size={20} className="mt-1 shrink-0 gc-primary" />
              <div className="min-w-0"><h3 className="gc-contact-heading gc-dark">Address</h3><p className="mt-2 gc-small">The Great Chetak Security & Allied Services, located at Plot No. 15, Krishna Park, near Roop Avenue Residency, New Vatva<br /> Ahmedabad,Gujarat,<br />India</p></div>
            </div>
            <div className="mt-7 flex min-w-0 gap-3">
              <Phone size={20} className="mt-1 shrink-0 gc-primary" />
              <div className="min-w-0"><h3 className="gc-contact-heading gc-dark">Phone</h3><a href="tel:+917302715388" className="mt-2 block break-all gc-small hover-gc-primary">+91 7302715388</a></div>
            </div>
            <div className="mt-7 flex min-w-0 gap-3">
              <Mail size={20} className="mt-1 shrink-0 gc-primary" />
              <div className="min-w-0"><h3 className="gc-contact-heading gc-dark">Email</h3><a href="mailto:thegreatchetaksecurity@gmail.com" className="mt-2 block break-all gc-small hover-gc-primary">thegreatchetaksecurity@gmail.com</a></div>
            </div>
            <div className="mt-7 flex min-w-0 gap-3">
              <Clock size={20} className="mt-1 shrink-0 gc-primary" />
              <div className="min-w-0"><h3 className="gc-label gc-dark">HOURS</h3><p className="mt-3 gc-small">Open today <span className="gc-contact-heading gc-dark">10:00 am – 07:00 pm</span></p></div>
            </div>

            <a href="https://wa.me/918929381037" target="_blank" rel="noopener noreferrer" className="gc-whatsapp mx-auto mt-9 flex w-full max-w-sm items-center justify-center gap-2 rounded-full px-4 py-3.5 text-center gc-button-text transition hover:-translate-y-0.5 sm:mx-0 sm:w-fit sm:px-7">
              <MessageCircle size={21} className="shrink-0" /> Message us on WhatsApp
            </a>
          </div>

          <div className="min-w-0 overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]">
            <div className="aspect-4/3 w-full min-w-0"><iframe title="Our Location" src="https://www.google.com/maps?q=Vadodara,India&output=embed" className="h-full w-full border-0" loading="lazy" allowFullScreen /></div>
          </div>
        </div>
      </div>

      <section className="w-full border-t gc-border px-4 py-14 text-center sm:px-6 sm:py-20">
        <h2 className="gc-h2 gc-dark">Downloads</h2>
        <p className="mx-auto mt-5 max-w-3xl gc-small">Learn more about our company and services. Download our information brochure to know more about what we offer.</p>
        <div className="mx-auto mt-8 w-full max-w-sm rounded-[var(--radius-md)] border gc-border gc-bg-light p-6 sm:p-8">
          <Download size={30} className="mx-auto gc-primary" />
          <h3 className="mt-4 gc-h3 gc-dark">My Services Information</h3>
          <p className="mt-1 gc-small">Company Brochure (PDF)</p>
          <a href="/brochure.pdf" download className="mt-6 inline-flex items-center justify-center gap-2 rounded-full gc-bg-dark px-6 py-3 gc-button-text gc-white transition hover-gc-bg-primary"><Download size={15} /> DOWNLOAD</a>
        </div>
      </section>

      <section className="w-full px-4 pb-16 pt-8 text-center sm:px-6 sm:pb-20">
        <h2 className="gc-h2 gc-dark">Connect With Us</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-5">
          {social.map(([label, colorClass, Icon]) => <a key={label} href="#" aria-label={label} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full gc-white transition hover:scale-110 sm:h-12 sm:w-12 ${colorClass}`}>{Icon ? <Icon size={20} /> : <span className="gc-contact-heading">X</span>}</a>)}
        </div>
      </section>
    </section>
  );
}
