import Reveal from './Reveal'
import { BOOKEO_URL } from './Navbar'

type Service = {
  name: string
  desc: string
  price: string
  meta: string
}

const SERVICES: Service[] = [
  {
    name: 'Terapie prin plutire',
    desc: 'O oră de imponderabilitate în apă cu sare Epsom, în camera ta privată, cu duș propriu.',
    price: 'de la 140 lei',
    meta: '60 min · L–J 140 lei / V–D 160 lei',
  },
  {
    name: 'Masaj de relaxare',
    desc: 'Mișcări lente, presiune blândă, tensiunea zilei lăsată pe masă.',
    price: '180 lei',
    meta: '55 min',
  },
  {
    name: 'Masaj deep tissue',
    desc: 'Lucru în profunzime pe zonele care țin scorul stresului: spate, umeri, cervicală.',
    price: '200 lei',
    meta: '55 min',
  },
  {
    name: 'Yoga',
    desc: 'Respirație și mișcare într-un spațiu gândit pentru liniște.',
    price: 'la rezervare',
    meta: 'clase programate',
  },
  {
    name: 'Mind Machine',
    desc: 'Relaxare ghidată prin impulsuri de lumină și sunet.',
    price: 'la rezervare',
    meta: 'ședințe scurte',
  },
  {
    name: 'Oxygen Bar',
    desc: 'Un plus de claritate după plutire sau masaj.',
    price: 'la rezervare',
    meta: 'complement',
  },
]

export default function Services() {
  return (
    <section id="servicii" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-copper uppercase">Servicii</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-light text-ink sm:text-5xl">
            Alege cum <em className="text-copper italic">încetinești</em>.
          </h2>
        </Reveal>

        <div className="mt-14">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <a
                href={BOOKEO_URL}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-t border-ink/10 py-7 transition last:border-b hover:bg-surface sm:gap-x-8"
              >
                <span className="font-display text-sm text-ink/35">0{i + 1}</span>
                <span>
                  <span className="font-display text-2xl font-normal text-ink transition group-hover:text-copper sm:text-[28px]">
                    {s.name}
                  </span>
                  <span className="mt-1.5 block max-w-lg text-sm leading-relaxed font-light text-ink/60">
                    {s.desc}
                  </span>
                </span>
                <span className="text-right">
                  <span className="block text-[15px] font-semibold text-ink">{s.price}</span>
                  <span className="mt-1 block text-xs font-light whitespace-nowrap text-ink/50">{s.meta}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 text-sm font-light text-ink/55">
            Prețurile sunt cele afișate de centru. Fără costuri ascunse — lista completă de masaje
            (peste 20 de tipuri) e disponibilă la rezervare.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
