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

function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className={`relative grid h-11 w-11 place-items-center rounded-full border ${inverted ? 'border-white/35' : 'border-[var(--color-deep)]/25'}`}>
        <span className={`absolute h-5 w-7 rounded-[50%] border-2 ${inverted ? 'border-[var(--color-claysoft)]' : 'border-[var(--color-accent)]'}`} />
        <span className={`absolute h-7 w-5 rounded-[50%] border-2 ${inverted ? 'border-white/65' : 'border-[var(--color-deep)]/55'}`} />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-medium tracking-[-0.03em]">Crisdental</span>
        <span className={`mt-1 block text-[9px] font-semibold tracking-[0.23em] uppercase ${inverted ? 'text-white/55' : 'text-[var(--color-text-soft)]'}`}>Cabinet stomatologic</span>
      </span>
    </span>
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
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-[var(--color-deep)]/92 py-2.5 text-[var(--color-bg)] backdrop-blur-xl' : 'py-4 text-[var(--color-deep)] md:py-5'}`}>
        <div className="section-shell flex items-center justify-between">
          <a href="#" aria-label="Crisdental, începutul paginii" className="min-h-12"><Brand inverted={scrolled} /></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigație principală">
            {LINKS.map((link) => <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-[var(--color-clay)] ${scrolled ? 'text-white/80' : 'text-[var(--color-text-soft)]'}`}>{link.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_TEL}`} className="hidden min-h-12 items-center gap-2 rounded-full bg-[var(--color-clay)] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-flex"><Phone size={16} /> {PHONE_DISPLAY}</a>
            <button type="button" aria-label={open ? 'Închide meniul' : 'Deschide meniul'} aria-expanded={open} onClick={() => setOpen((value) => !value)} className={`grid h-12 w-12 place-items-center rounded-full border lg:hidden ${open || scrolled ? 'border-white/20 text-white' : 'border-[var(--color-deep)]/20 text-[var(--color-deep)]'}`}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex h-dvh flex-col bg-[var(--color-deep)] px-6 pt-24 pb-6 text-white lg:hidden">
            <nav className="my-auto flex flex-col" aria-label="Navigație mobilă">
              {LINKS.map((link, index) => <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.05 }} className="border-b border-white/15 py-4 font-display text-4xl">{link.label}</motion.a>)}
            </nav>
            <a href={`tel:${PHONE_TEL}`} className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--color-clay)] font-semibold"><Phone size={18} /> {PHONE_DISPLAY}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
