import { profile } from '../data/profile'

function Row() {
  return (
    <div className="marquee__row" aria-hidden="true">
      {profile.marquee.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
          <span className="marquee__star">✳</span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <section className="marquee" aria-label="Technologies I work with">
      <div className="marquee__track">
        <Row />
        <Row />
      </div>
    </section>
  )
}
