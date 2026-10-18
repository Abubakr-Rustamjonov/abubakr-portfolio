import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="footer__middle">Built with React, TypeScript &amp; Vite</p>
      <a href="#top" className="footer__top">
        Back to top
        <span aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}
