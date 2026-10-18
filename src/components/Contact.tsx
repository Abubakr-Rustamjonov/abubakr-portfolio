import { profile } from '../data/profile'
import { Arrow } from './Arrow'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal>
        <p className="eyebrow">
          <span className="accent">/03</span> Contact
        </p>

        <h2 className="contact__title">
          Have something
          <br />
          <em>worth building?</em>
        </h2>

        <a className="contact__mail" href={`mailto:${profile.email}`}>
          <span className="contact__mail-text">{profile.email}</span>
          <span className="contact__mail-icon" aria-hidden="true">
            <Arrow />
          </span>
        </a>

        <div className="contact__foot">
          <p className="contact__note">
            Freelance projects, full-time roles, or just a good question — my inbox is open.
          </p>
          <ul className="contact__socials">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                  <Arrow className="contact__social-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
