import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Trust } from './components/Trust'
import { Problem } from './components/Problem'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { PlatformBand } from './components/PlatformBand'
import { UseCases } from './components/UseCases'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Problem />
        <Features />
        <HowItWorks />
        <PlatformBand />
        <UseCases />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
