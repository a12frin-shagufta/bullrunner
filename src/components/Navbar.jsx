import { useState } from 'react'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Latest', href: '#latest' },
  { label: 'XRP', href: '#xrp' },
  { label: 'Altcoins', href: '#altcoins' },
  { label: 'Security', href: '#security' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md">
      <nav className="mx-auto flex h-22 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 text-white">
          <img src={logo} alt="Bullrunners" className="h-6 w-auto" />
          <span className="text-md font-extrabold tracking-tight">BULLRUNNERS</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[17px] font-medium text-white/85 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#review"
          className="hidden rounded-full bg-brand px-7 py-3.5 text-[17px] font-bold text-ink transition-colors hover:bg-brand-strong lg:inline-flex"
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
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-white/85 hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#review"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand px-6 py-3.5 text-center text-base font-bold text-ink"
          >
            Free Portfolio Review
          </a>
        </div>
      )}
    </header>
  )
}