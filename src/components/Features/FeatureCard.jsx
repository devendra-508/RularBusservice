export default function FeatureCard({ mark, title, description }) {
  return (
    <div className="bg-chalk rounded-md border border-ink/10 p-6">
      <span className="font-mono text-xs text-marigold-dark border border-marigold rounded-full w-8 h-8 flex items-center justify-center mb-4">
        {mark}
      </span>
      <h3 className="font-display font-semibold text-lg uppercase mb-2">{title}</h3>
      <p className="text-ink/65 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
