import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Latest', to: '/#latest' },
  { label: 'XRP', to: '/xrp' },
  { label: 'Altcoins', to: '/altcoins' },
  { label: 'Security', to: '/security' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md">
      <nav className="mx-auto flex h-22 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-white">
          <img src={logo} alt="Bullrunners" className="h-6 w-auto" />
          <span className="text-xl font-extrabold tracking-tight">BULLRUNNERS</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors hover:text-brand ${
                    isActive ? 'text-white' : 'text-white/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#review"
          className="hidden rounded-full bg-brand px-6 py-3 text-[15px] font-bold text-ink transition-colors hover:bg-brand-strong lg:inline-flex"
        >
          Free Portfolio Review
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-white lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-ink px-6 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-lg font-medium hover:text-brand ${
                      isActive ? 'text-white' : 'text-white/70'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* No CTA here — the hero already shows one right below the menu
              on phones, and two identical green buttons stacked looks like
              a mistake. The desktop nav keeps its CTA. */}
        </div>
      )}
    </header>
  )
}