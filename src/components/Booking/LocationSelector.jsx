import { destinations } from '../../data/destinations.js'

export default function LocationSelector({ label, value, onChange, excludeValue }) {
  const options = destinations.filter((d) => d !== excludeValue)

  return (
    <label className="flex-1 min-w-[9rem] flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent font-display text-lg font-medium border-b-2 border-ink/15 focus:border-route outline-none py-1 pr-2 cursor-pointer"
      >
        {options.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </label>
  )
}
