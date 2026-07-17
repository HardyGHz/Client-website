import { Phone, Star, CalendarCheck } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import PulseCanvas from './PulseCanvas'
import { PHONE, PHONE_HREF, EMERGENCY } from './Navbar'
import { isOpenNow } from '../lib/hours'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  const reduce = useReducedMotion()
  const open = isOpenNow()
  const anim = (delay: number) => (reduce ? {} : fadeUp(delay))

  return (
    <section id="top" className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-deep">
      <PulseCanvas />

      <div className="relative z-[1] mx-auto w-full max-w-6xl px-5 pt-28 pb-24">
        <motion.p {...anim(0.05)} className="mb-5 text-[13px] font-bold tracking-[0.28em] text-tealsoft uppercase">
          Cabinet Medical Veterinar · Chinteni, Cluj
        </motion.p>

        <motion.h1
          {...anim(0.15)}
          className="font-display max-w-3xl text-[44px] leading-[1.05] font-bold text-cream md:text-[68px]"
        >
          Medicină veterinară <em className="font-medium text-accentsoft italic">cu suflet</em>, aproape de
          tine.
        </motion.h1>

        <motion.p {...anim(0.28)} className="mt-6 max-w-xl text-[17px] leading-relaxed text-cream/75">
          Dr. Szabó Andrea Ágnes tratează animalele din Chinteni și împrejurimi de peste 10 ani — de la cățelul
          familiei până la aricii găsiți pe marginea drumului.
        </motion.p>

        <motion.div {...anim(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-[16px] font-bold text-deep shadow-lg shadow-accent/25 transition-all hover:bg-accentsoft"
          >
            <Phone size={18} strokeWidth={2.4} />
            Sună acum: {PHONE}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2.5 rounded-full border border-cream/25 px-7 py-3.5 text-[16px] font-semibold text-cream transition-colors hover:border-cream/60"
          >
            <CalendarCheck size={18} />
            Programează o vizită
          </a>
        </motion.div>

        <motion.div {...anim(0.52)} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[14px] text-cream/70">
          <span className="flex items-center gap-2 font-semibold text-cream">
            <span className="flex items-center gap-0.5 text-accentsoft" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            4.9 din 89 de recenzii Google
          </span>
          <span className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${open ? 'animate-pulse-dot bg-green-400' : 'bg-cream/40'}`}
              aria-hidden
            />
            {open ? 'Deschis acum' : `Închis acum · Urgențe: ${EMERGENCY}`}
          </span>
          <span>Program prelungit până la 21:00</span>
        </motion.div>
      </div>

      <div className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-cream/60 md:flex">
        <span className="text-[10px] tracking-[0.3em] uppercase">Descoperă</span>
        <span className="h-10 w-px origin-top animate-drip bg-current" aria-hidden />
      </div>

      {/* hullám-átvezetés a krém szekcióba */}
      <svg
        className="absolute bottom-0 left-0 h-14 w-full md:h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,64 C260,30 520,74 780,50 C1040,26 1240,66 1440,40 L1440,80 L0,80 Z" className="fill-cream opacity-30" />
        <path d="M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,56 L1440,80 L0,80 Z" className="fill-cream" />
      </svg>
    </section>
  )
}
