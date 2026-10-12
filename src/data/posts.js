// Single source of truth for posts — imported by the home page and by
// every category page, so a post only ever needs adding in one place.

export const POSTS = [
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


// Category pages. `slug` is the URL segment: /xrp, /altcoins, ...
// `name` must match the `category` field on posts exactly.
export const CATEGORIES = [
  {
    slug: 'xrp',
    name: 'XRP',
    description:
      'News and explainers on XRP and the XRP Ledger: Ripple, the courts and regulators, banks and payment companies, and what each story means for people who hold XRP.',
  },
  {
    slug: 'altcoins',
    name: 'Altcoins',
    description:
      'Coverage of the major alternative coins — what the networks actually do, who is building on them, and whether any of it reaches the token price.',
  },
  {
    slug: 'bitcoin',
    name: 'Bitcoin',
    description:
      'Bitcoin news, on-chain data and the arguments behind it, explained without the maximalism.',
  },
  {
    slug: 'security',
    name: 'Security',
    description:
      'How wallets actually get drained, what storage methods survive real-world failure, and the habits that keep your keys yours.',
  },
  {
    slug: 'defi',
    name: 'DeFi',
    description:
      'Lending, stablecoin yields and the protocols behind them — where the returns come from and what breaks them.',
  },
  {
    slug: 'regulation',
    name: 'Regulation',
    description:
      'Bills, rulings and agency guidance, read in plain language, with what each one changes for ordinary holders.',
  },
  {
    slug: 'etfs',
    name: 'ETFs',
    description:
      'Spot ETF flows, structures and the data behind the headlines.',
  },
]

export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug)

export const postsInCategory = (name) => POSTS.filter((p) => p.category === name)