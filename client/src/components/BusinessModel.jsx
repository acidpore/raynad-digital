import { motion } from 'framer-motion'
import './BusinessModel.css'

const PHASES = [
  {
    id: 1,
    title: 'System Blueprint & Development',
    description: 'We start by mapping your entire business process to design a robust and scalable system architecture tailored to your needs, followed by development.'
  },
  {
    id: 2,
    title: 'Integration & Deployment',
    description: 'Our team integrates the new system with your existing tools, ensuring a seamless data flow. We manage the full deployment process for a smooth transition.'
  },
  {
    id: 3,
    title: 'Optimization & Strategic Advisory',
    description: 'Post-launch, we continuously monitor system performance, providing data-driven insights and strategic advice to drive further growth and efficiency.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const phaseVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function BusinessModel() {
  return (
    <motion.section
      className="business-model"
      id="business-model"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="business-model__inner">

        {/* Header */}
        <div className="business-model__header">
          <motion.p className="business-model__label" variants={itemVariants}>How We Work</motion.p>
          <motion.h2 className="business-model__title" variants={itemVariants}>Our Business Model</motion.h2>
          <motion.p className="business-model__subtitle" variants={itemVariants}>
            We operate as a strategic partner through three core phases, ensuring our goals are always aligned with yours: business growth.
          </motion.p>
        </div>

        {/* Vertical timeline */}
        <div className="business-model__phases">
          {PHASES.map((phase) => (
            <motion.div key={phase.id} className="phase-card" variants={phaseVariants}>
              <span className="phase-card__number">0{phase.id}</span>
              <h3 className="phase-card__title">{phase.title}</h3>
              <p className="phase-card__description">{phase.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}