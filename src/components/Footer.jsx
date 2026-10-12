import {
  SiYoutube,
  SiX,
  SiInstagram,
  SiTiktok,
  SiTelegram,
  SiFacebook,
} from 'react-icons/si'
import logo from '../assets/logo.png'

const EXPLORE = [
  { label: 'Latest posts', href: '#latest' },
  { label: 'XRP', href: '#xrp' },
  { label: 'Altcoins', href: '#altcoins' },
  { label: 'Security', href: '#security' },
]

const COMPANY = [
  { label: 'About', href: '#about' },
  { label: 'Editorial policy & disclosures', href: '#editorial' },
  { label: 'Terms of service', href: '#terms' },
  { label: 'Privacy policy', href: '#privacy' },
  { label: 'team@bullrunners.com', href: 'mailto:team@bullrunners.com' },
]

const SOCIALS = [
  { label: 'YouTube', href: '#', Icon: SiYoutube },
  { label: 'X', href: '#', Icon: SiX },
  { label: 'Instagram', href: '#', Icon: SiInstagram },
  { label: 'TikTok', href: '#', Icon: SiTiktok },
  { label: 'Telegram', href: '#', Icon: SiTelegram },
  { label: 'Facebook', href: '#', Icon: SiFacebook },
]

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
        {title}
      </h3>
      <ul className="mt-4 list-none space-y-1 p-0">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              // generous vertical padding keeps the tap target ~44px on phones
              className="-mx-2 block rounded px-2 py-2 text-[15px] leading-snug text-white/60 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        {/* 1 col on phones -> 2 on small tablets -> 12-col layout on desktop */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5 lg:pr-10">
            <a href="#home" className="inline-flex items-center gap-2.5 text-white">
              <img src={logo} alt="" aria-hidden="true" className="h-6 w-auto" />
              <span className="text-xl font-extrabold tracking-tight">BULLRUNNERS</span>
            </a>

            <p className="mt-5 max-w-sm text-lg leading-relaxed text-white/65">
              Independent crypto news, explainers and reviews for everyday investors.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              Education and commentary only, not financial advice. Crypto is volatile
              and you can lose money. Do your own research and speak to a qualified
              advisor before making investment decisions.
            </p>
          </div>

          <div className="lg:col-span-2">
            <LinkColumn title="Explore" links={EXPLORE} />
          </div>

          <div className="lg:col-span-3">
            <LinkColumn title="Company" links={COMPANY} />
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
              Follow
            </h3>
            <ul className="mt-4 flex list-none flex-wrap gap-2.5 p-0">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-6">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Bullrunners LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}