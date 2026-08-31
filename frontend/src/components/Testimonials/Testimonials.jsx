const QUOTES = [
  {
    name: 'Sunita Rathod',
    place: 'Warud',
    quote:
      'I used to wait at the stand without knowing if the bus had already left. Now I just check my phone before I walk out the door.',
  },
  {
    name: 'Manoj Gaikwad',
    place: 'Karanja',
    quote:
      'Booked a seat for my mother\u2019s trip to Washim from my shop. She didn\u2019t have to stand the whole way for once.',
  },
  {
    name: 'Ayesha Sheikh',
    place: 'Bhandara',
    quote:
      'The route to Nagpur isn\u2019t on any of the big apps. Grameen Bus is the only place I\u2019ve found it listed with real timings.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-paperDark scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase mb-2">Along the route</p>
        <h2 className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-10">
          What riders are saying
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          {QUOTES.map((q) => (
            <figure key={q.name} className="bg-chalk rounded-md border border-ink/10 p-6 flex flex-col justify-between">
              <blockquote className="font-body text-ink/80 text-[15px] leading-relaxed mb-6">
                “{q.quote}”
              </blockquote>
              <figcaption className="font-mono text-xs uppercase tracking-widest text-ink/50">
                {q.name} <span className="text-route">·</span> {q.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
