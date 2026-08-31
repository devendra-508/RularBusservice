export default function DateSelector({ value, onChange }) {
  const today = new Date().toISOString().split('T')[0]

  return (
    <label className="flex-1 min-w-[9rem] flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Date of travel</span>
      <input
        type="date"
        min={today}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent font-display text-lg font-medium border-b-2 border-ink/15 focus:border-route outline-none py-1 cursor-pointer"
      />
    </label>
  )
}
