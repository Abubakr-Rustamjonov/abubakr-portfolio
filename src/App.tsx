import { About } from './components/About'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { ScrollProgress } from './components/ScrollProgress'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to content
      </a>
      <ScrollProgress />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
