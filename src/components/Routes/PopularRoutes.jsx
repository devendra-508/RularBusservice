import RouteCard from './RouteCard.jsx'
import { popularRoutes } from '../../data/routes.js'

export default function PopularRoutes() {
  return (
    <section id="routes" className="py-16 sm:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase mb-2">Most travelled</p>
            <h2 className="font-display font-semibold uppercase text-3xl sm:text-4xl">Popular routes</h2>
          </div>
          <a href="#search" className="hidden sm:inline text-sm font-semibold text-route hover:underline">
            See all routes →
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 overflow-x-auto pb-2">
        <div className="flex gap-4 w-max">
          {popularRoutes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </div>
    </section>
  )
}
