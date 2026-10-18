import { Fragment, type CSSProperties } from 'react'

type SplitTextProps = {
  text: string
  /** Offset so several SplitText parts in one heading stagger as a sequence. */
  offset?: number
  className?: string
}

/**
 * Splits a string into masked words that slide up when the surrounding
 * `.reveal` element becomes visible. The heading owns the accessible text.
 */
export function SplitText({ text, offset = 0, className = '' }: SplitTextProps) {
  const words = text.split(' ')

  return (
    <span className={`split ${className}`.trim()} aria-hidden="true">
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="split__word">
            <span className="split__inner" style={{ '--i': i + offset } as CSSProperties}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </span>
  )
}
