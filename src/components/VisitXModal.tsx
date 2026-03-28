import { useEffect, useRef } from 'react'
import { BLACK_SNAPE_X_PROMO_URL } from '../config/links'
import './VisitXModal.css'

const BANNER_SRC = '/x-posts/popup.jpg'

type VisitXModalProps = {
  open: boolean
  onClose: () => void
}

export function VisitXModal({ open, onClose }: VisitXModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.classList.add('visit-x-modal-active')
    closeBtnRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('visit-x-modal-active')
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const hasUrl =
    typeof BLACK_SNAPE_X_PROMO_URL === 'string' &&
    BLACK_SNAPE_X_PROMO_URL.trim().length > 0

  return (
    <div
      className="visit-x-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visit-x-modal-title"
    >
      <button
        type="button"
        className="visit-x-modal__backdrop"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="visit-x-modal__shell">
        <div
          className="visit-x-modal__banner"
          style={{ backgroundImage: `url(${BANNER_SRC})` }}
        >
          <button
            ref={closeBtnRef}
            type="button"
            className="visit-x-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
          <div className="visit-x-modal__content">
            <h2 id="visit-x-modal-title" className="visit-x-modal__title">
              Visit The Black Snape X!
            </h2>
            {hasUrl ? (
              <a
                className="visit-x-modal__cta"
                href={BLACK_SNAPE_X_PROMO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open X
              </a>
            ) : (
              <span className="visit-x-modal__cta visit-x-modal__cta--pending">
                Link coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
