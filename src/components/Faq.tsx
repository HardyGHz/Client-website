import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import Reveal from './Reveal'

const ITEMS = [
  { q: 'Tratamentul doare?', a: 'Marea majoritate a tratamentelor, inclusiv cele de canal, se efectuează sub anestezie locală și sunt nedureroase. La consultația gratuită vă explicăm exact ce presupune procedura dvs., minut cu minut, înainte să începem.' },
  { q: 'Cât costă o consultație?', a: 'Consultația este gratuită, la stomatologie generală, chirurgie orală, pedodonție/ortodonție și implantologie. Plătiți doar tratamentul pe care îl alegeți, cu prețul afișat în secțiunea Tarife.' },
  { q: 'De la ce vârstă poate copilul meu purta aparat dentar?', a: 'Aparatul mobil (placă) se poate aplica de la 8-11 ani, iar cel fix de la 11 ani. Durata unui tratament ortodontic este, în general, între 12 și 24 de luni.' },
  { q: 'Pot plăti tratamentul în rate?', a: 'Da, pentru aparatele ortodontice fixe și mobile plata se poate face eșalonat. Discutăm opțiunile la consultație.' },
  { q: 'Care este programul cabinetului?', a: 'Luni-Vineri: 10:00-13:00 și 14:00-19:00. Sâmbăta și duminica cabinetul este închis.' },
  { q: 'Ce fac dacă am dureri puternice acum?', a: 'Sunați-ne la 0745 678 261 și vă oferim cea mai apropiată programare disponibilă în program.' },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="intrebari" className="bg-[var(--color-bg)] py-24 sm:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">Întrebări frecvente</span>
          <h2 className="display-balance mt-5 font-display text-[clamp(2.6rem,4.6vw,4.8rem)] leading-[.95] tracking-[-.04em] text-[var(--color-deep)]">Clarificăm înainte să începeți.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-[var(--color-text-soft)]">Nu găsiți răspunsul? Spuneți-ne ce vă preocupă și vă sunăm cu o explicație clară.</p>
          <a href="#contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-deep)] px-5 py-3 text-sm font-bold text-white">Întrebați un medic <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
        </Reveal>

        <div className="border-t border-[var(--color-line)]">
          {ITEMS.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.035}>
              <div className="border-b border-[var(--color-line)]">
                <button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} className="group flex w-full items-start justify-between gap-6 py-6 text-left sm:py-8">
                  <span className="flex gap-4 sm:gap-6"><span className="mt-1 text-[10px] font-bold tracking-[.16em] text-[var(--color-accent)]">{String(index + 1).padStart(2, '0')}</span><span className="font-display text-xl leading-tight text-[var(--color-deep)] sm:text-2xl">{item.q}</span></span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-accent)] transition-all duration-300 group-hover:border-[var(--color-accent)] ${open === index ? 'rotate-45 bg-[var(--color-deep)] text-white' : ''}`}><Plus size={17} /></span>
                </button>
                <AnimatePresence initial={false}>
                  {open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"><p className="max-w-2xl pr-12 pb-8 pl-9 text-base leading-7 text-[var(--color-text-soft)] sm:pl-12">{item.a}</p></motion.div>}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
