import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'

const ITEMS = [
  {
    q: 'Tratamentul doare?',
    a: 'Marea majoritate a tratamentelor, inclusiv cele de canal, se efectuează sub anestezie locală și sunt nedureroase. La consultația gratuită vă explicăm exact ce presupune procedura dvs., minut cu minut, înainte să începem.',
  },
  {
    q: 'Cât costă o consultație?',
    a: 'Consultația este gratuită, la stomatologie generală, chirurgie orală, pedodonție/ortodonție și implantologie. Plătiți doar tratamentul pe care îl alegeți, cu prețul afișat în secțiunea Tarife.',
  },
  {
    q: 'De la ce vârstă poate copilul meu purta aparat dentar?',
    a: 'Aparatul mobil (placă) se poate aplica de la 8-11 ani, iar cel fix de la 11 ani. Durata unui tratament ortodontic este, în general, între 12 și 24 de luni.',
  },
  {
    q: 'Pot plăti tratamentul în rate?',
    a: 'Da, pentru aparatele ortodontice fixe și mobile plata se poate face eșalonat. Discutăm opțiunile la consultație.',
  },
  {
    q: 'Care este programul cabinetului?',
    a: 'Luni-Vineri: 10:00-13:00 și 14:00-19:00. Sâmbăta și duminica cabinetul este închis.',
  },
  {
    q: 'Ce fac dacă am dureri puternice acum?',
    a: 'Sunați-ne la 0745 678 261 și vă oferim cea mai apropiată programare disponibilă în program.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="intrebari" className="bg-[var(--color-bg)] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="text-xs font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase">
            Întrebări
          </span>
          <h2 className="mt-3 font-display text-3xl text-[var(--color-deep)] sm:text-4xl">
            Ce vă întrebați înainte să sunați.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-[var(--color-line)] border-t border-b border-[var(--color-line)]">
          {ITEMS.map((item, i) => (
            <div key={item.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-lg text-[var(--color-deep)]">{item.q}</span>
                <Plus
                  size={18}
                  className={`shrink-0 text-[var(--color-accent)] transition-transform duration-300 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[var(--color-text-soft)]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
