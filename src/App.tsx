import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import FloatingFeature from './components/FloatingFeature'
import WhySerenity from './components/WhySerenity'
import FeaturedPackage from './components/FeaturedPackage'
import Testimonials from './components/Testimonials'
import Packages from './components/Packages'
import Faq from './components/Faq'
import BookingCta from './components/BookingCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <FloatingFeature />
        <WhySerenity />
        <FeaturedPackage />
        <Testimonials />
        <Packages />
        <Faq />
        <BookingCta />
      </main>
      <Footer />
    </>
  )
}
