import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CalendarDays, ClipboardCheck, Stethoscope } from 'lucide-react'

const STEPS = [
  {
    icon: CalendarDays,
    title: 'Ne spuneți ce vă supără',
    text: 'Prin telefon sau prin formularul scurt.',
  },
  {
    icon: Stethoscope,
    title: 'Alegem medicul potrivit',
    text: 'Unul dintre cei 6 specialiști preia cazul.',
  },
  {
    icon: ClipboardCheck,
    title: 'Primiți planul și prețul',
    text: 'Înainte de orice tratament.',
  },
]

export default function SmilePlan() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[2.75rem] border border-[var(--color-deep)]/10 bg-[var(--color-surface)] shadow-[0_34px_90px_rgba(13,59,61,.14)]">
      <div className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-4 text-[10px] font-semibold tracking-[.18em] text-[var(--color-text-soft)] uppercase sm:px-8">
        <span>Primul pas</span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          Simplu și clar
        </span>
      </div>

      <div className="relative px-6 pb-6 sm:px-8" style={{ paddingTop: '2rem' }}>
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,rgba(13,59,61,.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,59,61,.045)_1px,transparent_1px)] bg-[size:28px_28px]" />

        <div className="relative flex items-end justify-between gap-5 border-b border-[var(--color-line)] pb-6">
          <div>
            <p className="text-[10px] font-bold tracking-[.16em] text-[var(--color-accent)] uppercase">
              Consultație inițială
            </p>
            <p className="mt-2 font-display text-4xl tracking-[-.04em] text-[var(--color-deep)] sm:text-5xl">
              Gratuită
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--color-sage)] px-4 py-3 text-right">
            <strong className="block font-display text-2xl leading-none text-[var(--color-deep)]">0 RON</strong>
            <span className="mt-1 block text-[10px] font-semibold text-[var(--color-text-soft)]">fără obligații</span>
          </div>
        </div>

        <div className="relative mt-6 space-y-5">
          <motion.div
            aria-hidden
            className="absolute top-5 bottom-5 left-5 w-px origin-top bg-[var(--color-line)]"
            initial={reduceMotion ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative flex items-center gap-4"
              initial={reduceMotion ? false : { opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.14 + index * 0.1 }}
            >
              <span className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full ${index === 2 ? 'bg-[var(--color-clay)]' : 'bg-[var(--color-deep)]'} text-white`}>
                <step.icon size={17} strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold tracking-[.14em] text-[var(--color-accent)]">0{index + 1}</span>
                  <strong className="font-display text-lg leading-tight text-[var(--color-deep)] sm:text-xl">{step.title}</strong>
                </div>
                <p className="mt-1 text-xs leading-5 text-[var(--color-text-soft)] sm:text-sm">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <a
        href="#contact"
        className="group m-5 mt-1 flex items-center justify-between gap-4 rounded-2xl bg-[var(--color-deep)] px-5 py-4 text-white shadow-xl transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] sm:m-7 sm:mt-2"
      >
        <span>
          <strong className="block font-display text-lg sm:text-xl">Solicită consultația gratuită</strong>
          <small className="mt-1 block text-white/55">Vă sunăm pentru confirmare</small>
        </span>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-white transition-transform group-hover:translate-x-1">
          <ArrowRight size={18} />
        </span>
      </a>
    </div>
  )
}
