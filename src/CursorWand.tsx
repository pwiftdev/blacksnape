import { useEffect, useState } from 'react'
import './CursorWand.css'

export default function CursorWand() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPos({ x: e.clientX + 16, y: e.clientY + 20 })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      className="cursor-wand"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      aria-hidden
    >
      <img
        className="cursor-wand__img"
        src="/wand.png"
        alt=""
        width={56}
        draggable={false}
      />
    </div>
  )
}
