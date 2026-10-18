import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SplitText } from './SplitText'

export function About() {
  return (
    <section className="section about" id="about">
      <Reveal>
        <div className="section__head">
          <p className="eyebrow">
            <span className="accent">/02</span> About
          </p>
          <h2 className="section__title" aria-label="Careful by default">
            <SplitText text="Careful by" />{' '}
            <em>
              <SplitText text="default" offset={2} />
            </em>
          </h2>
        </div>
      </Reveal>

      <div className="about__grid">
        <Reveal className="about__copy">
          <p className="about__lead">
            I&rsquo;m {profile.name}, a {profile.role.toLowerCase()} focused on{' '}
            <em>clarity</em> — interfaces that explain themselves and code that is a pleasure to
            change.
          </p>
          {profile.bio.map((paragraph) => (
            <p className="about__text" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <p className="about__text">
            Away from the screen I&rsquo;m usually reading about typography, tinkering with a
            mechanical keyboard, or taking long walks to think through a problem.
          </p>

          <div className="about__signature" aria-hidden="true">
            {profile.name}
            <span className="accent">.</span>
          </div>
        </Reveal>

        <div className="about__side">
          <Reveal delay={80}>
            <div className="panel">
              <h3 className="panel__title">Toolkit</h3>
              <div className="skills">
                {profile.skills.map((group) => (
                  <div className="skills__group" key={group.group}>
                    <p className="skills__label">{group.group}</p>
                    <ul className="skills__list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="panel">
              <h3 className="panel__title">Experience</h3>
              <ol className="timeline">
                {profile.experience.map((role) => (
                  <li className="timeline__item" key={`${role.title}-${role.period}`}>
                    <span className="timeline__period">{role.period}</span>
                    <span className="timeline__title">{role.title}</span>
                    <span className="timeline__company">{role.company}</span>
                    <span className="timeline__summary">{role.summary}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
