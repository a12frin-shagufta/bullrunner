import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCategory, postsInCategory } from '../data/posts'
import PostCard from '../components/PostCard'

const INITIAL = 9
const STEP = 6

export default function Category() {
  const { slug } = useParams()
  const category = getCategory(slug)
  const [visible, setVisible] = useState(INITIAL)

  // reset the "show more" count when navigating between categories,
  // otherwise XRP's expanded state carries over to Altcoins
  useEffect(() => {
    setVisible(INITIAL)
    window.scrollTo(0, 0)
  }, [slug])

  if (!category) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Category not found
        </h1>
        <p className="mt-4 text-white/60">
          There's no category at /{slug}.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-brand px-7 py-3.5 font-bold text-ink hover:bg-brand-strong"
        >
          Back to home
        </Link>
      </section>
    )
  }

  const posts = postsInCategory(category.name)
  const shown = posts.slice(0, visible)
  const remaining = posts.length - visible

  return (
    <section className="pb-20 pt-12 lg:pb-28 lg:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
          Category
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
          {category.name}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">
          {category.description}
        </p>

        {posts.length === 0 ? (
          <p className="mt-14 text-white/40">No posts in this category yet.</p>
        ) : (
          <>
            <ul className="mt-12 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
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
                  Show more
                  <span className="ml-2 font-medium text-white/40">({remaining})</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}