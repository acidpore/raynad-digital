import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './FeaturedProject.css'
import { PROJECTS } from '../data/landingData'
import ProjectDetailModal from '../data/ProjectDetailModal'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

/** 3D tilt card — rotates on mouse move */
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0 → 1
    const y = (e.clientY - rect.top) / rect.height;  // 0 → 1
    const rotY = (x - 0.5) * 12;   // -6deg to +6deg
    const rotX = (0.5 - y) * 8;    // -4deg to +4deg
    setTransform(`perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform === '' ? 'none' : 'transform 0.1s ease',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

export default function FeaturedProject() {
  const [selectedProject, setSelectedProject] = useState(null)
  
  const handleLearnMore = (project) => {
    if (project.details) setSelectedProject(project)
  }

  return (
    <motion.section
      className="portfolio"
      id="portfolio"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="portfolio__inner">
        <div className="portfolio__header">
          <motion.p className="portfolio__label" variants={itemVariants}>Our Work</motion.p>
          <motion.h2 className="portfolio__title" variants={itemVariants}>
            Featured Project
          </motion.h2>
        </div>

        <div className="portfolio__grid">
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <TiltCard className="project-card">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} — project by Raynad Digital`} className="project-card__bg project-card__img" loading="lazy" />
                ) : (
                  <div
                    className="project-card__bg project-card__bg--gradient"
                    style={{ background: `linear-gradient(160deg, #001A3D 0%, #000000 100%)` }}
                    aria-hidden="true"
                  >
                    <div className="project-card__deco-grid"></div>
                    <div className="project-card__deco-line"></div>
                  </div>
                )}
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <button
                    type="button"
                    className="project-card__btn"
                    onClick={() => handleLearnMore(project)}
                    disabled={!project.details}
                  >
                    Learn More
                  </button>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div className="portfolio__footer" variants={itemVariants}>
          <p className="portfolio__footer-text">
            All systems are custom-built by Raynad Digital and tailored to your business.{' '}
            <a
              href="https://wa.me/6281387295387?text=Halo%20Raynad%20Digital%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20sistem%20bisnis"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__footer-link"
            >
              Contact us to schedule a live demo →
            </a>
          </p>
        </motion.div>
      </div>
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  )
}
