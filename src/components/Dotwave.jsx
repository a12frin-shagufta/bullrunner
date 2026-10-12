import { useEffect, useRef } from 'react'

/**
 * Hero dot-wave background.
 *
 * 22 stacked rows of dots. Each dot's Y position is displaced by two trig
 * terms (one fast, one slow, travelling opposite directions), so the rows
 * undulate like a sheet rather than bouncing like equaliser bars.
 * Lower rows are larger and brighter; the whole field fades in from the left.
 */
export default function DotWave({
  rows = 22,
  stepX = 14, // horizontal px between dots
  color = '#22c55e',
  className = '',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w = 0
    let h = 0
    let raf = 0
    let visible = true

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const render = (t) => {
      ctx.clearRect(0, 0, w, h)
      const steps = Math.ceil(w / stepX)
      const dim = w < 900 ? 0.35 : 1 // calm it down on small screens

      for (let row = 0; row < rows; row++) {
        const depth = row / rows // 0 = back row, ~1 = front row

        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * w

          // baseline for this row, then two offset waves travelling opposite ways
          const y =
            h * 0.08 +
            depth * h * 0.42 +
            Math.sin(i * 0.09 + t * 0.0006 + row * 0.35) * (18 + depth * 26) +
            Math.cos(i * 0.035 - t * 0.0004) * 22

          const fadeIn = Math.min(1, x / (w * 0.55)) // ramps up from the left

          ctx.globalAlpha = (0.12 + depth * 0.5) * fadeIn * dim
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(x, y, 0.6 + depth * 1.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
    }

    const loop = (t) => {
      render(t)
      if (visible) raf = requestAnimationFrame(loop)
    }

    resize()

    const onResize = () => {
      resize()
      if (reduceMotion) render(0)
    }
    window.addEventListener('resize', onResize)

    let observer
    if (reduceMotion) {
      render(0) // single static frame
    } else {
      // stop burning frames while the hero is scrolled out of view
      observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        cancelAnimationFrame(raf)
        if (visible) raf = requestAnimationFrame(loop)
      })
      observer.observe(canvas)
    }

    return () => {
      visible = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      observer?.disconnect()
    }
  }, [rows, stepX, color])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}