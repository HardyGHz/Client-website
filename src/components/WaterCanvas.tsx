import { useEffect, useRef } from 'react'

type Blob = {
  x: number
  y: number
  r: number
  rgb: string
  alpha: number
  phase: number
  speed: number
  depth: number
}

type Bubble = {
  x: number
  y: number
  r: number
  vy: number
  sway: number
  phase: number
  alpha: number
}

// Caustic light patches drifting through dark water
const BLOBS: Blob[] = [
  { x: 0.22, y: 0.32, r: 0.42, rgb: '54, 118, 98', alpha: 0.55, phase: 0.0, speed: 0.16, depth: 0.5 },
  { x: 0.74, y: 0.24, r: 0.38, rgb: '89, 156, 132', alpha: 0.4, phase: 1.7, speed: 0.12, depth: 0.9 },
  { x: 0.52, y: 0.68, r: 0.5, rgb: '38, 92, 76', alpha: 0.6, phase: 3.1, speed: 0.1, depth: 0.35 },
  { x: 0.86, y: 0.62, r: 0.34, rgb: '127, 181, 164', alpha: 0.26, phase: 4.4, speed: 0.2, depth: 1.15 },
  { x: 0.12, y: 0.74, r: 0.36, rgb: '201, 139, 82', alpha: 0.14, phase: 2.3, speed: 0.14, depth: 0.7 },
  { x: 0.42, y: 0.12, r: 0.3, rgb: '244, 239, 228', alpha: 0.1, phase: 5.2, speed: 0.18, depth: 1.3 },
]

function makeBubbles(w: number, h: number, count: number): Bubble[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: h * (0.35 + Math.random() * 0.75),
    r: 0.8 + Math.random() * 2.6,
    vy: 8 + Math.random() * 16,
    sway: 6 + Math.random() * 14,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.06 + Math.random() * 0.16,
  }))
}

export default function WaterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let w = 0
    let h = 0
    let bubbles: Bubble[] = []
    let mouse = 0
    let mouseTarget = 0
    let last = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      bubbles = makeBubbles(w, h, Math.round(Math.min(w, 1400) / 34))
    }

    const draw = (t: number, dt: number) => {
      ctx.clearRect(0, 0, w, h)

      // caustic light patches
      ctx.globalCompositeOperation = 'screen'
      for (const b of BLOBS) {
        const px = mouse * 26 * b.depth
        const bx = (b.x + Math.sin(t * b.speed + b.phase) * 0.05) * w + px
        const by = (b.y + Math.cos(t * b.speed * 0.8 + b.phase) * 0.04) * h
        const br = b.r * Math.min(w, h) * (1 + Math.sin(t * 0.22 + b.phase) * 0.08)
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, br)
        g.addColorStop(0, `rgba(${b.rgb}, ${b.alpha})`)
        g.addColorStop(0.55, `rgba(${b.rgb}, ${b.alpha * 0.35})`)
        g.addColorStop(1, `rgba(${b.rgb}, 0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(bx, by, br, 0, Math.PI * 2)
        ctx.fill()
      }

      // rising bubbles
      for (const p of bubbles) {
        p.y -= p.vy * dt
        const bx = p.x + Math.sin(t * 0.7 + p.phase) * p.sway
        if (p.y < -8) {
          p.y = h + 8
          p.x = Math.random() * w
        }
        const fade = Math.min(1, Math.max(0, (p.y / h) * 1.6))
        ctx.fillStyle = `rgba(214, 232, 223, ${p.alpha * fade})`
        ctx.beginPath()
        ctx.arc(bx, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // vignette
      ctx.globalCompositeOperation = 'source-over'
      const v = ctx.createRadialGradient(w / 2, h * 0.42, Math.min(w, h) * 0.28, w / 2, h * 0.52, Math.max(w, h) * 0.82)
      v.addColorStop(0, 'rgba(14, 42, 33, 0)')
      v.addColorStop(1, 'rgba(9, 28, 22, 0.55)')
      ctx.fillStyle = v
      ctx.fillRect(0, 0, w, h)
    }

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      mouse += (mouseTarget - mouse) * 0.04
      draw(now / 1000, dt)
      raf = requestAnimationFrame(loop)
    }

    const onMouse = (e: MouseEvent) => {
      mouseTarget = (e.clientX / window.innerWidth - 0.5) * 2
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduced) {
      draw(2.4, 0)
    } else {
      window.addEventListener('mousemove', onMouse)
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
