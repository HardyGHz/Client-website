import { CircleCheck, Wallet, Sparkles, Users } from 'lucide-react'
import Reveal from './Reveal'
import RoomVideo from './RoomVideo'

const POINTS = [
  { icon: CircleCheck, title: 'Tarife afișate, nu „la telefon”', text: 'Vedeți prețul fiecărei proceduri înainte să sunați.' },
  { icon: Wallet, title: 'Plată în rate pentru aparate', text: 'Costul aparatului ortodontic poate fi plătit eșalonat.' },
  { icon: Sparkles, title: 'Consultație gratuită', text: 'Aflați ce tratament vi se potrivește fără costul consultației.' },
  { icon: Users, title: '6 specializări reale', text: 'Fiecare caz ajunge direct la medicul cu expertiza potrivită.' },
]

export default function Differentiators() {
  return (
    <section className="bg-[var(--color-bg)] py-8 sm:py-12">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] bg-[var(--color-deep)] p-4 text-white shadow-[0_38px_100px_rgba(13,59,61,.18)] sm:rounded-[3.5rem] sm:p-6 lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-stretch">
            <Reveal className="relative min-h-[420px] lg:min-h-[690px]">
              <RoomVideo className="absolute inset-0 h-full w-full rounded-[1.4rem] sm:rounded-[2.7rem]" alt="Cabinetul Crisdental din Florești, filmat în sala de tratament" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-[var(--color-deep)]/80 px-4 py-3 text-xs text-white/75 backdrop-blur-md sm:inset-x-6 sm:bottom-6">
                Cabinetul nostru, filmat exact așa cum îl veți găsi.
              </div>
            </Reveal>

            <div className="px-2 py-4 sm:px-5 sm:py-8 lg:flex lg:flex-col lg:justify-center lg:px-8">
              <Reveal>
                <span className="eyebrow !text-[var(--color-claysoft)]">De ce Crisdental</span>
                <h2 className="display-balance mt-5 font-display text-[clamp(2.5rem,4.5vw,4.75rem)] leading-[.95] tracking-[-.04em]">
                  Mai puțină incertitudine. Mai multă încredere.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-white/62">
                  Un cabinet bun nu vă lasă să ghiciți ce urmează. Vă explicăm opțiunile,
                  prețurile și pașii înainte de orice tratament.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-x-5 sm:grid-cols-2">
                {POINTS.map((point, index) => (
                  <Reveal key={point.title} delay={0.06 + index * 0.05} className="border-t border-white/12 py-5">
                    <div className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-white"><point.icon size={16} strokeWidth={2.2} /></span>
                      <div>
                        <h3 className="font-display text-lg leading-tight">{point.title}</h3>
                        <p className="mt-2 text-sm leading-5 text-white/55">{point.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
