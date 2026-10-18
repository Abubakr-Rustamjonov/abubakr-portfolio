import { useRef, type PointerEvent, type ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type TiltProps = {
  children: ReactNode
  className?: string
}

/** Tilts its content in 3D toward the pointer and exposes --mx/--my for glare. */
export function Tilt({ children, className = '' }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node || reduced || event.pointerType !== 'mouse') return

    const rect = node.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    node.classList.add('is-tilting')
    node.style.setProperty('--rx', `${((0.5 - py) * 7).toFixed(2)}deg`)
    node.style.setProperty('--ry', `${((px - 0.5) * 9).toFixed(2)}deg`)
    node.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    node.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
  }

  const reset = () => {
    const node = ref.current
    if (!node) return
    node.classList.remove('is-tilting')
    node.style.setProperty('--rx', '0deg')
    node.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`.trim()}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  )
}
