import { useEffect, useState } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { isOpenNow } from '../lib/hours'
import { PHONE_DISPLAY, PHONE_TEL } from './Navbar'
import SmilePlan from './SmilePlan'

const PRICE_TEASERS = [
  { label: 'Consultație', price: 'Gratuit' },
  { label: 'Detartraj', price: 'de la 15 RON' },
  { label: 'Obturație', price: 'de la 200 RON' },
  { label: 'Implant MegaGen', price: 'de la 2.000 RON' },
]

export default function Hero() {
  const [open, setOpen] = useState<boolean | null>(null)
  useEffect(() => {
    setOpen(isOpenNow())
    const id = window.setInterval(() => setOpen(isOpenNow()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden"><div className="absolute -top-60 -left-44 h-[38rem] w-[38rem] rounded-full bg-[var(--color-accentsoft)]/20 blur-3xl" style={{ animation: 'drift-a 20s ease-in-out infinite' }} /><div className="absolute top-1/3 -right-64 h-[42rem] w-[42rem] rounded-full bg-[var(--color-claysoft)]/25 blur-3xl" style={{ animation: 'drift-b 24s ease-in-out infinite' }} /></div>
      <div className="section-shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-3">
              {open !== null && <span className="inline-flex min-h-8 items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 text-xs font-semibold"><span className={`h-2 w-2 rounded-full ${open ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-clay)]'}`} />{open ? 'Deschis acum' : 'Închis acum'}</span>}
              <span className="text-xs font-semibold tracking-[.18em] text-[var(--color-text-soft)] uppercase">Florești · de peste 15 ani</span>
            </div>
            <h1 className="display-balance font-display text-[clamp(3.5rem,6.5vw,6.8rem)] leading-[.92] tracking-[-.045em] text-[var(--color-deep)]">Știți ce urmează. Știți cât costă. <em className="font-normal text-[var(--color-accent)]">Înainte</em> să începeți.</h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-text-soft)] md:text-xl">Tarife clare pentru fiecare procedură, consultație gratuită și șase medici specialiști care construiesc planul potrivit pentru cazul dumneavoastră.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#tarife" className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[var(--color-deep)] px-7 font-semibold text-white transition-transform hover:-translate-y-0.5">Vezi tarifele <ArrowRight size={17} /></a><a href={`tel:${PHONE_TEL}`} className="inline-flex min-h-14 items-center gap-2 rounded-full border border-[var(--color-deep)]/25 bg-[var(--color-surface)]/50 px-7 font-semibold text-[var(--color-deep)] transition-colors hover:bg-[var(--color-surface)]"><Phone size={17} /> {PHONE_DISPLAY}</a></div>
            <p className="mt-4 text-xs text-[var(--color-text-soft)]">Vă răspundem în aceeași zi lucrătoare. Fără presiune, fără costuri ascunse.</p>
          </div>
          <SmilePlan />
        </div>
        <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)]/80 backdrop-blur-sm sm:grid-cols-4">
          {PRICE_TEASERS.map((item, index) => <a key={item.label} href="#tarife" className="group min-h-28 border-[var(--color-line)] p-5 transition-colors hover:bg-[var(--color-sage)]/60 max-sm:border-b odd:border-r sm:border-r last:border-r-0"><span className="flex items-center justify-between text-xs text-[var(--color-text-soft)]"><span>{item.label}</span><span className="font-display italic text-[var(--color-accent)]">0{index + 1}</span></span><strong className="mt-3 block font-display text-xl text-[var(--color-deep)] md:text-2xl">{item.price}</strong></a>)}
        </div>
      </div>
    </section>
  )
}
