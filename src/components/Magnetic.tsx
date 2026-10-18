import { useRef, type PointerEvent, type ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type MagneticProps = {
  children: ReactNode
  className?: string
  strength?: number
}

/** Pulls its child gently toward the pointer, then springs back. */
export function Magnetic({ children, className = '', strength = 0.22 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()

  const handleMove = (event: PointerEvent<HTMLSpanElement>) => {
    const node = ref.current
    if (!node || reduced || event.pointerType !== 'mouse') return

    const rect = node.getBoundingClientRect()
    const x = (event.clientX - (rect.left + rect.width / 2)) * strength
    const y = (event.clientY - (rect.top + rect.height / 2)) * strength
    node.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`.trim()}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerUp={reset}
    >
      {children}
    </span>
  )
}
