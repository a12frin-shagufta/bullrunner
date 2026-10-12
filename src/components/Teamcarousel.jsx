import { useEffect, useRef, useState } from 'react'

const INTERVAL = 3500 // ms between slides

/**
 * Auto-advancing team carousel.
 *
 * Shows 1 / 2 / 3 cards depending on width, slides one card at a time, and
 * pauses whenever the user is interacting with it (hover, focus, touch) or
 * the tab is hidden.
 */
export default function TeamCarousel({ members = [] }) {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(3)
  const [paused, setPaused] = useState(false)
  const trackRef = useRef(null)

  // how many cards fit, by breakpoint
  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const maxIndex = Math.max(0, members.length - perView)

  // clamp when perView changes (e.g. rotating a phone at the last slide)
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  // the auto-advance timer
  useEffect(() => {
    if (paused || members.length <= perView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      if (document.hidden) return
      setIndex((i) => (i >= maxIndex ? 0 : i + 1)) // wrap back to the start
    }, INTERVAL)

    return () => clearInterval(id)
  }, [paused, maxIndex, perView, members.length])

  const go = (i) => {
    setIndex(Math.max(0, Math.min(i, maxIndex)))
  }

  if (!members.length) return null

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      {/* viewport */}
      <div className="overflow-hidden">
        <ul
          ref={trackRef}
          className="flex list-none p-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {members.map((m) => (
            <li
              key={m.name}
              className="w-full shrink-0 px-2.5 sm:w-1/2 lg:w-1/3"
              aria-hidden={false}
            >
              <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt=""
                    loading="lazy"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/[0.06] text-xl font-bold text-white/50">
                    {m.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                )}

                <h3 className="mt-5 text-lg font-bold text-brand">{m.name}</h3>
                <p className="mt-1 text-sm text-white/55">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{m.bio}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>

      {/* controls */}
      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Previous team members"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand/40 hover:text-brand disabled:opacity-25 disabled:hover:border-white/15 disabled:hover:text-white/70"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-brand' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index >= maxIndex}
          aria-label="Next team members"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand/40 hover:text-brand disabled:opacity-25 disabled:hover:border-white/15 disabled:hover:text-white/70"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}