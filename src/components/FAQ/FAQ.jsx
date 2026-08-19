import { useState } from 'react'

const FAQS = [
  {
    q: 'Do I need to print my ticket?',
    a: 'No. Show the confirmation on your phone to the conductor, or read out your booking code if you\u2019re travelling without a smartphone.',
  },
  {
    q: 'Can I book a seat for someone else?',
    a: 'Yes — enter their name and travel details at checkout. The ticket is valid for whoever\u2019s name is on it.',
  },
  {
    q: 'What if the bus is delayed?',
    a: 'Live tracking updates automatically. If a delay pushes past 20 minutes, we\u2019ll send a message so you\u2019re not left waiting blind.',
  },
  {
    q: 'Is cash on board still an option?',
    a: 'Yes. You can reserve a seat online and pay the conductor in cash when you board, the same as always.',
  },
  {
    q: 'My village isn\u2019t listed — what do I do?',
    a: 'Message us through Help with the nearest bus stand name and we\u2019ll work with the local operator to get it added.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display font-medium text-base sm:text-lg">{item.q}</span>
        <span
          className={`shrink-0 font-mono text-route text-xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="overflow-hidden text-ink/65 text-sm leading-relaxed max-w-xl">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 sm:py-24 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase mb-2">Before you board</p>
        <h2 className="font-display font-semibold uppercase text-3xl sm:text-4xl mb-8">Frequently asked</h2>

        <div>
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
