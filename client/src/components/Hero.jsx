import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Hero.css';
import MagneticWrapper from './MagneticWrapper';
import ScrambleText from './ScrambleText';

const MARQUEE_ITEMS = [
  'BUSINESS SYSTEM', 'DATA ACCURACY', 'DIGITAL TRANSFORMATION',
  'SCALABLE GROWTH', 'OPERATIONAL EFFICIENCY', 'SYSTEM ARCHITECTURE',
  'CRM SOLUTIONS', 'PROCESS AUTOMATION',
];

const titleLines = ["Your Vision,", "Our System."];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } }
};

const lineVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%', opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">

        {/* Badge */}
        <motion.span
          className="hero__badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Digital Systems Architect
        </motion.span>

        {/* Display Headline — clip reveal line by line */}
        <motion.h1
          className="hero__title"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLines.map((line, i) => (
            <span className="hero__title-line" key={i}>
              <motion.span className="hero__title-line-inner" variants={lineVariants}>
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Bottom row: subtitle + stats */}
        <motion.div
          className="hero__bottom"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: subtitle + CTA */}
          <motion.div variants={fadeUpVariants} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p className="hero__subtitle">
              We architect custom digital systems that transform businesses, ensuring scalability, data accuracy, and operational efficiency.
            </p>
            <div className="hero__cta-group">
              <MagneticWrapper strength={0.4}>
                <a href="#portfolio" className="hero__btn hero__btn--primary">View Portfolio</a>
              </MagneticWrapper>
              <MagneticWrapper strength={0.3}>
                <a href="#contact" className="hero__btn hero__btn--secondary">Request a Demo</a>
              </MagneticWrapper>
              <MagneticWrapper strength={0.3}>
                <a
                  href="https://wa.me/6281387295387?text=Halo%20Raynad%20Digital%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20sistem%20bisnis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__btn hero__btn--wa"
                  aria-label="Chat with Raynad Digital on WhatsApp"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{flexShrink: 0}}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.881-.733-1.476-1.639-1.649-1.937-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </MagneticWrapper>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div className="hero__stats" variants={fadeUpVariants}>
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Systems<br />Architected</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">100%</span>
              <span className="hero__stat-label">Data<br />Accuracy</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">50%</span>
              <span className="hero__stat-label">Efficiency<br />Boost</span>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Marquee ticker */}
      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="hero__marquee-item">
              {item} <span className="hero__marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}