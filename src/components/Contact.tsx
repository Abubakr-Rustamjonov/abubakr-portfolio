import { profile } from '../data/profile'
import { Arrow } from './Arrow'
import { Reveal } from './Reveal'
import { SplitText } from './SplitText'

export function Contact() {
  const [emailLocal, emailDomain] = profile.email.split('@')

  return (
    <section className="contact" id="contact">
      <div className="orbit" aria-hidden="true">
        <svg viewBox="0 0 140 140">
          <defs>
            <path
              id="orbit-path"
              d="M70,70 m-54,0 a54,54 0 1,1 108,0 a54,54 0 1,1 -108,0"
            />
          </defs>
          <text className="orbit__text">
            <textPath href="#orbit-path" startOffset="0">
              OPEN FOR WORK · LET’S BUILD SOMETHING ·
            </textPath>
          </text>
        </svg>
        <span className="orbit__center">
          <Arrow />
        </span>
      </div>

      <Reveal>
        <p className="eyebrow">
          <span className="accent">/03</span> Contact
        </p>

        <h2 className="contact__title" aria-label="Have something worth building?">
          <span className="contact__title-line">
            <SplitText text="Have something" />
          </span>
          <span className="contact__title-line">
            <em>
              <SplitText text="worth building?" offset={2} />
            </em>
          </span>
        </h2>

        <a
          className="contact__mail"
          href={`mailto:${profile.email}`}
          aria-label={profile.email}
        >
          <span className="contact__mail-text">
            {emailLocal}
            {emailDomain ? (
              <>
                <wbr />@{emailDomain}
              </>
            ) : null}
          </span>
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
