import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhyStruggle.css'
import { PAIN_POINTS } from '../data/landingData'

/* ── Animation variants ── */

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
};

const labelVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const titleVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
};

/* Line draws from left → right */
const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
  }
};

/* List container — stagger children */
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.3 }
  }
};

/* Each row slides in from left */
const rowVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

/* Number flips up */
const numberVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.7 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  }
};

/* Text reveals with a slight delay after number */
const textVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }
  }
};

export default function WhyStruggle() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="struggle"
      id="why-struggle"
    >
      <div className="struggle__inner">

        {/* Header */}
        <motion.div
          className="struggle__header"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p className="struggle__label" variants={labelVariants}>
            The Problem
          </motion.p>
          <motion.h2 className="struggle__title" variants={titleVariants}>
            Why Struggle with<br />Disconnected Systems?
          </motion.h2>
          <motion.p className="struggle__subtitle" variants={subtitleVariants}>
            Fragmented operations lead to lost revenue, poor customer experiences, and decisions based on guesswork. We solve that.
          </motion.p>
        </motion.div>

        {/* List with animated top-line draw */}
        <div className="struggle__grid-wrap">
          {/* Animated top border line — draws left → right */}
          <motion.div
            className="struggle__top-line"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />

          <motion.div
            className="struggle__grid"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {PAIN_POINTS.map((point, index) => (
              <motion.div
                key={point}
                className="struggle-card"
                variants={rowVariants}
              >
                {/* Number flips in with spring */}
                <motion.div
                  className="struggle-card__number"
                  variants={numberVariants}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>

                {/* Text slides in after number */}
                <motion.p
                  className="struggle-card__text"
                  variants={textVariants}
                >
                  {point}
                </motion.p>

                {/* Hover fill bar */}
                <div className="struggle-card__fill" aria-hidden="true" />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
