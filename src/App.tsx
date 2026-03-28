import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TransitionEvent,
} from 'react'
import LiquidEther from './components/LiquidEther'
import { VisitXModal } from './components/VisitXModal'
import { XPostCard } from './components/XPostCard'
import {
  BLACK_SNAPE_X_COMMUNITY_URL,
  BLACK_SNAPE_X_PROMO_URL,
} from './config/links'
import { BLACK_SNAPE_X_POSTS } from './data/blackSnapePosts'

const VIDEO_SRC =
  '/Pierry_Chan_-_BLACKSNAPE_-_I_m_Black_Snape_Official_Music_Video_4l4Di8.mp4'

/** Set when the mint is public; until then the UI shows a pending message and copy is disabled. */
const LIVE_CONTRACT_ADDRESS: string | null = null

const CA_PENDING_MESSAGE =
  'Will be posted on our X first, then updated here.'

const LOGO_SRC = '/logo.jpeg'

const VISIT_X_MODAL_STORAGE_KEY = 'blacksnape-visit-x-dismissed'
const VISIT_X_MODAL_DELAY_MS = 3000

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const dismissFallbackRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [loaderState, setLoaderState] = useState<'open' | 'exiting' | 'gone'>('open')
  const [caCopied, setCaCopied] = useState(false)
  const [visitModalOpen, setVisitModalOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('loader-active', loaderState !== 'gone')
  }, [loaderState])

  useEffect(() => {
    if (loaderState === 'open') {
      queueMicrotask(() => document.getElementById('loader-enter-btn')?.focus())
    }
  }, [loaderState])

  useEffect(() => {
    if (loaderState !== 'gone') return
    if (sessionStorage.getItem(VISIT_X_MODAL_STORAGE_KEY) === '1') return
    const id = window.setTimeout(() => {
      setVisitModalOpen(true)
    }, VISIT_X_MODAL_DELAY_MS)
    return () => window.clearTimeout(id)
  }, [loaderState])

  const closeVisitModal = useCallback(() => {
    sessionStorage.setItem(VISIT_X_MODAL_STORAGE_KEY, '1')
    setVisitModalOpen(false)
  }, [])

  const finalizeLoader = useCallback(() => {
    if (dismissFallbackRef.current) {
      clearTimeout(dismissFallbackRef.current)
      dismissFallbackRef.current = null
    }
    setLoaderState('gone')
  }, [])

  const handleEnter = () => {
    const v = videoRef.current
    if (v) {
      v.muted = false
      void v.play().catch(() => {})
    }
    setLoaderState('exiting')
    dismissFallbackRef.current = window.setTimeout(finalizeLoader, 700)
  }

  const handleCopyCa = async () => {
    if (!LIVE_CONTRACT_ADDRESS) return
    try {
      await navigator.clipboard.writeText(LIVE_CONTRACT_ADDRESS)
      setCaCopied(true)
      window.setTimeout(() => setCaCopied(false), 2200)
    } catch {
      setCaCopied(false)
    }
  }

  const canCopyCa = Boolean(LIVE_CONTRACT_ADDRESS)

  const handleLoaderTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (loaderState !== 'exiting') return
    if (e.target !== e.currentTarget || e.propertyName !== 'opacity') return
    finalizeLoader()
  }

  const loaderClass =
    loaderState === 'exiting'
      ? 'site-loader site-loader--exiting'
      : 'site-loader'

  const headerXUrl =
    BLACK_SNAPE_X_PROMO_URL.trim() || 'https://x.com/BlackSnapeX'

  return (
    <>
      {loaderState !== 'gone' && (
        <div
          id="site-loader"
          className={loaderClass}
          role="dialog"
          aria-modal="true"
          aria-labelledby="loader-title"
          onTransitionEnd={handleLoaderTransitionEnd}
        >
          <div className="site-loader__ether" aria-hidden="true">
            <LiquidEther
              colors={['#42b710', '#2cba35', '#14852b']}
              mouseForce={20}
              cursorSize={100}
              isViscous
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
              className="site-loader__ether-canvas"
            />
          </div>
          <div className="site-loader__panel">
            <p className="site-loader__kicker">$SNAPE</p>
            <h1 id="loader-title" className="site-loader__title">
              The Black Snape
            </h1>
            <p className="site-loader__hint">Sound on. Tap to enter.</p>
            <button
              type="button"
              className="site-loader__btn"
              id="loader-enter-btn"
              onClick={handleEnter}
            >
              Enter
            </button>
          </div>
        </div>
      )}

      <main id="app" inert={loaderState !== 'gone' || undefined}>
        <header className="site-header" role="banner">
          <div className="site-header__inner">
            <a className="brand" href="/" aria-label="The Black Snape home">
              <img
                className="site-mark site-mark--header"
                src={LOGO_SRC}
                alt=""
                width={40}
                height={40}
                decoding="async"
              />
              <span className="brand__title">The Black Snape</span>
              <span className="brand__ticker">$SNAPE</span>
            </a>
            <nav className="site-header__nav" aria-label="Actions">
              <button
                type="button"
                className="site-header__btn site-header__btn--ca"
                onClick={handleCopyCa}
                disabled={!canCopyCa}
                title={
                  canCopyCa
                    ? 'Copy contract address'
                    : 'CA will be shared on X first'
                }
              >
                {caCopied ? 'Copied' : 'Copy CA'}
              </button>
              <a
                className="site-header__btn site-header__btn--x"
                href={headerXUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Black Snape on X"
              >
                <svg
                  className="site-header__x-icon"
                  viewBox="0 0 24 24"
                  width={22}
                  height={22}
                  aria-hidden
                >
                  <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </header>

        <section className="hero" aria-label="Featured video">
          <video
            ref={videoRef}
            className="hero__video"
            loop
            playsInline
            preload="auto"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="hero__scrim" aria-hidden="true" />
          <div className="hero__credit">
            <a
              className="hero__credit-link"
              href="https://x.com/pierrychan1984/status/2037114083594412332?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              credits to @pierrychan1984
            </a>
          </div>
        </section>

        <div className="below-fold">
          <section
            className="section section--story"
            id="what-happened"
            aria-labelledby="what-happened-heading"
          >
            <div className="section__inner">
              <p className="section__eyebrow">The lore</p>
              <h2 id="what-happened-heading" className="section__title">
                What happened?
              </h2>

              <div className="story-layout">
                <div className="story-layout__main">
                  <p className="story-lede">
                    A casting swap for <strong>Severus Snape</strong> put{' '}
                    <strong>Paapa Essiedu</strong> in the frame—and the timeline
                    lost its mind. Edits, reactions, and quote-posts stacked up on{' '}
                    <strong>X</strong> until the moment turned into a full-blown
                    meme storm.
                  </p>
                  <p>
                    Clips and reposts have pulled in{' '}
                    <strong>20M+ views</strong> across the conversation (and
                    counting). The internet did what it does best: it named the
                    bit. People started calling him{' '}
                    <span className="story-nickname">“Black Snape.”</span>
                  </p>
                  <p className="story-muted">
                    $SNAPE is the on-chain side of the joke—community-led,
                    culture-first, zero pretence.
                  </p>
                </div>

                <aside className="story-layout__aside" aria-label="Highlights">
                  <img
                    className="site-mark site-mark--story"
                    src={LOGO_SRC}
                    alt=""
                    width={88}
                    height={88}
                    decoding="async"
                    aria-hidden
                  />
                  <figure className="story-quote">
                    <blockquote>
                      <p>Black Snape</p>
                    </blockquote>
                    <figcaption>The nickname that ate the feed.</figcaption>
                  </figure>
                  <div className="story-stat">
                    <span className="story-stat__value">20M+</span>
                    <span className="story-stat__label">
                      views across X (and climbing)
                    </span>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section
            className="section section--community"
            id="join-community"
            aria-labelledby="community-heading"
          >
            <div className="section__inner">
              <p className="section__eyebrow section__eyebrow--dim">On X</p>
              <h2 id="community-heading" className="section__title">
                Join and create Black Snape memes!
              </h2>
              <p className="section__subhead section__subhead--community">
                Share edits, reactions, and lore in the official community—then
                watch the timeline catch fire.
              </p>
              <div className="community-cta">
                <h3 className="community-cta__label">Join our X Community</h3>
                <a
                  className="community-cta__btn"
                  href={BLACK_SNAPE_X_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open community on X
                </a>
              </div>
            </div>
          </section>

          <section
            className="section section--x-posts"
            id="the-feed"
            aria-labelledby="x-posts-heading"
          >
            <div className="section__inner">
              <p className="section__eyebrow section__eyebrow--dim">
                The timeline
              </p>
              <h2 id="x-posts-heading" className="section__title">
                Black Snape on X
              </h2>
              <p className="section__subhead">
                Pixel captures from X—tap any card or “View on X” for the live
                thread.
              </p>
              <div className="x-posts__grid">
                {BLACK_SNAPE_X_POSTS.map((post) => (
                  <XPostCard key={post.url} post={post} />
                ))}
              </div>
            </div>
          </section>

          <section
            className="section section--tokenomics"
            id="tokenomics"
            aria-labelledby="tokenomics-heading"
          >
            <div className="section__inner">
              <p className="section__eyebrow section__eyebrow--dim">
                Distribution
              </p>
              <h2 id="tokenomics-heading" className="section__title">
                Fair Pump.fun launch
              </h2>
              <p className="section__subhead">
                100% fair launch on Pump.fun—no insider curve, no hidden wallet
                games. You know the drill: ticker, bonding curve, then the wild
                west.
              </p>

              <div className="token-card">
                <img
                  className="site-mark site-mark--token"
                  src={LOGO_SRC}
                  alt=""
                  width={56}
                  height={56}
                  decoding="async"
                  aria-hidden
                />
                <div className="token-card__row">
                  <div className="token-card__label">Contract address</div>
                  {LIVE_CONTRACT_ADDRESS ? (
                    <code className="token-card__ca" title={LIVE_CONTRACT_ADDRESS}>
                      {LIVE_CONTRACT_ADDRESS}
                    </code>
                  ) : (
                    <p className="token-card__ca token-card__ca--pending">
                      {CA_PENDING_MESSAGE}
                    </p>
                  )}
                </div>
                <div className="token-card__actions">
                  <button
                    type="button"
                    className="token-card__copy"
                    onClick={handleCopyCa}
                    disabled={!canCopyCa}
                    title={
                      canCopyCa
                        ? 'Copy contract address'
                        : 'CA will be shared on X first'
                    }
                  >
                    {caCopied ? 'Copied' : 'Copy CA'}
                  </button>
                  <span className="token-card__hint">
                    {canCopyCa
                      ? 'Double-check the mint on Pump.fun before you buy.'
                      : 'Watch our X for the mint—this box will update when the CA is live.'}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="site-footer">
          <p className="site-footer__line">
            created with love{' '}
            <span className="site-footer__heart" role="img" aria-label="black heart">
              🖤
            </span>
          </p>
        </footer>
      </main>

      <VisitXModal open={visitModalOpen} onClose={closeVisitModal} />
    </>
  )
}
