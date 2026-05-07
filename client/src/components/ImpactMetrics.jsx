import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ImpactMetrics.css';
import ScrambleText from './ScrambleText';
import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

const METRICS = [
  { 
    value: 15, 
    suffix: '+', 
    label: 'Systems Architected',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 17l10-10 10 10"/><path d="M2 7l10 10 10-10"/></svg>
  },
  { 
    value: 100, 
    suffix: '%', 
    label: 'Data Accuracy',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
  },
  { 
    value: 50, 
    suffix: '%', 
    label: 'Operational Efficiency Boost',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10.5 13.5 21 3"/><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/></svg>
  }
];

const CountUpNumber = ({ end, duration = 2, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      const controls = animate(0, end, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toString() + suffix;
        },
        onComplete() {
          node.textContent = end.toString() + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, end, duration, suffix]);

  return (
    <span ref={ref} className="metric-item__number">
      0{suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function ImpactMetrics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className="impact-metrics"
      id="impact-metrics"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
    >
      <div className="impact-metrics__inner">
        <motion.div className="impact-metrics__header" variants={itemVariants}>
          <p className="impact-metrics__header-label">Our Impact</p>
          <h2 className="impact-metrics__title">
            <ScrambleText
              text="Delivering Measurable Value to Your Business"
              trigger={isInView}
              duration={1000}
              delay={200}
            />
          </h2>
          <p className="impact-metrics__description">
            Our solutions are designed to generate tangible results, driving efficiency and growth for our clients.
          </p>
        </motion.div>
        <div className="impact-metrics__strip">
          {METRICS.map((metric, index) => (
            <motion.div key={index} className="metric-item" variants={itemVariants}>
              <CountUpNumber end={metric.value} suffix={metric.suffix} />
              <p className="metric-item__label">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}