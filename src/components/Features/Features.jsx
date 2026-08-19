import FeatureCard from './FeatureCard.jsx'

const FEATURES = [
  {
    mark: 'GPS',
    title: 'Live tracking',
    description: 'Watch your bus move on the map from the moment it leaves the depot to the moment it reaches you.',
  },
  {
    mark: '₹',
    title: 'Pay any way',
    description: 'UPI, cash on boarding, or card — book online and settle up however works at your stop.',
  },
  {
    mark: '✓',
    title: 'Verified operators',
    description: 'Every route on Grameen Bus is run by a licensed operator we\u2019ve personally checked in on.',
  },
  {
    mark: '⌂',
    title: 'Routes maps miss',
    description: 'We cover the village-to-town connections that never made it onto the big booking apps.',
  },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-asphalt text-chalk">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-marigold uppercase mb-2">Why Grameen Bus</p>
        <h2 className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-10 max-w-lg">
          Built for the routes that actually get you home
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
