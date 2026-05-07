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