import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

// Tarifele nu sunt publicate — nu inventăm prețuri; confirmarea vine la telefon.
const SERVICES = [
  {
    name: 'Consultații',
    desc: 'Examinare completă, diagnostic și plan de tratament explicat pe înțelesul tău.',
  },
  {
    name: 'Vaccinări & deparazitare',
    desc: 'Schema completă de vaccinare pentru câini și pisici, cu carnet și reamintiri.',
  },
  {
    name: 'Sterilizări',
    desc: 'Intervenții de rutină, cu monitorizare post-operatorie și controale incluse.',
  },
  {
    name: 'Chirurgie',
    desc: 'Operații de țesut moale, cu internare de zi și supraveghere până la trezire.',
  },
  {
    name: 'Tratamente & recontroale',
    desc: 'Infecții, dermatologie, afecțiuni interne — cu revenire programată, nu „mai vedem".',
  },
  {
    name: 'Urgențe',
    desc: 'Linie de urgență și în afara programului. Suni, răspundem, decidem împreună.',
  },
]

export default function Services() {
  return (
    <section id="servicii" className="bg-cream scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-[13px] font-bold tracking-[0.28em] text-teal uppercase">Servicii</p>
          <h2 className="font-display mt-3 max-w-2xl text-[34px] leading-[1.1] font-bold text-ink md:text-[46px]">
            Tot ce are nevoie animalul tău, într-un singur loc.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-inksoft">
            Tarifele depind de caz și de talia animalului — le afli exact înainte de orice
            intervenție, la telefon sau la consultație. Fără surprize la plată.
          </p>
        </Reveal>

        <div className="mt-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <a
                href="#contact"
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-b border-ink/10 py-6 transition-colors hover:bg-surface/60 md:grid-cols-[64px_260px_1fr_auto] md:gap-x-8 md:px-4"
              >
                <span className="font-display text-[15px] font-medium text-accent italic">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[22px] font-bold text-ink md:text-[26px]">{s.name}</h3>
                <p className="col-span-3 mt-1 text-[15px] leading-relaxed text-inksoft md:col-span-1 md:mt-0">
                  {s.desc}
                </p>
                <ArrowUpRight
                  size={20}
                  className="hidden translate-y-1 text-accent opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 md:block"
                  aria-hidden
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
