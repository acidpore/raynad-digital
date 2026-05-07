import { motion } from 'framer-motion';
import './Links.css';

const linksData = [
  { id: 1, title: 'Official Website', url: '/' },
  { id: 2, title: 'Our Portfolio', url: '/#portfolio' },
  { id: 3, title: 'WhatsApp Consultation', url: 'https://wa.me/6281234567890?text=Hi%20Raynad%20Digital,%20I%20want%20to%20consult%20about%20my%20business%20system.' },
  { id: 4, title: 'LinkedIn', url: 'https://linkedin.com/company/raynad-digital' },
  { id: 5, title: 'Instagram', url: 'https://instagram.com/raynaddigital' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function Links() {
  return (
    <main className="links-page">
      <motion.div 
        className="links__inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="links__profile" variants={itemVariants}>
          <img src="/logoraynad.png" alt="Raynad Logo" className="links__logo" />
          <h1 className="links__name">Raynad Digital</h1>
          <p className="links__tagline">DIGITAL SYSTEMS ARCHITECT</p>
        </motion.div>

        <div className="links__container">
          {linksData.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className="links__btn"
              variants={itemVariants}
            >
              {link.title}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  );
}