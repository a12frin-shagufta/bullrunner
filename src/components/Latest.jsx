import { useState } from 'react'
import { POSTS } from '../data/posts'
import PostCard from './PostCard'

const INITIAL = 9
const STEP = 4

export default function Latest({ posts = POSTS, heading = 'Latest' }) {
  const [visible, setVisible] = useState(INITIAL)

  const shown = posts.slice(0, visible)
  const remaining = posts.length - visible

  return (
    <section id="latest" className="pb-16 pt-6 lg:pb-24 lg:pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>

        <ul className="mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
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
        
            </button>
          </div>
        )}
      </div>
    </section>
  )
}