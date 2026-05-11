import './OurTeam.css'
import { TEAM_MEMBERS } from '../data/landingData'
import { motion } from 'framer-motion'
import defanPhoto from '../assets/defan-formal.png';
import rayyanPhoto from '../assets/rayyan-photo.jpeg';
import nadirPhoto from '../assets/nadir-photo.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function OurTeam() {
  return (
    <motion.section
      className="team"
      id="team"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="team__inner">

        {/* Header */}
        <div className="team__header">
          <motion.p className="team__label" variants={itemVariants}>The People</motion.p>
          <motion.h2 className="team__title" variants={itemVariants}>Our Team</motion.h2>
        </div>

        <div className="team__grid">
          {TEAM_MEMBERS.map((member) => (
            <motion.div key={member.id} className="team-card" variants={itemVariants}>
              {(() => {
                let photoSrc = null;
                if (member.name.includes('Defan')) photoSrc = defanPhoto;
                else if (member.name.includes('Rayyan')) photoSrc = rayyanPhoto;
                else if (member.name.includes('Nadir')) photoSrc = nadirPhoto;

                return photoSrc ? (
                  <img
                    src={photoSrc}
                    alt={`${member.name} — ${member.role} at Raynad Digital`}
                    className="team-card__photo"
                  />
                ) : (
                  <div
                    className="team-card__photo"
                    style={{ background: `linear-gradient(145deg, ${member.gradientFrom} 0%, ${member.gradientTo} 100%)` }}
                    aria-hidden="true"
                  />
                );
              })()}
              <div className="team-card__info">
                <p className="team-card__name">{member.name}</p>
                <p className="team-card__role">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}
