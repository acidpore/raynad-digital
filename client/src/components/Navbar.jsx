import { useState } from 'react'
import './Navbar.css'
import { NAV_LINKS } from '../data/landingData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

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
              <li key={link.href}>
                <a href={link.href} className="navbar__link" onClick={() => setIsOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <div className="navbar__lang">
            <span>EN</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <button 
            className={`hamburger ${isOpen ? 'hamburger--active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
