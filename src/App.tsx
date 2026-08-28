import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import Team from './components/Team'
import Differentiators from './components/Differentiators'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileDock from './components/MobileDock'

function App() {
  return (
    <>
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.035] mix-blend-multiply" />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <Team />
        <Differentiators />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </>
  )
}

export default App
