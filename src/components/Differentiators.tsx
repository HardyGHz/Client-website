import { CircleCheck, Wallet, Sparkles, Users } from 'lucide-react'
import Reveal from './Reveal'

const POINTS = [
  {
    icon: CircleCheck,
    title: 'Tarife afișate, nu „la telefon"',
    text: 'Vedeți prețul fiecărei proceduri înainte să sunați. Puține cabinete din Florești fac asta.',
  },
  {
    icon: Wallet,
    title: 'Plată în rate pentru aparate',
    text: 'Aparatele ortodontice fixe se pot plăti eșalonat, fără să blocați o sumă mare dintr-o dată.',
  },
  {
    icon: Sparkles,
    title: 'Consultație gratuită',
    text: 'La stomatologie generală, chirurgie, ortodonție sau implantologie — nu plătiți ca să aflați ce aveți nevoie.',
  },
  {
    icon: Users,
    title: '6 specializări reale',
    text: 'Ortodonție, endodonție, chirurgie dento-alveolară — nu un singur medic care face de toate.',
  },
]

export default function Differentiators() {
  return (
    <section className="bg-[var(--color-bg)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1704455306251-b4634215d98f?w=1200&q=80&auto=format&fit=crop"
                alt="Interior modern al unui cabinet stomatologic"
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase">
                De ce Crisdental
              </span>
              <h2 className="mt-3 font-display text-3xl text-[var(--color-deep)] sm:text-4xl">
                Diferența nu e în echipamente. E în transparență.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {POINTS.map((p, i) => (
                <Reveal key={p.title} delay={0.08 + i * 0.06} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <p.icon size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="font-display text-lg text-[var(--color-deep)]">{p.title}</div>
                    <div className="mt-1 text-sm text-[var(--color-text-soft)]">{p.text}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
