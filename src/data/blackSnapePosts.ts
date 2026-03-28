/**
 * Engagement strings as shown on X (e.g. 1.6K, 8M). Used for custom cards only.
 * Posts with `screenshot` use your capture as the source of truth for layout + numbers.
 */
export type XPostStats = {
  views: string
  replies: string
  reposts: string
  likes: string
  bookmarks: string
}

export type BlackSnapeXPost = {
  url: string
  handle: string
  displayName: string
  /** Plain text; use \n for line breaks */
  text: string
  dateLabel: string
  dateIso: string
  /** e.g. 5:26 PM — match X timestamp row */
  timeLabel?: string
  verified?: boolean
  /** Full post screenshot from X (served from /public). When set, card shows image + link only. */
  screenshot?: string
  stats?: XPostStats
}

/**
 * Curated posts. Add `screenshot: '/x-posts/yourfile.png'` + drop file in `public/x-posts/`
 * for pixel-accurate captures. Otherwise fill `stats` from what you see on X.
 */
export const BLACK_SNAPE_X_POSTS: BlackSnapeXPost[] = [
  {
    url: 'https://x.com/pierrychan1984/status/2037114083594412332',
    handle: 'pierrychan1984',
    displayName: 'Pierry Chan',
    text: "BLACKSNAPE - I'm Black Snape (Official Music Video)",
    dateLabel: 'Mar 26, 2026',
    dateIso: '2026-03-26',
    verified: true,
    screenshot: '/x-posts/pierrychan-2037114083594412332.png',
  },
  {
    url: 'https://x.com/TheRoyalSerf/status/2036911858062680365',
    handle: 'TheRoyalSerf',
    displayName: 'Serf',
    text: 'Video clip: Black Snape in the snow (from Severus). Open on X for full post.',
    dateLabel: 'Mar 26, 2026',
    dateIso: '2026-03-26',
    verified: true,
    screenshot: '/x-posts/theroyalserf-2036911858062680365.png',
  },
  {
    url: 'https://x.com/SeverusChud/status/2036907442173341929',
    handle: 'SeverusChud',
    displayName: 'Severus',
    text: 'Meme: Harry and Snape in the book vs in the HBO show. Open on X for full post.',
    dateLabel: 'Mar 26, 2026',
    dateIso: '2026-03-26',
    verified: true,
    screenshot: '/x-posts/severuschud-2036907442173341929.png',
  },
  {
    url: 'https://x.com/SeverusChud/status/2037626725043974488',
    handle: 'SeverusChud',
    displayName: 'Severus',
    text: 'Did you know 13% of wizards cast 60% of all dangerous spells?',
    dateLabel: 'Mar 28, 2026',
    dateIso: '2026-03-28',
    verified: true,
    screenshot: '/x-posts/severuschud-2037626725043974488.png',
  },
  {
    url: 'https://x.com/Huff4Congress/status/2037217303071273076',
    handle: 'Huff4Congress',
    displayName: 'Huff',
    text: 'Everyone is talking about “Black Snape,” so I thought…well, let’s use AI to just put him in the movie and see how it feels!\n\nI’m really excited now! 👦🏾👍🏾🪄',
    dateLabel: 'Mar 27, 2026',
    dateIso: '2026-03-27',
    verified: true,
    screenshot: '/x-posts/huff4congress-2037217303071273076.png',
  },
]
