import { useState } from 'react'

const INITIAL = 9
const STEP = 4

// Replace with your real posts (or data fetched from a CMS).
// `image` is optional — cards without one fall back to a generated panel.
const POSTS = [
  {
    category: 'XRP',
    title: 'Jed McCaleb and XRP: How the Founder Sold 9 Billion Coins',
    excerpt:
      'How Ripple co-founder Jed McCaleb sold about 9 billion XRP over nine years, the rules that limited his sales, and what the story teaches holders about supply.',
    date: 'October 11, 2026',
    image: "https://i.ytimg.com/vi/KiE7z7NSadE/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'Altcoins',
    title: "AVAX Down 92%: Why Avalanche Adoption Hasn't Lifted the Coin",
    excerpt:
      'BlackRock, FIFA and Securitize use Avalanche, yet AVAX is about 92% below its high. Why network adoption and token price are different things.',
    date: 'October 11, 2026',
    image: "https://i.ytimg.com/vi/Xox_Yzrwm7o/hqdefault.jpg",
    href: '#'
  },
  {
    category: 'Altcoins',
    title: 'Bank-Linked Altcoins: Does Bank Money Ever Reach the Token?',
    excerpt:
      'Quant, Hedera, Algorand, Ondo and Chainlink rallied on bank news in late September. Which tokens actually capture any of that bank money?',
    date: 'October 11, 2026',
    image: "https://i.ytimg.com/vi/5Kr44rAD3HI/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'Regulation',
    title: 'The Market Structure Bill: What Actually Changes for Holders',
    excerpt:
      'A plain-language read of the provisions that matter, who they cover, and the timelines that have slipped twice already.',
    date: 'October 10, 2026',
    image: "https://i.ytimg.com/vi/K5oS5kb3ywE/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'Bitcoin',
    title: 'Miner Reserves Hit a Three-Year Low — Does It Signal Anything?',
    excerpt:
      'Miners are holding less BTC than at any point since 2023. What that correlates with historically, and why the signal is weaker than it looks.',
    date: 'October 10, 2026',
    image: "https://i.ytimg.com/vi/gua6sBbaIpM/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'Security',
    title: 'Seed Phrase Storage: What Actually Survives a House Fire',
    excerpt:
      'Paper, steel plates, and the backup methods that quietly fail. A practical comparison with no product pitch at the end.',
    date: 'October 9, 2026',
    image: "https://i.ytimg.com/vi/cQSDxCX0-8M/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'DeFi',
    title: 'Stablecoin Yields Are Falling: Where the 12% Went',
    excerpt:
      'Lending rates across major protocols have compressed sharply this quarter. The mechanics behind it, and what sustainable looks like.',
    date: 'October 9, 2026',
    image: "https://i.ytimg.com/vi/fZBAOU9ji0w/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'ETFs',
    title: 'Spot ETF Flows Turned Negative — Reading the Data Properly',
    excerpt:
      'Three weeks of outflows made headlines. What the creation and redemption numbers actually say once you adjust for basis trades.',
    date: 'October 8, 2026',
    image: "https://i.ytimg.com/vi/S2pHlXAwmBE/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'Altcoins',
    title: 'Layer 2 Fees Collapsed. So Did Layer 2 Revenue',
    excerpt:
      'Cheaper transactions were the goal, but sequencer revenue funds the roadmap. How the major rollups are handling the squeeze.',
    date: 'October 8, 2026',
    image: "https://i.ytimg.com/vi/ZwedfC-WczM/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'XRP',
    title: 'Escrow Releases Explained: The Monthly Unlock Nobody Reads',
    excerpt:
      'One billion XRP unlocks monthly, and most of it goes straight back. What the on-chain record shows over the last two years.',
    date: 'October 7, 2026',
    image: "https://i.ytimg.com/vi/ZwedfC-WczM/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'Security',
    title: 'Approval Phishing: The Drain That Needs No Seed Phrase',
    excerpt:
      'The most common way wallets get emptied in 2026 does not involve your keys at all. How to audit and revoke token approvals.',
    date: 'October 7, 2026',
    image: "https://i.ytimg.com/vi/2_95hrMW2eg/hqdefault.jpg",
    href: '#',
  },
  {
    category: 'Bitcoin',
    title: 'Halving Math: Why the Supply Shock Argument Keeps Weakening',
    excerpt:
      'Each halving removes a smaller share of circulating supply than the last. The arithmetic, and what still holds up.',
    date: 'October 6, 2026',
    image: "https://i.ytimg.com/vi/IaybA2OvKqY/hqdefault.jpg",
    href: '#',
  },
  
]

function PostCard({ post }) {
  return (
    <li>
      <a
        href={post.href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-colors hover:border-brand/30"
      >
        <div className="aspect-video w-full overflow-hidden bg-surface-2">
          {post.image ? (
            <img
              src={post.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            // placeholder until you add a real thumbnail
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-2 to-ink">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/20">
                {post.category}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">
            {post.category}
          </p>

          <h3 className="mt-2.5 text-lg font-bold leading-snug text-white group-hover:text-brand/90">
            {post.title}
          </h3>

          <p className="mt-2.5 line-clamp-4 text-sm leading-relaxed text-white/55">
            {post.excerpt}
          </p>

          <p className="mt-4 pt-1 text-sm text-white/35">{post.date}</p>
        </div>
      </a>
    </li>
  )
}

export default function Latest({ posts = POSTS, heading = 'Latest' }) {
  const [visible, setVisible] = useState(INITIAL)

  const shown = posts.slice(0, visible)
  const remaining = posts.length - visible

  return (
    <section id="latest" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>

        <ul className="mt-8 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </ul>

        {remaining > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + STEP)}
              className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-3.5 text-base font-bold text-white transition-colors hover:border-brand/40 hover:text-brand"
            >
              All posts
              <span className="ml-2 font-medium text-white/40">({remaining})</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}