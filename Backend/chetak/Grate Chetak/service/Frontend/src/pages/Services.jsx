import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <main>
      <section className="section-dark section pt-36 text-center">
        <div className="premium-glow left-1/2 top-0 -translate-x-1/2" />
        <div className="container-custom relative z-10">
          <p className="section-label mx-auto"><span className="gold-line" /> Services <span className="gold-line" /></p>
          <h1 className="mt-6 gc-h1 gc-white">Our Security Services</h1>
          <p className="mx-auto mt-6 max-w-2xl gc-small gc-text-white-soft">Disciplined, dependable protection designed around the needs of your people, property and operations.</p>
        </div>
      </section>
      <Services />
    </main>
  );
}
