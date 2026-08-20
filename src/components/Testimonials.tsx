import { Star } from 'lucide-react'
import Reveal from './Reveal'

type Quote = { text: string; author: string }

const QUOTES: Quote[] = [
  { text: 'O echipă profesionistă, răbdătoare și amabilă.', author: 'Georgiana Mureșan' },
  { text: 'O echipă de profesioniști, au și prețuri pământești.', author: 'Alina Ianc' },
]

function QuoteCard({ q }: { q: Quote }) {
  return (
    <div className="w-[320px] shrink-0 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:w-[400px]">
      <div className="flex gap-0.5 text-[var(--color-clay)]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-4 font-display text-lg text-[var(--color-deep)]">“{q.text}”</p>
      <p className="mt-4 text-sm text-[var(--color-text-soft)]">{q.author} · recenzie Google</p>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...QUOTES, ...QUOTES, ...QUOTES, ...QUOTES]

  return (
    <section id="recenzii" className="bg-[var(--color-surface)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <span className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase">
            Recenzii
          </span>
          <h2 className="mt-3 font-display text-3xl text-[var(--color-deep)] sm:text-4xl">
            4.6★ pe Google, din 78 de recenzii.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee-left gap-6 pr-6 group-hover:[animation-play-state:paused]">
            {doubled.map((q, i) => (
              <QuoteCard key={i} q={q} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
