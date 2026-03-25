import { useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import WhyStruggle from './components/WhyStruggle'
import Services from './components/Services'
import FeaturedProject from './components/FeaturedProject'
import OurTeam from './components/OurTeam'
import Footer from './components/Footer'

export default function App() {
  const isScrolling = useRef(false)

  useEffect(() => {
    // Rigid one-section-per-scroll logic (Desktop Only)
    const handleWheel = (e) => {
      // Allow native scroll on mobile because stacked items might exceed 100vh
      if (window.innerWidth <= 768) return

      e.preventDefault() // Stop smooth 'row-by-row' scrolling natively
      
      if (isScrolling.current) return
      
      isScrolling.current = true
      const direction = e.deltaY > 0 ? 1 : -1
      
      window.scrollBy({
        top: direction * window.innerHeight,
        behavior: 'smooth'
      })
      
      // Cooldown timer to prevent multiple jumps in 1 fast wheel tick
      setTimeout(() => {
        isScrolling.current = false
      }, 700) 
    }

    // passive: false is required to let e.preventDefault() work
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <WhyStruggle />
        <Services />
        <FeaturedProject />
        <OurTeam />
      </main>
      <Footer />
    </div>
  )
}

