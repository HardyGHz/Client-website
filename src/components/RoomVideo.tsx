import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * The clinic's actual treatment room. Plays only while it is on screen, and
 * drifts slightly slower than the page as you scroll past it.
 *
 * Deliberately not scroll-scrubbed: the clip is a gentle 15-degree arc, and
 * scrubbing subtle motion reads as a wobble rather than an effect. It also
 * stutters on iOS, and taking scroll control away from someone is the opposite
 * of the calm this page is selling.
 */
export default function RoomVideo({
  className = '',
  poster = '/cabinet-poster.jpg',
  src = '/cabinet.mp4',
  alt,
}: {
  className?: string
  poster?: string
  src?: string
  alt: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  // The inner frame is oversized below, so this never exposes an edge.
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  useEffect(() => {
    if (reduce) return
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Autoplay can still be refused; the poster stays visible if so.
          void video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [reduce])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl bg-[var(--color-deep)] ${className}`}
    >
      {reduce ? (
        <img src={poster} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <motion.video
          ref={videoRef}
          style={{ y }}
          poster={poster}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
          // Taller than the frame so the parallax shift stays covered.
          className="h-[114%] w-full object-cover"
        />
      )}

      {/* Warms the cool, grey-blue room toward the page's cream palette. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[var(--color-clay)] mix-blend-soft-light opacity-25"
      />
    </div>
  )
}
