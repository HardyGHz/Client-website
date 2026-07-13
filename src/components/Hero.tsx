import { motion, useReducedMotion } from 'framer-motion'
import WaterCanvas from './WaterCanvas'
import { BOOKEO_URL } from './Navbar'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="sus" className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-deep">
      <WaterCanvas />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-deep" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-24 text-center"
        variants={container}
        initial={reduced ? undefined : 'hidden'}
        animate={reduced ? undefined : 'show'}
      >
        <motion.p
          variants={item}
          className="mb-6 text-[11px] font-semibold tracking-[0.42em] text-coppersoft uppercase"
        >
          Primul centru de floating din Cluj-Napoca
        </motion.p>

        <motion.h1
          variants={item}
          className="mx-auto max-w-4xl font-display text-[clamp(3rem,9vw,6.5rem)] leading-[1.04] font-light text-mist"
        >
          Orașul rămâne <em className="font-normal text-coppersoft italic">afară</em>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed font-light text-mist/75"
        >
          Floating, masaje și ritualuri de relaxare create pentru momentele în care corpul și
          mintea au nevoie de liniște reală.
        </motion.p>

        <motion.div variants={item} className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BOOKEO_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-copper px-9 py-4 text-sm font-semibold tracking-[0.1em] text-deep uppercase transition hover:bg-coppersoft"
          >
            Rezervă o experiență
          </a>
          <a
            href="#floating"
            className="rounded-full border border-mist/25 px-9 py-4 text-sm font-medium tracking-[0.1em] text-mist uppercase transition hover:border-coppersoft hover:text-coppersoft"
          >
            Descoperă floatingul
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#servicii"
        aria-label="Derulează la servicii"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-mist/50 transition hover:text-coppersoft"
        animate={reduced ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="22" height="30" viewBox="0 0 22 30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="20" height="28" rx="10" />
          <line x1="11" y1="8" x2="11" y2="14" strokeLinecap="round" />
        </svg>
      </motion.a>
    </section>
  )
}
