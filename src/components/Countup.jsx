import { useEffect, useRef, useState } from 'react'

/**
 * Counts from 0 up to `value` when it first scrolls into view.
 *
 * Driven by requestAnimationFrame against wall-clock time, not a fixed
 * increment per frame — so the duration is the same on a 60Hz and a 120Hz
 * display, and it can't drift.
 */
export default function CountUp({
  value,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = true, // 3100 -> 3,100
  className = '',
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }

    let raf
    const run = (startTime) => (now) => {
      const elapsed = now - startTime
      const t = Math.min(1, elapsed / duration)
      // easeOutExpo — fast start, long settle. Reads as "landing" on the number.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(run(startTime))
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true // only ever animate once
          raf = requestAnimationFrame((now) => run(now)(now))
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [value, duration])

  const formatted = display.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: separator,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}