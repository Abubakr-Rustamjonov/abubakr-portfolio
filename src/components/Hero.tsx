import { useEffect, useRef, type CSSProperties } from 'react'
import { profile } from '../data/profile'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Arrow } from './Arrow'
import { Magnetic } from './Magnetic'

const nameLetters = [...profile.name]
const accentWord = [...'software']
const restWord = [...'engineer']
const roleOffset = nameLetters.length + 3
const restOffset = roleOffset + accentWord.length + 1
const dotOffset = restOffset + restWord.length

function charStyle(index: number) {
  return { '--i': index } as CSSProperties
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const node = heroRef.current
    if (!node || reduced) return

    let frame = 0
    const onMove = (event: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect()
        node.style.setProperty('--mx', `${event.clientX - rect.left}px`)
        node.style.setProperty('--my', `${event.clientY - rect.top}px`)
        frame = 0
      })
    }

    node.addEventListener('pointermove', onMove)
    return () => {
      node.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reduced])

  useEffect(() => {
    const node = heroRef.current
    if (!node || reduced) return

    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      const fade = Math.max(0, 1 - y / 780)
      node.style.setProperty('--sy', String(y))
      node.style.setProperty('--fade', fade.toFixed(3))
    }
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', request, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', request)
    }
  }, [reduced])

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__meta">
          <p className="eyebrow">Portfolio — 2026</p>
          <p className={`status${profile.available ? ' status--on' : ''}`}>
            <span className="status__dot" aria-hidden="true" />
            {profile.available ? 'Available for new work' : 'Currently booked'}
          </p>
        </div>

        <h1 className="hero__title">
          <span className="sr-only">{profile.name} — software engineer.</span>

          <span className="hero__line hero__line--name" aria-hidden="true">
            {nameLetters.map((char, i) => (
              <span className="char" key={`${char}-${i}`} style={charStyle(i)}>
                {char}
              </span>
            ))}
          </span>

          <span className="hero__line hero__line--serif" aria-hidden="true">
            {accentWord.map((char, i) => (
              <span
                className="char char--accent"
                key={`accent-${i}`}
                style={charStyle(roleOffset + i)}
              >
                {char}
              </span>
            ))}
            <span className="char" style={charStyle(roleOffset + accentWord.length)}>
              &nbsp;
            </span>
            {restWord.map((char, i) => (
              <span className="char" key={`rest-${i}`} style={charStyle(restOffset + i)}>
                {char}
              </span>
            ))}
            <span className="char char--accent" style={charStyle(dotOffset)}>
              .
            </span>
          </span>
        </h1>

        <div className="hero__foot">
          <p className="hero__lede">{profile.lede}</p>

          <div className="hero__actions">
            <Magnetic>
              <a className="btn btn--solid" href="#work">
                See the work
                <span className="btn__icon" aria-hidden="true">↓</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn" href={`mailto:${profile.email}`}>
                Get in touch
                <Arrow className="btn__arrow" />
              </a>
            </Magnetic>
          </div>

          <dl className="hero__facts">
            <div>
              <dt>Based</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Product engineering</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>TypeScript · React · Node</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="hero__rail" aria-hidden="true">
        <span>Scroll to explore</span>
        <span className="hero__rail-line" />
      </div>
    </section>
  )
}
