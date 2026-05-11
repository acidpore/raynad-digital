import { motion } from 'framer-motion'
import './Footer.css'
import MagneticWrapper from './MagneticWrapper'

const FOOTER_MARQUEE = ['RAYNAD DIGITAL', 'JAKARTA INDONESIA', 'DIGITAL SYSTEMS', 'BUSINESS ARCHITECTURE', 'SCALABLE GROWTH'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* Marquee strip */}
      <div className="footer__marquee" aria-hidden="true">
        <div className="footer__marquee-track">
          {[...FOOTER_MARQUEE, ...FOOTER_MARQUEE, ...FOOTER_MARQUEE].map((item, i) => (
            <span key={i} className="footer__marquee-item">· {item}</span>
          ))}
        </div>
      </div>

      <motion.div
        className="footer__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Ultra-display CTA */}
        <div className="footer__cta-wrap">
          <motion.h2 className="footer__title" variants={itemVariants}>
            Ready to<br />Integrate?
          </motion.h2>
          <motion.p className="footer__subtitle" variants={itemVariants}>
            Talk to us and structure your business for scale.
          </motion.p>
        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="footer__btn-group">
          <MagneticWrapper strength={0.3}>
            <a
              href="https://wa.me/6281387295387?text=Halo%20Raynad%20Digital%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20sistem%20bisnis"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__btn footer__btn--wa"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.881-.733-1.476-1.639-1.649-1.937-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </MagneticWrapper>
          <MagneticWrapper strength={0.3}>
            <a
              href="mailto:contact@raynad.com"
              className="footer__btn footer__btn--email"
            >
              Contact Us
            </a>
          </MagneticWrapper>
        </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div className="footer__bottom" variants={itemVariants}>
          <div className="footer__brand-info">
            <h3 className="footer__brand-text">RAYNAD DIGITAL</h3>
            <p className="footer__address">Jakarta Selatan, Indonesia</p>
            <p className="footer__copyright">&copy; {new Date().getFullYear()} Raynad Digital. All rights reserved.</p>
          </div>

          <div className="footer__socials">
            <a href="https://www.instagram.com/raynad.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.76-6.98 6.236-.058 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 1.76 6.78 6.236 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.762 6.979-6.236.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-1.778-6.78-6.237-6.98-1.28-.059-1.688-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@raynad.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.39-2.2 1.85-5.21 2.68-8.1 2.12-2.8-.52-5.3-2.31-6.52-4.88-1.22-2.58-1-5.69.58-8.14 1.57-2.45 4.34-4 7.23-4.14 0 1.34.01 2.67-.01 4.01-1.39.02-2.78.36-3.88 1.25-1.11.88-1.78 2.29-1.74 3.73.04 1.44.75 2.82 1.91 3.65 1.16.84 2.66 1.13 4.06.84 1.4-.29 2.63-1.16 3.32-2.41.69-1.24.89-2.73.84-4.18-.04-6.49-.03-12.98-.03-19.46l.16.02z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/raynad/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
