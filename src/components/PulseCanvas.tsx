import { useEffect, useRef } from 'react'

// ─── Hero háttér: "szívverés" canvas ────────────────────────────────────────
// Mély petrol alap + teal részecske-konstelláció + lassan futó narancs
// EKG-vonal periodikus szívdobbanással. Zéró API-költség, brand-színekből.
// dpr clamp 2, reduced-motion: egyetlen statikus frame.

type Dot = { x: number; y: number; vx: number; vy: number; r: number; depth: number }

const LINK_DIST = 130
const PULSE_PERIOD = 420 // px — ennyi közönként dobban a vonal

function pulseShape(s: number): number {
  // s: 0..PULSE_PERIOD — nyugalmi vonal, majd P-hullám és éles QRS-tüske
  if (s > 60 && s < 92) return -6 * Math.sin(((s - 60) / 32) * Math.PI) // P-hullám
  if (s >= 100 && s < 112) return ((s - 100) / 12) * 10 // Q lejtő
  if (s >= 112 && s < 126) return 10 - ((s - 112) / 14) * 54 // R felfutás (felfelé = negatív y, lásd előjel lent)
  if (s >= 126 && s < 140) return -44 + ((s - 126) / 14) * 52 // S visszaesés
  if (s >= 140 && s < 152) return 8 - ((s - 140) / 12) * 8
  if (s >= 170 && s < 210) return -5 * Math.sin(((s - 170) / 40) * Math.PI) // T-hullám
  return 0
}

export default function PulseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let raf = 0
    let mouse = 0
    let mouseTarget = 0
    let dots: Dot[] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(26, Math.min(64, Math.round((w * h) / 30000)))
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.6 + 0.7,
        depth: Math.random() * 0.7 + 0.3,
      }))
    }

    const draw = (t: number) => {
      // alap: petrol gradiens + halvány teal derengés alulról
      const base = ctx.createLinearGradient(0, 0, 0, h)
      base.addColorStop(0, '#0A2226')
      base.addColorStop(1, '#0D2B2F')
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = base
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'screen'
      const glow = ctx.createRadialGradient(w * 0.72, h * 0.85, 0, w * 0.72, h * 0.85, h * 0.9)
      glow.addColorStop(0, 'rgba(65, 122, 113, 0.22)')
      glow.addColorStop(1, 'rgba(65, 122, 113, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'source-over'

      // konstelláció
      const pts = dots.map((d) => ({
        px: d.x + mouse * 22 * d.depth,
        py: d.y,
        d,
      }))
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].px - pts[j].px
          const dy = pts[i].py - pts[j].py
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(111, 163, 152, ${(1 - dist / LINK_DIST) * 0.16})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(pts[i].px, pts[i].py)
            ctx.lineTo(pts[j].px, pts[j].py)
            ctx.stroke()
          }
        }
      }
      for (const { px, py, d } of pts) {
        ctx.fillStyle = `rgba(111, 163, 152, ${0.32 * d.depth + 0.1})`
        ctx.beginPath()
        ctx.arc(px, py, d.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // EKG-vonal: jobbról balra úszik, dobbanásokkal
      const baseline = h * 0.78
      const offset = (t * 60) % PULSE_PERIOD
      ctx.save()
      ctx.shadowColor = 'rgba(251, 102, 50, 0.55)'
      ctx.shadowBlur = 10
      ctx.strokeStyle = 'rgba(251, 102, 50, 0.5)'
      ctx.lineWidth = 1.6
      ctx.beginPath()
      for (let x = -8; x <= w + 8; x += 3) {
        const s = (((x + offset) % PULSE_PERIOD) + PULSE_PERIOD) % PULSE_PERIOD
        const y = baseline + pulseShape(s) * 0.9
        if (x === -8) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.restore()

      // fénypont a legutóbbi dobbanás R-csúcsán
      const rPeakS = 126
      let px = ((rPeakS - offset) % PULSE_PERIOD) + PULSE_PERIOD
      px = px % PULSE_PERIOD
      for (let x = px; x < w; x += PULSE_PERIOD) {
        const flick = 0.5 + 0.5 * Math.sin(t * 6)
        ctx.fillStyle = `rgba(255, 138, 97, ${0.35 + flick * 0.3})`
        ctx.beginPath()
        ctx.arc(x, baseline - 44 * 0.9, 2.6, 0, Math.PI * 2)
        ctx.fill()
      }

      // vignetta, hogy a headline olvasható maradjon
      const vin = ctx.createRadialGradient(w * 0.38, h * 0.42, Math.min(w, h) * 0.25, w * 0.5, h * 0.5, Math.max(w, h) * 0.8)
      vin.addColorStop(0, 'rgba(10, 34, 38, 0)')
      vin.addColorStop(1, 'rgba(10, 34, 38, 0.55)')
      ctx.fillStyle = vin
      ctx.fillRect(0, 0, w, h)
    }

    const step = () => {
      mouse += (mouseTarget - mouse) * 0.04
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < -20) d.x = w + 20
        if (d.x > w + 20) d.x = -20
        if (d.y < -20) d.y = h + 20
        if (d.y > h + 20) d.y = -20
      }
      draw(performance.now() / 1000)
      raf = requestAnimationFrame(step)
    }
    const onMouse = (e: MouseEvent) => {
      mouseTarget = (e.clientX / window.innerWidth) * 2 - 1
    }

    resize()
    window.addEventListener('resize', resize)
    if (reduceMotion) {
      draw(2.1) // statikus frame, dobbanással a képben
    } else {
      window.addEventListener('mousemove', onMouse, { passive: true })
      raf = requestAnimationFrame(step)
    }
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
}
