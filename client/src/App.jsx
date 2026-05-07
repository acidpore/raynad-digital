import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import ImpactMetrics from './components/ImpactMetrics'
import WhyStruggle from './components/WhyStruggle'
import Services from './components/Services'
import FeaturedProject from './components/FeaturedProject'
import BusinessModel from './components/BusinessModel'
import OurTeam from './components/OurTeam'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div className="app">
      {/* Global premium animations */}
      <ScrollProgress />

      <Navbar />
      <main>
        <Hero />
        <ImpactMetrics />
        <AboutUs />
        <WhyStruggle />
        <Services />
        <FeaturedProject />
        <BusinessModel />
        <OurTeam />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
