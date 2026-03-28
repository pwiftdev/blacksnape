import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TransitionEvent,
} from 'react'
import LiquidEther from './components/LiquidEther'

const VIDEO_SRC =
  '/Pierry_Chan_-_BLACKSNAPE_-_I_m_Black_Snape_Official_Music_Video_4l4Di8.mp4'

/** Replace with the real Pump.fun mint when live */
const PLACEHOLDER_CA = 'BLACKSNAPE_CA_PLACEHOLDER_UPDATE_AFTER_PUMPFUN_LAUNCH'

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const dismissFallbackRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [loaderState, setLoaderState] = useState<'open' | 'exiting' | 'gone'>('open')
  const [caCopied, setCaCopied] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('loader-active', loaderState !== 'gone')
  }, [loaderState])

  useEffect(() => {
    if (loaderState === 'open') {
      queueMicrotask(() => document.getElementById('loader-enter-btn')?.focus())
    }
  }, [loaderState])

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
    try {
      await navigator.clipboard.writeText(PLACEHOLDER_CA)
      setCaCopied(true)
      window.setTimeout(() => setCaCopied(false), 2200)
    } catch {
      setCaCopied(false)
    }
  }

  const handleLoaderTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (loaderState !== 'exiting') return
    if (e.target !== e.currentTarget || e.propertyName !== 'opacity') return
    finalizeLoader()
  }

  const loaderClass =
    loaderState === 'exiting'
      ? 'site-loader site-loader--exiting'
      : 'site-loader'

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
            <p className="site-loader__kicker">$BLACKSNAPE</p>
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
              <span className="brand__title">The Black Snape</span>
              <span className="brand__ticker">$BLACKSNAPE</span>
            </a>
            <nav className="site-header__nav" aria-label="Primary">
              <span className="nav-pill" aria-hidden="true">
                memecoin
              </span>
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
                    $BLACKSNAPE is the on-chain side of the joke—community-led,
                    culture-first, zero pretence.
                  </p>
                </div>

                <aside className="story-layout__aside" aria-label="Highlights">
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
                <div className="token-card__row">
                  <div className="token-card__label">Contract address</div>
                  <code
                    className="token-card__ca"
                    title={PLACEHOLDER_CA}
                  >
                    {PLACEHOLDER_CA}
                  </code>
                </div>
                <div className="token-card__actions">
                  <button
                    type="button"
                    className="token-card__copy"
                    onClick={handleCopyCa}
                  >
                    {caCopied ? 'Copied' : 'Copy CA'}
                  </button>
                  <span className="token-card__hint">
                    Placeholder—swap in the real mint after launch.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
