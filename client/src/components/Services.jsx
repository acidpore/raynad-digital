import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Services.css';
import { SERVICES } from '../data/landingData';
import ScrambleText from './ScrambleText';

// Inline icons for each service
const ICONS = {
  mapping: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  development: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  integration: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
  ),
  optimization: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  ),
  finance: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
};

const getIconForService = (id) => {
  if (id.includes('mapping')) return ICONS.mapping;
  if (id.includes('development')) return ICONS.development;
  if (id.includes('integration')) return ICONS.integration;
  if (id.includes('optimization')) return ICONS.optimization;
  if (id.includes('finance')) return ICONS.finance;
  return ICONS.development;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className="services"
      id="service"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="services__inner">

        {/* Header */}
        <div className="services__header">
          <motion.p className="services__label" variants={itemVariants}>What We Do</motion.p>
          <motion.h2 className="services__title" variants={itemVariants}>
            <ScrambleText text="Our Services" trigger={isInView} duration={700} delay={300} />
          </motion.h2>
          <motion.p className="services__subtitle" variants={itemVariants}>
            We architect systems that drive growth, not just solve problems.
          </motion.p>
        </div>

        {/* Numbered editorial list */}
        <motion.div className="services__list" variants={containerVariants}>
          {SERVICES.map((service, index) => (
            <motion.div key={service.id} className="service-item" variants={listItemVariants}>
              <span className="service-item__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="service-item__content">
                <h3 className="service-item__title">{service.title}</h3>
                <p className="service-item__description">{service.description}</p>
              </div>
              <div className="service-item__icon" aria-hidden="true">
                {getIconForService(service.id)}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}