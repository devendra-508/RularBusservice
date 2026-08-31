export default function PassengerSelector({ value, onChange }) {
  const decrement = () => onChange(Math.max(1, value - 1))
  const increment = () => onChange(Math.min(9, value + 1))

  return (
    <div className="flex-1 min-w-[9rem] flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Passengers</span>
      <div className="flex items-center gap-3 border-b-2 border-ink/15 py-1">
        <button
          type="button"
          onClick={decrement}
          aria-label="Decrease passengers"
          className="w-6 h-6 flex items-center justify-center rounded-sm border border-ink/20 hover:border-route hover:text-route transition-colors font-display"
        >
          −
        </button>
        <span className="font-display text-lg font-medium w-4 text-center">{value}</span>
        <button
          type="button"
          onClick={increment}
          aria-label="Increase passengers"
          className="w-6 h-6 flex items-center justify-center rounded-sm border border-ink/20 hover:border-route hover:text-route transition-colors font-display"
        >
          +
        </button>
      </div>
    </div>
  )
}
