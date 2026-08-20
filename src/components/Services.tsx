import { useState } from 'react'
import { ArrowUpRight, CreditCard } from 'lucide-react'
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

  return (
    <section id="tarife" className="bg-[var(--color-bg)] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase">
            Tarife
          </span>
          <h2 className="mt-3 font-display text-3xl text-[var(--color-deep)] sm:text-4xl">
            Fiecare tratament, cu prețul lui, dinainte.
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-text-soft)]">
            Nu vă spunem „tarif la telefon". Toate prețurile de mai jos sunt cele practicate în
            cabinet. Prețul final se confirmă la consultația gratuită, în funcție de cazul dvs.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2" role="tablist">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              id={`tab-${c.id}`}
              role="tab"
              aria-selected={active === c.id}
              aria-controls={`tarife-${c.id}`}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === c.id
                  ? 'border-[var(--color-deep)] bg-[var(--color-deep)] text-white'
                  : 'border-[var(--color-line)] text-[var(--color-text-soft)] hover:border-[var(--color-accent)]/50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </Reveal>

        {/*
          Every category stays in the DOM and only the inactive ones are hidden.
          Rendering just the active tab would leave six of the seven price lists
          invisible to search engines, and this price list is the single thing
          that sets this practice apart from competitors who say "tarif la telefon".
        */}
        <Reveal delay={0.15} className="mt-8">
          {CATEGORIES.map((c) => (
            <div
              key={c.id}
              id={`tarife-${c.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${c.id}`}
              hidden={c.id !== active}
            >
              <h3 className="sr-only">{c.label}</h3>
              <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
                {c.items.map((item, i) => (
                  <a
                    key={item.name}
                    href="#contact"
                    className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-[var(--color-surface)]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="hidden font-display text-sm text-[var(--color-accent)] italic sm:block">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-base text-[var(--color-deep)] sm:text-lg">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[var(--color-text-soft)] sm:text-base">
                        {item.price}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-[var(--color-accent)] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </div>
                  </a>
                ))}
              </div>

              {c.note && (
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[var(--color-claysoft)]/15 px-5 py-4 text-sm text-[var(--color-deep)]">
                  <CreditCard size={18} className="shrink-0 text-[var(--color-clay)]" />
                  {c.note}
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
