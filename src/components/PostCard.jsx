export default function PostCard({ post }) {
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