import type { BlackSnapeXPost } from '../data/blackSnapePosts'

function IconReply() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden>
      <path
        fill="currentColor"
        d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-4.285c-2.125.17-4.14-.6-5.65-2.12-1.57-1.56-2.4-3.65-2.4-5.75v-.35zm8.005-6c-3.317 0-6.005 2.69-6.005 6v.35c0 1.55.55 3.03 1.55 4.28 1.2 1.19 2.8 1.72 4.45 1.48l.45-.06v3.2l6.87-3.8c1.89-1.05 3.07-3.04 3.07-5.25 0-3.31-2.69-6-6.005-6h-4.36z"
      />
    </svg>
  )
}

function IconRepost() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden>
      <path
        fill="currentColor"
        d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
      />
    </svg>
  )
}

function IconLike() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden>
      <path
        fill="currentColor"
        d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16-.75.96-1.24 1.88-1.55 2.56-.31-.68-.8-1.6-1.55-2.56-1.21-1.65-2.668-2.22-3.89-2.16-1.308.06-2.579.52-3.53 1.48C1.05 8.94.5 10.52.5 12.25c0 3.22 2.42 6.03 6.44 8.36 1.13.6 2.408 1.11 3.56 1.55.15.06.31.09.47.09.16 0 .32-.03.47-.09 1.15-.44 2.43-.95 3.56-1.55 4.02-2.33 6.44-5.14 6.44-8.36 0-1.73-.55-3.31-1.56-4.75-.95-.96-2.22-1.42-3.53-1.48z"
      />
    </svg>
  )
}

function IconBookmark() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden>
      <path
        fill="currentColor"
        d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
      />
    </svg>
  )
}

function IconShare() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden>
      <path
        fill="currentColor"
        d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41v10.67h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
      />
    </svg>
  )
}

function IconVerified() {
  return (
    <svg
      className="x-post__verified"
      viewBox="0 0 22 22"
      width={18}
      height={18}
      aria-label="Verified account"
    >
      <path
        fill="#1d9bf0"
        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646-.017-1.273.212-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
      />
    </svg>
  )
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

export function XPostCard({ post }: { post: BlackSnapeXPost }) {
  if (post.screenshot) {
    const alt = `${post.displayName} on X: ${post.text.slice(0, 120)}`
    return (
      <article className="x-post x-post--screenshot">
        <a
          className="x-post__screenshot-link"
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="x-post__screenshot-img"
            src={post.screenshot}
            alt={alt}
            loading="lazy"
          />
        </a>
        <div className="x-post__screenshot-footer">
          <a
            className="x-post__link"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on X
          </a>
        </div>
      </article>
    )
  }

  const stats = post.stats
  if (!stats) return null

  return (
    <article className="x-post">
      <div className="x-post__head">
        <div className="x-post__avatar" aria-hidden>
          {initials(post.displayName)}
        </div>
        <div className="x-post__head-main">
          <div className="x-post__head-row">
            <div className="x-post__names">
              <span className="x-post__display">{post.displayName}</span>
              {post.verified ? <IconVerified /> : null}
            </div>
            <button type="button" className="x-post__more" aria-label="More">
              ···
            </button>
          </div>
          <div className="x-post__handle">@{post.handle}</div>
        </div>
      </div>

      <p className="x-post__text">{post.text}</p>

      <p className="x-post__meta-line">
        {post.timeLabel ? (
          <>
            <span>{post.timeLabel}</span>
            <span className="x-post__meta-sep"> · </span>
          </>
        ) : null}
        <time dateTime={post.dateIso}>{post.dateLabel}</time>
        <span className="x-post__meta-sep"> · </span>
        {stats.views === '—' ? (
          <span className="x-post__meta-views">—</span>
        ) : (
          <span className="x-post__meta-views">
            <strong className="x-post__meta-views-num">{stats.views}</strong>
            {' Views'}
          </span>
        )}
      </p>

      <div className="x-post__actions" role="group" aria-label="Post engagement">
        <span className="x-post__action">
          <IconReply />
          <span className="x-post__action-count">{stats.replies}</span>
        </span>
        <span className="x-post__action">
          <IconRepost />
          <span className="x-post__action-count">{stats.reposts}</span>
        </span>
        <span className="x-post__action">
          <IconLike />
          <span className="x-post__action-count">{stats.likes}</span>
        </span>
        <span className="x-post__action">
          <IconBookmark />
          <span className="x-post__action-count">{stats.bookmarks}</span>
        </span>
        <span className="x-post__action x-post__action--share" title="Share">
          <IconShare />
        </span>
      </div>

      <div className="x-post__footer">
        <a
          className="x-post__link"
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on X
        </a>
      </div>
    </article>
  )
}
