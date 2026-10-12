import DotWave from './Dotwave'
import FeaturedIn from './Featuredin'
import VideoCard from './VideoCard'

// Swap these for real customer photos later — src can be any image URL.
// Drop real logo files into public/press/ and point src at them.
// Any entry without a src falls back to rendering its name as text.
const PRESS = [
  { name: 'CoinDesk', src: 'https://bullrunners-site.pages.dev/press/coindesk.svg', w: '8rem' },
  { name: 'New York Post', src: 'https://bullrunners-site.pages.dev/press/new-york-post.png', w: '11rem' },
  { name: 'MoneyLion', src: 'https://bullrunners-site.pages.dev/press/moneylion.webp', w: '10rem' },
  { name: 'Yahoo Finance', src: 'https://bullrunners-site.pages.dev/press/yahoo-finance.svg', w: '10rem' },
  { name: 'FOX 13', src: 'https://bullrunners-site.pages.dev/press/fox13.svg', w: '8rem' },
  { name: '', src: 'https://bullrunners-site.pages.dev/press/aol.png', },
  { name: '', src: 'https://bullrunners-site.pages.dev/press/invezz.png',  },
  { name: '', src: 'https://bullrunners-site.pages.dev/press/technewsworld.png', },
  {name: '', src: 'https://bullrunners-site.pages.dev/press/insidesources.png', },
  { name: '', src: 'https://bullrunners-site.pages.dev/press/frederick-news-post.png', },
  { name: '', src: 'https://bullrunners-site.pages.dev/press/techtimes.svg', },
  { name: '', src: 'https://bullrunners-site.pages.dev/press/blockleaders.png',  },
  { name: '', src: 'https://bullrunners-site.pages.dev/press/daily-upside.svg', },
  {  name: '', src: 'https://bullrunners-site.pages.dev/press/techround.svg', },
  {  name: '', src: 'https://bullrunners-site.pages.dev/press/analytics-insight.svg', },
]

 
const AVATARS = [
  { initials: 'JM', bg: '#3f6212' },
  { initials: 'AR', bg: '#1e3a5f' },
  { initials: 'TK', bg: '#4a3418' },
  { initials: 'SD', bg: '#3b2f4a' },
  { initials: 'LP', bg: '#1f4037' },
]
 
function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-brand">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </span>
  )
}
 
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5.5rem)] items-center overflow-hidden"
    >
      <DotWave />
 
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left column — copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Free Crypto Portfolio Review
            </p>
 
            {/* max-w only kicks in from lg — on phones the headline should use
                the full column width instead of being squeezed into 4 lines */}
            <h1 className="mt-3 text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[2.5rem] sm:leading-[1.08] lg:max-w-[13ch] lg:text-[3.25rem]">
              Secure, grow and scale your crypto portfolio, without guessing.
            </h1>
 
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/65 sm:mt-5 sm:text-base">
              Get a one-on-one review of your crypto from our research team. We'll show
              you what's exposed, what's sitting idle, and your next best move. It's
              free, there's no pressure, and we never ask for your keys or seed phrase.
            </p>
 
            <a
              href="#review"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-ink transition-colors hover:bg-brand-strong sm:mt-7 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Book My Free Portfolio Review
            </a>
 
            {/* Social proof pill */}
            <div className="mt-6 inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-2 rounded-3xl border border-white/10 bg-white/[0.03] px-3 py-2 sm:mt-7 sm:gap-3 sm:rounded-full sm:pl-2.5 sm:pr-5">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <span
                    key={a.initials}
                    style={{ backgroundColor: a.bg }}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold text-white/90 ring-2 ring-ink sm:h-8 sm:w-8 sm:text-[10px]"
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
 
              <Stars />
 
              <span className="text-[15px] font-bold text-white sm:text-base">4.9</span>
 
              {/* divider only makes sense while everything is on one line */}
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
 
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted sm:text-[11px] sm:tracking-[0.14em]">
                Trustpilot rating
              </span>
            </div>
          </div>
 
          {/* Right column — video */}
          <div>
            <VideoCard videoId="KiE7z7NSadE" title="Friend or foe?" />
          </div>
        </div>
 
        <FeaturedIn logos={PRESS} />
      </div>
    </section>
  )
}
 