import Reveal from './Reveal'

const STATS = [
  { value: '15+', label: 'ani de activitate', detail: 'în Florești' },
  { value: '6', label: 'medici specialiști', detail: 'sub același acoperiș' },
  { value: '4.6★', label: '78 de recenzii', detail: 'evaluare Google' },
  { value: '0 RON', label: 'consultație', detail: 'la orice categorie' },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="section-shell grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, index) => <Reveal key={stat.label} delay={index * .04} className="border-b border-[var(--color-line)] px-3 py-7 odd:border-r md:border-r md:border-b-0 md:px-7 first:pl-0 last:border-r-0"><strong className="font-display text-4xl leading-none text-[var(--color-deep)] md:text-5xl">{stat.value}</strong><span className="mt-3 block text-sm font-semibold">{stat.label}</span><span className="mt-1 block text-xs text-[var(--color-text-soft)]">{stat.detail}</span></Reveal>)}
      </div>
    </section>
  )
}
