import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'

export const PHONE = '0733 670 220'
export const PHONE_HREF = 'tel:+40733670220'
export const EMERGENCY = '0733 670 219'
export const EMERGENCY_HREF = 'tel:+40733670219'

const LINKS = [
  { href: '#servicii', label: 'Servicii' },
  { href: '#despre', label: 'Despre' },
  { href: '#salvari', label: 'Prieteni salvați' },
  { href: '#recenzii', label: 'Recenzii' },
  { href: '#program', label: 'Program' },
  { href: '#contact', label: 'Contact' },
]

function Wordmark({ onDark }: { onDark: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Kronvet — acasă">
      <img src="/images/logo-mark.png" alt="" className="h-9 w-9 object-contain" />
      <span className="font-display text-[22px] font-bold tracking-tight">
        <span className={onDark ? 'text-cream' : 'text-teal'}>kron</span>
        <span className="text-accent">vet</span>
      </span>
    </a>
  )
}

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
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-cream/10 bg-deep/85 py-3 backdrop-blur-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <Wordmark onDark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigație principală">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-semibold text-cream/75 transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[14px] font-bold text-deep transition-colors hover:bg-accentsoft"
          >
            <Phone size={15} strokeWidth={2.4} />
            {PHONE}
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Deschide meniul"
          className="text-cream lg:hidden"
        >
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex h-dvh flex-col bg-deep px-6 py-5 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Wordmark onDark />
              <button type="button" onClick={() => setOpen(false)} aria-label="Închide meniul" className="text-cream">
                <X size={26} />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-2" aria-label="Meniu mobil">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="font-display border-b border-cream/10 py-4 text-[26px] font-semibold text-cream"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              href={PHONE_HREF}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto flex items-center justify-center gap-2 rounded-full bg-accent py-4 text-[17px] font-bold text-deep"
            >
              <Phone size={18} strokeWidth={2.4} />
              Sună acum: {PHONE}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
