import Reveal from './Reveal'

const STATS = [
  { value: '15+', label: 'ani de activitate' },
  { value: '6', label: 'medici specialiști' },
  { value: '4.6★', label: 'Google · 78 recenzii' },
  { value: '0 RON', label: 'consultație, la orice categorie' },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="text-center md:text-left">
                <div className="font-display text-3xl text-[var(--color-deep)] md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-[var(--color-text-soft)]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
