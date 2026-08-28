import { useState } from 'react'
import { ArrowRight, CreditCard, ReceiptText } from 'lucide-react'
import Reveal from './Reveal'

type Item = { name: string; price: string }
type Category = { id: string; label: string; note?: string; items: Item[] }

const CATEGORIES: Category[] = [
  {
    id: 'generala',
    label: 'Stomatologie generală',
    items: [
      { name: 'Consultație', price: 'Gratuit' },
      { name: 'Anestezie prin infiltrație', price: '15 RON' },
      { name: 'Detartraj ultrasunete / dinte', price: '15 RON' },
      { name: 'Air-Flow', price: '100 RON' },
      { name: 'Periaj profesional arcadă', price: '20 RON' },
      { name: 'Tratament albire profesională / dinte', price: '150 RON' },
      { name: 'Albire in office', price: '1.200 RON' },
      { name: 'Albire at home', price: '800 RON' },
      { name: 'Obturație compozit, 1-2 fețe', price: '200–220 RON' },
      { name: 'Obturație compozit, 3 fețe / reconstituire', price: '220–280 RON' },
    ],
  },
  {
    id: 'endodontie',
    label: 'Endodonție',
    items: [
      { name: 'Tratament monoradicular', price: 'de la 400 RON' },
      { name: 'Tratament pluriradicular', price: '500–550 RON' },
      { name: 'Retratament', price: '500–650 RON' },
      { name: 'Pansament / pulpectomie / obturație canal', price: '100–350 RON' },
    ],
  },
  {
    id: 'chirurgie',
    label: 'Chirurgie orală',
    items: [
      { name: 'Consultație', price: 'Gratuit' },
      { name: 'Extracție monoradicular', price: '150 RON' },
      { name: 'Extracție pluriradicular', price: '200 RON' },
      { name: 'Extracție molar de minte erupt', price: '250 RON' },
      { name: 'Odontectomie', price: '300–500 RON' },
      { name: 'Chistectomie', price: '250 RON' },
      { name: 'Plastie de fren', price: '300 RON' },
    ],
  },
  {
    id: 'parodontologie',
    label: 'Parodontologie',
    items: [
      { name: 'Igienizare completă', price: '200–350 RON' },
      { name: 'Chiuretaj / dinte', price: '150 RON' },
      { name: 'Grefă gingivală liberă', price: '800 RON' },
      { name: 'Grefă conjunctivă', price: '1.000 RON' },
    ],
  },
  {
    id: 'ortodontie',
    label: 'Pedodonție & Ortodonție',
    note: 'Plata aparatelor ortodontice se poate face și în rate.',
    items: [
      { name: 'Consultație', price: 'Gratuit' },
      { name: 'Fluorizare / sigilări', price: '50–100 RON' },
      { name: 'Aparat mobil (placă)', price: '900–1.100 RON' },
      { name: 'Aparat fix metalic (sup+inf)', price: '4.400 RON' },
      { name: 'Aparat fix ceramic (sup+inf)', price: '6.000 RON' },
      { name: 'Aparat fix transparent (sup+inf)', price: '7.000 RON' },
    ],
  },
  {
    id: 'protetica',
    label: 'Protetică',
    items: [
      { name: 'Coroană provizorie', price: 'de la 80 RON' },
      { name: 'Coroană integral ceramică / zirconiu', price: '1.000 RON' },
      { name: 'Fațetă ceramică', price: '1.100 RON' },
      { name: 'Proteză injectată', price: '2.000 RON' },
      { name: 'Proteză subtotală / totală', price: '1.400–1.500 RON' },
    ],
  },
  {
    id: 'implantologie',
    label: 'Implantologie',
    items: [
      { name: 'Consultație', price: 'Gratuit' },
      { name: 'Implant MegaGen AnyRidge', price: '2.000 RON' },
      { name: 'Coroană supraimplantară', price: '1.400–1.700 RON' },
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(CATEGORIES[0].id)
  const activeCategory = CATEGORIES.find((category) => category.id === active) ?? CATEGORIES[0]

  return (
    <section id="tarife" className="bg-[var(--color-bg)] py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <Reveal>
            <span className="eyebrow">Tarife fără surprize</span>
            <h2 className="display-balance mt-5 max-w-3xl font-display text-[clamp(2.6rem,5vw,5.25rem)] leading-[.94] tracking-[-.045em] text-[var(--color-deep)]">
              Planul începe cu un preț clar.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-[var(--color-text-soft)] sm:text-lg">
              Toate tarifele sunt publice. La consultația gratuită aflați exact ce este necesar,
              în ce ordine și cât va costa cazul dumneavoastră.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12 border-y border-[var(--color-line)] py-4" role="tablist">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CATEGORIES.map((category, index) => (
              <button
                key={category.id}
                id={`tab-${category.id}`}
                role="tab"
                aria-selected={active === category.id}
                aria-controls={`tarife-${category.id}`}
                onClick={() => setActive(category.id)}
                className={`group flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all sm:px-5 ${
                  active === category.id
                    ? 'border-[var(--color-deep)] bg-[var(--color-deep)] text-white shadow-[0_12px_30px_rgba(13,59,61,.16)]'
                    : 'border-transparent text-[var(--color-text-soft)] hover:border-[var(--color-line)] hover:bg-[var(--color-surface)]'
                }`}
              >
                <span className={`text-[10px] ${active === category.id ? 'text-[var(--color-claysoft)]' : 'text-[var(--color-accent)]'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                {category.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14} className="mt-8">
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_28px_80px_rgba(13,59,61,.07)] sm:rounded-[2.75rem]">
            <div className="grid gap-5 border-b border-[var(--color-line)] bg-[var(--color-sage)]/55 px-6 py-6 sm:px-9 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--color-deep)] text-white"><ReceiptText size={19} /></span>
                <div>
                  <p className="text-[10px] font-bold tracking-[.18em] text-[var(--color-accent)] uppercase">Listă de prețuri</p>
                  <h3 className="mt-1 font-display text-2xl text-[var(--color-deep)]">{activeCategory.label}</h3>
                </div>
              </div>
              <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--color-deep)]">
                Cereți un plan personalizat <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                id={`tarife-${category.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${category.id}`}
                hidden={category.id !== active}
                className="px-6 pb-7 sm:px-9 sm:pb-9"
              >
                <h3 className="sr-only">{category.label}</h3>
                <div className="divide-y divide-[var(--color-line)]">
                  {category.items.map((item, index) => (
                    <a key={item.name} href="#contact" className="group grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1 py-5 sm:grid-cols-[auto_1fr_auto] sm:py-6">
                      <span className="font-display text-sm italic text-[var(--color-accent)]">{String(index + 1).padStart(2, '0')}</span>
                      <span className="font-display text-lg leading-tight text-[var(--color-deep)] transition-transform group-hover:translate-x-1 sm:text-xl">{item.name}</span>
                      <span className="col-start-2 whitespace-nowrap text-sm font-bold text-[var(--color-text-soft)] sm:col-start-auto sm:text-base">{item.price}</span>
                    </a>
                  ))}
                </div>

                {category.note && (
                  <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[var(--color-claysoft)]/20 px-5 py-4 text-sm font-medium text-[var(--color-deep)]">
                    <CreditCard size={18} className="shrink-0 text-[var(--color-clay)]" />
                    {category.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
