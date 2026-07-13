import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'

// Válaszok forrása: a serenityfloat.ro élő FAQ szekciója (2026-07-11), tömörítve
const QA = [
  {
    q: 'Cât durează o ședință de plutire?',
    a: 'O sesiune standard durează 60 de minute, cu timp separat pentru duș înainte și după — fiecare cameră are propria cabină. Pe măsură ce avansezi, poți încerca sesiuni de 90–120 de minute.',
  },
  {
    q: 'Cu cât timp înainte să ajung?',
    a: 'Cu aproximativ 10 minute înainte de programare, ca să te schimbi și să faci dușul de dinaintea plutirii, fără grabă.',
  },
  {
    q: 'Ce trebuie să aduc cu mine?',
    a: 'Nimic — doar pe tine. Prosoape proaspete, produse de baie, dopuri de urechi și un ceai cald te așteaptă la centru.',
  },
  {
    q: 'Cum mă pregătesc înainte de plutire?',
    a: 'Evită cofeina și mesele grele cu 1–2 ore înainte. Nu te bărbieri și nu te epila în ziua respectivă — sarea Epsom poate ustura pielea proaspăt iritată. Și hidratează-te bine.',
  },
  {
    q: 'Dacă îmi va fi frică sau am claustrofobie?',
    a: 'Primim zilnic oaspeți aflați la prima plutire. Îți explicăm întregul proces înainte, iar lumina și muzica pot rămâne pornite pe toată durata sesiunii — controlul e mereu la tine.',
  },
  {
    q: 'Cât de curată e apa?',
    a: 'Apa trece prin 3 etape de igienizare înainte de fiecare oaspete: un filtru fizic reține orice impuritate, apoi filtrele UV și de ozon elimină agenții patogeni. Practic, intri de fiecare dată într-un bazin proaspăt pregătit.',
  },
  {
    q: 'Pot dărui o plutire cadou?',
    a: 'Da — există vouchere cadou pentru plutire, masaj sau pachete combinate. Se comandă online și ajung imediat pe email.',
  },
]

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-xl font-normal text-ink sm:text-[22px]">{q}</span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-2xl font-light text-copper"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 text-[15px] leading-relaxed font-light text-ink/65">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="intrebari" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.4em] text-copper uppercase">
            Întrebări frecvente
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-light text-ink sm:text-5xl">
            Tot ce vrei să știi <em className="text-copper italic">înainte să plutești</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-ink/10">
            {QA.map((item, i) => (
              <Item
                key={item.q}
                q={item.q}
                a={item.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
