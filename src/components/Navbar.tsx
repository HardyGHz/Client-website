import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

export const PHONE_DISPLAY = '0745 678 261'
export const PHONE_TEL = '+40745678261'

const LINKS = [
  { href: '#tarife', label: 'Tarife' },
  { href: '#echipa', label: 'Echipa' },
  { href: '#recenzii', label: 'Recenzii' },
  { href: '#intrebari', label: 'Întrebări' },
  { href: '#contact', label: 'Contact' },
]

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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-[var(--color-deep)]/90 py-3.5 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a
            href="#"
            className={`font-display text-xl italic transition-colors md:text-2xl ${
              scrolled ? 'text-[var(--color-bg)]' : 'text-[var(--color-deep)]'
            }`}
          >
            Crisdental
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors hover:text-[var(--color-clay)] ${
                  scrolled ? 'text-[var(--color-bg)]/85' : 'text-[var(--color-text-soft)]'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden items-center gap-2 rounded-full bg-[var(--color-clay)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-claysoft)] md:inline-flex"
            >
              <Phone size={15} strokeWidth={2.4} />
              {PHONE_DISPLAY}
            </a>
            <button
              aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden ${
                open || scrolled ? 'text-[var(--color-bg)]' : 'text-[var(--color-deep)]'
              }`}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex h-dvh flex-col items-center justify-center gap-8 bg-[var(--color-deep)] md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06 }}
                className="font-display text-3xl text-[var(--color-bg)]"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={`tel:${PHONE_TEL}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + LINKS.length * 0.06 }}
              className="mt-4 flex items-center gap-2 rounded-full bg-[var(--color-clay)] px-6 py-3 text-white"
            >
              <Phone size={16} /> {PHONE_DISPLAY}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
