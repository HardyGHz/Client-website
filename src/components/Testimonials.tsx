import { ExternalLink, Quote, Star } from 'lucide-react'
import Reveal from './Reveal'

type Review = { text: string; author: string }

const REVIEWS: Review[] = [
  { text: 'O echipă profesionistă, răbdătoare și amabilă.', author: 'Georgiana Mureșan' },
  { text: 'O echipă de profesioniști, au și prețuri pământești.', author: 'Alina Ianc' },
]

function Stars() {
  return <div className="flex gap-1 text-[var(--color-clay)]" aria-label="5 stele">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={0} />)}</div>
}

export default function Testimonials() {
  return (
    <section id="recenzii" className="bg-[var(--color-surface)] py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal className="flex min-h-[360px] flex-col justify-between rounded-[2.25rem] bg-[var(--color-sage)] p-8 sm:p-10">
            <div>
              <span className="eyebrow">Recenzii Google</span>
              <p className="mt-7 font-display text-[6rem] leading-none tracking-[-.07em] text-[var(--color-deep)] sm:text-[8rem]">4.6</p>
              <Stars />
              <p className="mt-3 text-sm text-[var(--color-text-soft)]">din 78 de recenzii publice</p>
            </div>
            <a href="https://www.google.com/search?q=Crisdental+Floresti+recenzii" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-deep)] hover:underline">
              Vedeți toate recenziile <ExternalLink size={15} />
            </a>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {REVIEWS.map((review, index) => (
              <Reveal key={review.author} delay={0.08 + index * 0.07}>
                <article className={`flex h-full min-h-[360px] flex-col justify-between rounded-[2.25rem] border p-8 sm:p-10 ${index === 0 ? 'border-[var(--color-line)] bg-[var(--color-bg)]' : 'border-[var(--color-deep)] bg-[var(--color-deep)] text-white'}`}>
                  <div>
                    <Quote size={34} strokeWidth={1.5} className={index === 0 ? 'text-[var(--color-clay)]' : 'text-[var(--color-claysoft)]'} />
                    <blockquote className={`display-balance mt-7 font-display text-[clamp(1.65rem,2.5vw,2.4rem)] leading-[1.12] ${index === 0 ? 'text-[var(--color-deep)]' : 'text-white'}`}>
                      „{review.text}”
                    </blockquote>
                  </div>
                  <div className={`mt-10 border-t pt-5 ${index === 0 ? 'border-[var(--color-line)]' : 'border-white/15'}`}>
                    <Stars />
                    <p className={`mt-3 text-sm font-semibold ${index === 0 ? 'text-[var(--color-text-soft)]' : 'text-white/65'}`}>{review.author} · Google</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
