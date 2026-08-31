import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 →.'

function FlapCell({ target }) {
  const [display, setDisplay] = useState(' ')

  useEffect(() => {
    let frame = 0
    const totalFrames = 6 + Math.floor(Math.random() * 6)
    const interval = setInterval(() => {
      frame += 1
      if (frame >= totalFrames) {
        setDisplay(target)
        clearInterval(interval)
      } else {
        setDisplay(CHARS[Math.floor(Math.random() * CHARS.length)])
      }
    }, 45)
    return () => clearInterval(interval)
  }, [target])

  return (
    <span className="inline-flex items-center justify-center bg-asphalt text-chalk font-mono text-[13px] sm:text-sm w-[1ch] min-w-[0.75em] h-6 rounded-[2px] mx-[1px] tabular-nums">
      {display}
    </span>
  )
}

/**
 * Renders a row of characters that "flip" through random glyphs before
 * settling on the target text, mimicking a mechanical Solari departure board.
 */
export default function SplitFlapBoard({ text, className = '' }) {
  const chars = text.toUpperCase().split('')
  return (
    <div className={`flex flex-wrap ${className}`} aria-label={text}>
      {chars.map((c, i) => (
        <FlapCell key={`${text}-${i}`} target={c} />
      ))}
    </div>
  )
}
