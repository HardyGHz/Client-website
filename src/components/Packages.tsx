import Reveal from './Reveal'
import { BOOKEO_URL } from './Navbar'

const PACKS = [
  {
    name: 'Prima plutire',
    price: '140 lei',
    meta: '60 min · L–J (V–D: 160 lei)',
    desc: 'Tot ce ai nevoie e inclus: prosoape, produse de baie, dopuri de urechi, ceai.',
    featured: false,
  },
  {
    name: 'Starter Pack',
    price: '330 lei',
    meta: '3 plutiri · 110 lei / ședință',
    desc: 'Ritmul recomandat pentru început: efectele plutirii se adâncesc de la o ședință la alta.',
    featured: true,
  },
  {
    name: 'Abonament 4 plutiri',
    price: 'de la 480 lei',
    meta: 'L–J 480 lei · V–D 560 lei',
    desc: 'Pentru cei care și-au făcut din liniște un obicei. 120 lei / ședință în timpul săptămânii.',
    featured: false,
  },
]

export default function Packages() {
  return (
    <section id="pachete" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-copper uppercase">Pachete</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight font-light text-ink sm:text-5xl">
            Începe cu o oră. <em className="text-copper italic">Rămâi pentru obicei.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl p-9 ${
                  p.featured
                    ? 'bg-deep text-mist shadow-[0_30px_70px_rgba(10,30,24,0.3)]'
                    : 'border border-ink/10 bg-surface text-ink'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-9 rounded-full bg-copper px-4 py-1.5 text-[10px] font-bold tracking-[0.18em] text-deep uppercase">
                    Cel mai ales
                  </span>
                )}
                <h3 className="font-display text-2xl font-normal">{p.name}</h3>
                <p className={`mt-6 font-display text-5xl font-light ${p.featured ? 'text-coppersoft' : 'text-ink'}`}>
                  {p.price}
                </p>
                <p className={`mt-2 text-xs font-medium tracking-[0.08em] uppercase ${p.featured ? 'text-mist/60' : 'text-ink/50'}`}>
                  {p.meta}
                </p>
                <p className={`mt-5 flex-1 text-sm leading-relaxed font-light ${p.featured ? 'text-mist/75' : 'text-ink/65'}`}>
                  {p.desc}
                </p>
                <a
                  href={BOOKEO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 rounded-full py-3.5 text-center text-[13px] font-semibold tracking-[0.1em] uppercase transition ${
                    p.featured
                      ? 'bg-copper text-deep hover:bg-coppersoft'
                      : 'border border-ink/20 text-ink hover:border-copper hover:text-copper'
                  }`}
                >
                  Rezervă
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div
            id="vouchere"
            className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-copper/30 bg-surface p-9 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="font-display text-[26px] font-normal text-ink">
                Oferă liniște <em className="text-copper italic">cadou</em>.
              </h3>
              <p className="mt-2 max-w-md text-sm font-light text-ink/60">
                Voucher cadou pentru plutire, masaj sau un ritual complet — cadoul pentru omul care
                „are deja de toate".
              </p>
            </div>
            <a
              href="https://www.serenityfloat.ro/cadou/"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full bg-deep px-8 py-4 text-[13px] font-semibold tracking-[0.1em] text-mist uppercase transition hover:bg-copper hover:text-deep"
            >
              Comandă un voucher
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
