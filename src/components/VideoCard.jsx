import { useState } from 'react'

/**
 * Lite YouTube embed ("facade" pattern).
 * Shows the thumbnail until clicked, then swaps in the real iframe.
 * A plain <iframe> would pull ~600kb of YouTube JS on page load; this pulls
 * one image, and the player only loads if someone actually wants to watch.
 */
export default function VideoCard({
  videoId,
  title = 'Latest video',
  articleHref = '#article',
  channelHref = '#youtube',
}) {
  const [playing, setPlaying] = useState(false)

  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className="w-full">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/50">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={thumb}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-ink">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Caption row under the card */}
      <p className="mt-4 flex flex-wrap items-center gap-x-2 text-[12px] text-muted">
        <span>Latest video</span>
        <span aria-hidden="true">·</span>
        <a href={articleHref} className="font-semibold text-brand hover:underline">
          Read the article
        </a>
        <span aria-hidden="true">·</span>
        <a href={channelHref} className="font-semibold text-brand hover:underline">
          More videos on YouTube →
        </a>
      </p>
    </div>
  )
}