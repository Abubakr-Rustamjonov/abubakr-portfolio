import { useEffect, useRef } from 'react'
import { profile } from '../data/profile'
import { Arrow } from './Arrow'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = heroRef.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
  }, [])

  return (
    <section className="hero" id="top" ref={heroRef}>
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
          <span className="hero__line">{profile.name}</span>
          <span className="hero__line hero__line--serif">
            <em>software</em> engineer<span className="accent">.</span>
          </span>
        </h1>

        <div className="hero__foot">
          <p className="hero__lede">{profile.lede}</p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#work">
              See the work
              <span className="btn__icon" aria-hidden="true">↓</span>
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              Get in touch
              <Arrow className="btn__arrow" />
            </a>
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
