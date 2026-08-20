import { useEffect, useState } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { isOpenNow } from '../lib/hours'
import { PHONE_DISPLAY, PHONE_TEL } from './Navbar'

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
    const id = setInterval(() => setOpen(isOpenNow()), 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[var(--color-bg)] pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -top-1/4 -left-1/4 h-[75vh] w-[75vh] rounded-full opacity-50 blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--color-accentsoft) 0%, transparent 70%)',
            animation: 'drift-a 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-1/3 -right-1/5 h-[65vh] w-[65vh] rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--color-claysoft) 0%, transparent 70%)',
            animation: 'drift-b 24s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-[55vh] w-[55vh] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--color-deep) 0%, transparent 70%)',
            animation: 'drift-c 17s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          {open !== null && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-1.5 text-xs font-medium text-[var(--color-text-soft)]">
              <span
                className={`h-1.5 w-1.5 rounded-full ${open ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-text-soft)]/50'}`}
              />
              {open ? 'Deschis acum' : 'Închis acum · L-V 10-13, 14-19'}
            </div>
          )}

          <h1 className="font-display text-4xl leading-[1.1] text-[var(--color-deep)] sm:text-5xl md:text-6xl">
            Tratament stomatologic pe care îl înțelegeți{' '}
            <em className="text-[var(--color-accent)] italic">dinainte</em> să începeți.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-[var(--color-text-soft)]">
            Tarife clare, afișate pentru fiecare procedură, 6 medici specialiști sub același
            acoperiș și o consultație gratuită, indiferent de tratamentul de care aveți nevoie.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#tarife"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-deep)] px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              Vezi tarifele <ArrowRight size={16} />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-deep)]/20 px-7 py-3.5 text-sm font-medium text-[var(--color-deep)] transition-colors hover:bg-[var(--color-deep)]/5"
            >
              <Phone size={15} /> Sună acum: {PHONE_DISPLAY}
            </a>
          </div>

          <p className="mt-4 text-xs text-[var(--color-text-soft)]">
            Vă răspundem în aceeași zi lucrătoare. Fără presiune, fără costuri ascunse.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PRICE_TEASERS.map((t) => (
            <a
              key={t.label}
              href="#tarife"
              className="group rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/70 px-4 py-4 backdrop-blur-sm transition-colors hover:border-[var(--color-accent)]/40"
            >
              <div className="text-xs text-[var(--color-text-soft)]">{t.label}</div>
              <div className="mt-1 font-display text-lg text-[var(--color-deep)]">{t.price}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
