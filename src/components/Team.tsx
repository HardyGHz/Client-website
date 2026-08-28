import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const TEAM = [
  { name: 'Dr. Cristina Orga', role: 'Administrator cabinet', specialty: 'Master în Reabilitare Orală' },
  { name: 'Dr. Anca Labunet', role: 'Medic specialist', specialty: 'Ortodonție și Ortopedie Dento-Facială' },
  { name: 'Dr. Vlad Opriș', role: 'Medic stomatolog', specialty: 'Stomatologie generală' },
  { name: 'Dr. Gheorghe Tamaș', role: 'Medic specialist', specialty: 'Chirurgie Dento-Alveolară' },
  { name: 'Dr. Roxana Muntean', role: 'Medic specialist', specialty: 'Endodonție' },
  { name: 'Dr. Cristian Zirbo', role: 'Medic stomatolog', specialty: 'Stomatologie generală' },
]

function initials(name: string) {
  return name.replace('Dr.', '').trim().split(' ').map((part) => part[0]).join('').slice(0, 2)
}

export default function Team() {
  return (
    <section id="echipa" className="bg-[var(--color-surface)] py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-[var(--color-line)] pb-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <span className="eyebrow">Echipa medicală</span>
            <h2 className="display-balance mt-5 max-w-3xl font-display text-[clamp(2.6rem,5vw,5.25rem)] leading-[.94] tracking-[-.045em] text-[var(--color-deep)]">
              Specialistul potrivit, deja aici.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:justify-self-end lg:pb-2">
            <p className="max-w-lg text-base leading-7 text-[var(--color-text-soft)] sm:text-lg">
              Șase medici care acoperă traseul complet — de la prevenție și ortodonție până la
              endodonție și chirurgie dento-alveolară.
            </p>
          </Reveal>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((doctor, index) => (
            <Reveal key={doctor.name} delay={index * 0.045}>
              <a
                href="#contact"
                className="group relative block min-h-[280px] overflow-hidden border-b border-[var(--color-line)] p-6 transition-colors hover:bg-[var(--color-sage)]/55 sm:border-r sm:p-8 lg:min-h-[310px] lg:[&:nth-child(3n)]:border-r-0"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold tracking-[.2em] text-[var(--color-accent)]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-deep)] transition-all group-hover:rotate-45 group-hover:border-[var(--color-deep)]"><ArrowUpRight size={17} /></span>
                </div>
                <div className="pointer-events-none absolute -right-3 top-8 font-display text-[7.5rem] leading-none tracking-[-.08em] text-[var(--color-deep)]/[.045] transition-transform duration-500 group-hover:-translate-x-2 sm:text-[9rem]">
                  {initials(doctor.name)}
                </div>
                <div className="relative mt-24">
                  <p className="text-xs font-semibold tracking-[.08em] text-[var(--color-text-soft)] uppercase">{doctor.role}</p>
                  <h3 className="mt-2 font-display text-2xl leading-none text-[var(--color-deep)] sm:text-[1.7rem]">{doctor.name}</h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-5 text-[var(--color-accent)]">{doctor.specialty}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
