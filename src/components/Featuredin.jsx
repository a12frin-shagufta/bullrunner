import { useEffect, useRef, useState } from 'react'

const VISIBLE = 5
const SWAP_MS = 1600 // how often one cell flips
const FLIP_MS = 950 // must match the CSS animation duration

/**
 * Rotating press-logo strip.
 *
 * Shows VISIBLE slots out of a larger pool. Every SWAP_MS one slot (round
 * robin) flips to the next logo in the queue, and the logo it replaced goes
 * to the back of that queue — so no duplicate is ever on screen at once.
 *
 * `logos`: [{ name, src, w }] — w is the max width, e.g. '8rem'.
 */
export default function FeaturedIn({ logos = [], heading = 'Quoted & published in' }) {
  // slots[i] = { logo, prev } — prev is kept only during the flip
  const [slots, setSlots] = useState(() =>
    logos.slice(0, VISIBLE).map((logo) => ({ logo, prev: null })),
  )

  const queue = useRef(logos.slice(VISIBLE))
  const cursor = useRef(0)

  useEffect(() => {
    if (logos.length <= VISIBLE) return

    // preload the off-screen logos so flips don't show a blank face
    queue.current.forEach((l) => {
      if (l.src) {
        const img = new Image()
        img.src = l.src
      }
    })

    const id = setInterval(() => {
      if (document.hidden) return // don't churn in a background tab

      const i = cursor.current++ % VISIBLE

      setSlots((current) => {
        const next = [...current]
        const outgoing = next[i].logo
        const incoming = queue.current.shift()
        if (!incoming) return current

        queue.current.push(outgoing)
        next[i] = { logo: incoming, prev: outgoing }
        return next
      })

      // drop the outgoing face once its animation has finished
      setTimeout(() => {
        setSlots((current) => {
          const next = [...current]
          if (next[i]) next[i] = { ...next[i], prev: null }
          return next
        })
      }, FLIP_MS)
    }, SWAP_MS)

    return () => clearInterval(id)
  }, [logos])

  if (!logos.length) return null

  const allNames = logos.map((l) => l.name).join(', ')

  return (
    <div className="mt-9 border-t border-white/10 pt-5">
      <h2 className="mb-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#8b9ab1] ">
        {heading}
      </h2>

      <ul
        aria-label={`${heading}: ${allNames}`}
        className="featured-grid m-0 grid list-none grid-cols-3 items-center gap-x-5 p-0 md:grid-cols-5 md:gap-x-8"
      >
        {slots.map((slot, i) => (
          <li
            key={i}
            aria-hidden="true"
            className={`relative h-11 [perspective:1000px] md:h-14 ${
              i >= 3 ? 'hidden md:block' : ''
            }`}
          >
            {slot.prev && <Face logo={slot.prev} className="featured-flip-out" />}
            <Face
              key={slot.logo.name}
              logo={slot.logo}
              className={slot.prev ? 'featured-flip-in' : ''}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

function Face({ logo, className = '' }) {
  return (
    <span
      className={`absolute inset-0 flex items-center justify-center [backface-visibility:hidden] md:justify-start ${className}`}
    >
      {logo.src ? (
        <img
          src={logo.src}
          alt={logo.name}
          decoding="async"
          draggable={false}
          style={{ width: `min(${logo.w || '9rem'}, 100%)` }}
          className="h-auto max-h-8 w-auto max-w-full select-none object-contain opacity-60 [filter:brightness(0)_invert(1)] md:max-h-10"
        />
      ) : (
        // fallback until you drop a real file in /public/press/
        <span className="truncate text-sm font-bold text-white/55">{logo.name}</span>
      )}
    </span>
  )
}