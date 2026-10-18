import type { CSSProperties } from 'react'
import { profile, type Project } from '../data/profile'
import { Arrow } from './Arrow'
import { Reveal } from './Reveal'
import { SplitText } from './SplitText'
import { Tilt } from './Tilt'

function Preview({ project, accent }: { project: Project; accent: string }) {
  return (
    <div className="card__preview" style={{ '--card-accent': accent } as CSSProperties}>
      <div className="card__chrome" aria-hidden="true">
        <span className="card__chrome-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="card__chrome-url">{project.title.toLowerCase()}.app</span>
      </div>
      <div className="card__canvas" aria-hidden="true">
        <span className="card__glyph">{project.title.charAt(0)}</span>
        <span className="card__skeleton card__skeleton--wide" />
        <span className="card__skeleton" />
        <span className="card__skeleton card__skeleton--short" />
      </div>
      <span className="card__year">{project.year}</span>
    </div>
  )
}

function Card({ project, accent, featured }: { project: Project; accent: string; featured: boolean }) {
  return (
    <Reveal className={featured ? 'card card--featured' : 'card'}>
      <Tilt>
        <a className="card__link" href={project.href} target="_blank" rel="noreferrer">
          <Preview project={project} accent={accent} />
          <div className="card__body">
            <p className="card__index">/{project.index}</p>
            <h3 className="card__title">{project.title}</h3>
            <p className="card__blurb">{project.blurb}</p>
            <ul className="card__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <span className="card__cta">
              View project
              <Arrow className="card__arrow" />
            </span>
          </div>
        </a>
        <span className="card__glare" aria-hidden="true" />
      </Tilt>
    </Reveal>
  )
}

const accents = ['#ff5c35', '#7bd1c1', '#c9a6ff']

export function Work() {
  return (
    <section className="section work" id="work">
      <Reveal>
        <div className="section__head">
          <p className="eyebrow">
            <span className="accent">/01</span> Selected work
          </p>
          <h2 className="section__title" aria-label="Things I’ve built">
            <SplitText text="Things I’ve" />{' '}
            <em>
              <SplitText text="built" offset={2} />
            </em>
          </h2>
          <p className="section__note">
            A few projects that show how I think about product, performance and the small details.
          </p>
        </div>
      </Reveal>

      <div className="work__list">
        {profile.projects.map((project, i) => (
          <Card
            key={project.title}
            project={project}
            accent={accents[i % accents.length]!}
            featured={i === 0}
          />
        ))}
      </div>
    </section>
  )
}
