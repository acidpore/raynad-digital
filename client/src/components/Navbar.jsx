import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'
import { NAV_LINKS } from '../data/landingData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(NAV_LINKS[0].href)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const sections = NAV_LINKS.map(link => document.querySelector(link.href)).filter(Boolean);

    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.6, // A section is considered active when 60% is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          <img src="/logoraynad.png" alt="Raynad Logo" className="navbar__logo" />
          RAYNAD DIGITAL
        </a>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="navbar__link-wrapper">
                <a 
                  href={link.href} 
                  className={`navbar__link ${activeLink === link.href ? 'active' : ''}`} 
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
                {activeLink === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="navbar__indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a href="#contact" className="navbar__cta">Get a Demo</a>
          <button 
            className={`hamburger ${isOpen ? 'hamburger--active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
