const STEPS = [
  {
    step: '01',
    title: 'Search your route',
    description: 'Tell us where you\u2019re starting and where you\u2019re headed — even the small stops count.',
  },
  {
    step: '02',
    title: 'Pick a seat, pay your way',
    description: 'Choose a departure, pick your seat, and pay online or hold your seat for cash on board.',
  },
  {
    step: '03',
    title: 'Track it to your stop',
    description: 'Follow the bus live from the depot and get a nudge a few minutes before it reaches you.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase mb-2">Three stops to a ticket</p>
        <h2 className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-12">How it works</h2>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 relative">
          <div
            className="hidden sm:block absolute top-6 left-0 right-0 h-[2px]"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #24282133 0 14px, transparent 14px 26px)',
            }}
            aria-hidden="true"
          />
          {STEPS.map((s) => (
            <div key={s.step} className="relative">
              <span className="font-display font-bold text-4xl text-route/25 block mb-3">{s.step}</span>
              <h3 className="font-display font-semibold text-lg uppercase mb-2">{s.title}</h3>
              <p className="text-ink/65 text-sm leading-relaxed max-w-xs">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
