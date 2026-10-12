import { useEffect, useRef } from 'react'

/**
 * Soft rising smoke/steam, drawn behind the logo.
 *
 * Each puff is a radial gradient that rises, expands and fades. Drawn with
 * 'lighter' compositing so overlapping puffs accumulate into a glow instead
 * of stacking into flat opaque blobs.
 */
export default function Smoke({
  count = 28,
  color = '74, 222, 128', // rgb triplet, brand green
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
    let puffs = []

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const spawn = (seeded = false) => ({
      x: w / 2 + (Math.random() - 0.5) * w * 0.3,
      // seeded puffs start mid-flight so the effect isn't empty on first paint
      y: seeded ? h * 0.45 + Math.random() * h * 0.5 : h * 0.88,
      r: 18 + Math.random() * 46,
      vy: 0.2 + Math.random() * 0.45, // rise speed
      vx: (Math.random() - 0.5) * 0.3, // lateral drift
      grow: 0.3 + Math.random() * 0.45,
      life: 0,
      maxLife: 300 + Math.random() * 260,
      alpha: 0.1 + Math.random() * 0.12,
    })

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      puffs = Array.from({ length: count }, () => spawn(true))
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      for (const p of puffs) {
        p.life++
        p.y -= p.vy
        p.x += p.vx
        p.r += p.grow

        // fade in over the first 15%, out over the rest
        const t = p.life / p.maxLife
        const fade = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85

        if (t >= 1 || p.y + p.r < 0) {
          Object.assign(p, spawn())
          continue
        }

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        g.addColorStop(0, `rgba(${color}, ${p.alpha * fade})`)
        g.addColorStop(1, `rgba(${color}, 0)`)

        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = () => {
      render()
      if (visible) raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)

    let observer
    if (reduceMotion) {
      render() // one static frame
    } else {
      observer = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting
        cancelAnimationFrame(raf)
        if (visible) raf = requestAnimationFrame(loop)
      })
      observer.observe(canvas)
    }

    return () => {
      visible = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      observer?.disconnect()
    }
  }, [count, color])

  // The canvas can't paint outside its own box, so without this mask the
  // puffs get clipped at the edges and you see a hard-edged rectangle.
  const fadeEdges =
    'radial-gradient(60% 58% at 50% 58%, #000 0%, #000 38%, rgba(0,0,0,0.45) 62%, transparent 82%)'

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ maskImage: fadeEdges, WebkitMaskImage: fadeEdges }}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}