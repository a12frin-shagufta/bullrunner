import CountUp from './Countup'
import logo from '../assets/logo.png'

function ShareIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8l7.6-4.1M8.2 13.2l7.6 4.1" strokeLinecap="round" />
    </svg>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function VideoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
      <path d="M15.5 11l6-3.2v8.4l-6-3.2v-2Z" strokeLinejoin="round" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path
        d="M12 3.5l2.6 5.5 5.9.8-4.3 4.1 1.1 5.9L12 17l-5.3 2.8 1.1-5.9L3.5 9.8l5.9-.8L12 3.5Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const STATS = [
  {
    icon: ShareIcon,
    value: 650,
    suffix: 'K+',
    label: 'Followers & subscribers',
    note: 'Across YouTube, social media and email',
  },
  {
    icon: PlayIcon,
    value: 36,
    suffix: 'M+',
    label: 'YouTube views',
    note: 'On the Bullrunners channel',
  },
  {
    icon: VideoIcon,
    value: 3100,
    suffix: '+',
    label: 'Videos published',
    note: 'Crypto news and explainers since 2013',
  },
  {
    icon: StarIcon,
    value: 4.9,
    decimals: 1,
    suffix: '/5',
    label: 'Trustpilot rating',
    note: 'Reviews listed under Bullrunners on Trustpilot',
  },
]

export default function Stats() {
  return (
    // Less top padding than bottom: the hero already contributes its own
    // bottom padding, so a symmetrical py- here doubles into a big gap.
    <section className="relative overflow-hidden pb-20 pt-10 lg:pb-28 lg:pt-14">
      {/* Static green glow — 900x620 circle centred on the section.
          No animation: it's a single radial-gradient, nothing more. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[55%] h-[620px] w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(34,197,94,0.13), transparent 65%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative mx-auto mb-6 flex justify-center">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="relative z-10 h-16 w-auto sm:h-20"
          />
        </div>

        <h2 className="mx-auto -mt-2 max-w-4xl text-center text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
          Over a decade of crypto coverage,{' '}
          <span className="text-brand">followed by hundreds of thousands.</span>
        </h2>

        {/* 1 column on phones, 2 from sm up (no lg:grid-cols-4).
            max-w keeps the cards from stretching too wide on desktop —
            drop it if you want them to fill the full container. */}
        <ul className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {STATS.map((stat, i) => {
            const Icon = stat.icon
            return (
              <li
                key={stat.label}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-brand/25"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium tabular-nums text-white/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="mt-7 text-[2.75rem] font-extrabold leading-none tracking-tight text-brand">
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                  />
                </p>

                <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
                  {stat.label}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-white/50">{stat.note}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}