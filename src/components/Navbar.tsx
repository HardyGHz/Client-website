import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'

const LINKS = [
  ['Servicii', '#servicii'],
  ['Floating', '#floating'],
  ['Pachete', '#pachete'],
  ['Întrebări', '#intrebari'],
  ['Contact', '#rezerva'],
] as const

export const BOOKEO_URL = 'https://www.bookeo.com/serenityfloat'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-deep/85 shadow-[0_8px_40px_rgba(5,20,15,0.35)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="#sus" className="flex items-baseline gap-2 text-mist" aria-label="Serenity Float – început de pagină">
          <span className="font-display text-[22px] font-medium tracking-[0.16em]">SERENITY</span>
          <span className="text-[10px] font-semibold tracking-[0.4em] text-coppersoft uppercase">Float</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-[13px] font-medium tracking-[0.14em] text-mist/80 uppercase transition hover:text-coppersoft"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+40772067981"
            className="flex items-center gap-2 text-sm text-mist/80 transition hover:text-coppersoft"
          >
            <Phone size={15} aria-hidden="true" />
            0772 067 981
          </a>
          <a
            href={BOOKEO_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-copper px-6 py-2.5 text-[13px] font-semibold tracking-[0.08em] text-deep uppercase transition hover:bg-coppersoft"
          >
            Rezervă acum
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-mist lg:hidden"
          aria-label="Deschide meniul"
        >
          <Menu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-deep lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between px-6">
              <span className="font-display text-[22px] font-medium tracking-[0.16em] text-mist">SERENITY</span>
              <button type="button" onClick={() => setOpen(false)} className="text-mist" aria-label="Închide meniul">
                <X size={26} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {LINKS.map(([label, href], i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-mist transition hover:text-coppersoft"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-4 pb-14">
              <a
                href={BOOKEO_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-copper px-8 py-3.5 text-sm font-semibold tracking-[0.08em] text-deep uppercase"
              >
                Rezervă acum
              </a>
              <a href="tel:+40772067981" className="flex items-center gap-2 text-sm text-mist/70">
                <Phone size={15} aria-hidden="true" />
                0772 067 981
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
