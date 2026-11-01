import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "../../../Assets/WhatsApp Image 2026-09-01 at 5.43.45 PM.jpeg";

const links = [["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Contact", "/contact"]];

export default function Footer() {
  return (
    <footer id="footer" className="footer-premium px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            
                      <img src={logo} alt="Great Chetak Logo" className="h-18 w-18 rounded-full border-2 border-yellow-500 object-cover"/>
            <div><p className="gc-logo-title gc-white">THE GREAT CHETAK</p><p className="gc-logo-sub gc-primary">SECURITY & ALLIED SERVICES</p></div>
          </div>
          <p className="mt-6 max-w-md gc-small">Professional security solutions focused on dependable protection, trained personnel, disciplined operations and long-term client relationships.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 gc-button-text gc-primary hover-gc-white">TALK TO OUR TEAM <ArrowUpRight size={15} /></Link>
        </div>
        <div><h3 className="gc-label gc-white">COMPANY</h3><div className="mt-5 space-y-4 gc-small">{links.map(([label, href]) => <Link key={href} to={href} className="block transition hover-gc-primary">{label}</Link>)}</div></div>
        <div><h3 className="gc-label gc-white">CONTACT</h3><div className="mt-5 space-y-4 gc-small"><a href="tel:+919099000622" className="block hover-gc-primary">+91 9099000622</a><a href="thegreatchetaksecurity@gmail.com" className="block hover-gc-primary">thegreatchetaksecurity@gmail.com</a><p> The Great Chetak Security & Allied Services, located at Plot No. 15, Krishna Park, near Roop Avenue Residency, New Vatva,<br />Ahmedabad,Gujarat,<br />India</p></div></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t gc-border-white pt-6 gc-label gc-text-white-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 The Great Chetak Security & Allied Services. All Rights Reserved.</p><p>Professional Protection. Trusted Service.</p></div>
    </footer>
  );
}
