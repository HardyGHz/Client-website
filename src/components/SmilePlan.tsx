import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'

const DOTS = [
  [118, 200, '01'], [183, 138, '02'], [280, 112, '03'],
  [377, 138, '04'], [442, 200, '05'], [280, 334, '06'],
] as const

export default function SmilePlan() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="relative mx-auto aspect-[1.02] w-full max-w-[560px] overflow-hidden rounded-[2.75rem] border border-[var(--color-deep)]/10 bg-[var(--color-surface)] shadow-[0_34px_90px_rgba(13,59,61,.14)]">
      <div className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-4 text-[10px] font-semibold tracking-[.18em] text-[var(--color-text-soft)] uppercase"><span>Planul dumneavoastră</span><span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" /> Clar, dinainte</span></div>
      <svg viewBox="0 0 560 430" className="w-full" role="img" aria-label="Plan vizual de tratament coordonat de șase medici specialiști">
        <defs><pattern id="dental-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#0d3b3d" strokeOpacity=".055" /></pattern></defs>
        <rect width="560" height="430" fill="url(#dental-grid)" />
        <motion.path d="M82 230 C108 74 452 74 478 230" fill="none" stroke="#dce7df" strokeWidth="54" strokeLinecap="round" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }} />
        <motion.path d="M122 240 C165 360 395 360 438 240" fill="none" stroke="#efb78f" strokeOpacity=".7" strokeWidth="20" strokeLinecap="round" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: .2, ease: [0.22, 1, 0.36, 1] }} />
        <path d="M104 229 C135 98 425 98 456 229M148 243 C184 326 376 326 412 243" fill="none" stroke="#0d3b3d" strokeOpacity=".34" strokeDasharray="5 8" />
        {DOTS.map(([cx, cy, label], index) => <g key={label}><motion.circle cx={cx} cy={cy} r="20" fill={index === 2 ? '#d2743e' : '#0d3b3d'} initial={reduceMotion ? false : { scale: 0 }} animate={{ scale: 1 }} transition={{ delay: .35 + index * .07, type: 'spring' }} /><text x={cx} y={cy + 4} textAnchor="middle" fill="white" fontFamily="Public Sans" fontSize="10" fontWeight="700">{label}</text></g>)}
        <circle cx="280" cy="224" r="62" fill="#fffdf9" stroke="#187a74" strokeWidth="3" />
        <text x="280" y="210" textAnchor="middle" fill="#0d3b3d" fontFamily="Spectral" fontSize="22">6 medici</text>
        <text x="280" y="238" textAnchor="middle" fill="#4a5d5c" fontFamily="Public Sans" fontSize="11" letterSpacing="1.5">UN SINGUR PLAN</text>
      </svg>
      <div className="absolute inset-x-5 bottom-5 grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl bg-[var(--color-deep)] p-4 text-white shadow-xl sm:inset-x-7 sm:bottom-7">
        <span className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-accent)]"><Check size={15} /></span><span><strong className="block font-display text-lg">Consultație: 0 RON</strong><small className="text-white/55">Preț explicat înainte de tratament</small></span></span><ArrowUpRight className="text-[var(--color-claysoft)]" />
      </div>
    </div>
  )
}
