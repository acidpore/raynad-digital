import { motion } from 'framer-motion'
import './AboutUs.css'
import getfunImage from '../assets/proyek-getfun.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] } 
  }
};

export default function AboutUs() {
  return (
    <section className="about" id="about">
      <div className="about__glow" aria-hidden="true"></div>
      <div className="about__inner">

        <div className="about__content">
          <motion.div 
            className="about__text-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.p className="about__label" variants={itemVariants}>Who We Are</motion.p>
            <motion.h2 className="about__title" variants={itemVariants}>About Us</motion.h2>
            <motion.div className="about__body" variants={itemVariants}>
              <p className="about__lead-text">
                Raynad Digital is a business transformation partner that believes a company's success is defined by the strength of its internal systems. We don't just implement tools; we architect growth-ready business structures designed for long-term scalability.
              </p>
              <p>
                Led by founders Nadir Alatas and Rayyan Faris, along with Muhammad Defan, we serve as a dedicated partner focused on making your business scalable, data-driven, and future-ready.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about__image-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariants}
          >
            <img 
              src={getfunImage} 
              alt="Proyek Getfun by Raynad Digital" 
              className="about__image-placeholder" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
