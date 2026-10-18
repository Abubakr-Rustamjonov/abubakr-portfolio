import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/** A soft ring that trails the pointer and expands over interactive elements. */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let frame = 0

    const show = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    const hide = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    const onMove = (event: globalThis.PointerEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      show()
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`

      const target = event.target instanceof Element ? event.target.closest('a, button, [data-cursor]') : null
      ring.classList.toggle('is-active', Boolean(target))
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16
      ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%)`
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', hide)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', hide)
    }
  }, [reduced])

  return (
    <div className="cursor-fx" aria-hidden="true">
      <div ref={ringRef} className="cursor-fx__ring" />
      <div ref={dotRef} className="cursor-fx__dot" />
    </div>
  )
}
