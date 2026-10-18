import { profile } from '../data/profile'
import { Arrow } from './Arrow'
import { Magnetic } from './Magnetic'

const github = profile.socials.find((social) => social.label === 'GitHub')

export function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__logo" href="#top" aria-label={`${profile.name} — back to top`}>
          {profile.name}
          <span className="nav__dot">.</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {github ? (
          <Magnetic strength={0.18}>
            <a
              className="nav__cta"
              href={github.href}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <span className="nav__cta-label">GitHub</span>
              <Arrow className="nav__arrow" />
            </a>
          </Magnetic>
        ) : null}
      </div>
    </header>
  )
}
