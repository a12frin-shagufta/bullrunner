import TeamCarousel from '../components/Teamcarousel'
import { TEAM } from '../data/Team'

export default function About() {
  return (
    <div className="pb-24 pt-12 lg:pb-32 lg:pt-16">
      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">About</p>

        <h1 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[3rem]">
          An independent crypto news and education network
        </h1>

        <p className="mt-7 text-base leading-relaxed text-white/70 sm:text-lg">
          Write your own description here — what you publish, where you publish it, and
          what a reader gets from following along. Two or three sentences is plenty.
        </p>

        <h2 className="mt-14 text-2xl font-extrabold tracking-tight text-white">
          Who we are
        </h2>

        <p className="mt-4 text-base leading-relaxed text-white/70">
          A paragraph about the people behind the site and what qualifies them to cover
          this. Keep it factual and specific — vague credibility claims read as noise.
        </p>
      </section>

      {/* Team */}
      <section className="mt-16 lg:mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Meet the team
          </h2>
        </div>

        {/* full-bleed-ish container so the track has room to slide */}
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <TeamCarousel members={TEAM} />
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto mt-20 max-w-4xl px-6 lg:px-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">How we work</h2>

        <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-white/70 marker:text-brand">
          <li>We link to primary sources wherever we can.</li>
          <li>
            We separate what a company announced from what it means for a coin's
            holders.
          </li>
          <li>
            We correct mistakes openly. Spot one?{' '}
            <a
              href="mailto:team@example.com"
              className="font-medium text-brand underline underline-offset-4"
            >
              Email us
            </a>
            .
          </li>
        </ul>
      </section>
    </div>
  )
}