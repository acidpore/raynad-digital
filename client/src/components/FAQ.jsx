import { useState } from 'react';
import { motion } from 'framer-motion';
import './FAQ.css';

const FAQ_DATA = [
  {
    question: 'How long does it take to build a custom system?',
    answer: 'Depending on the complexity, it typically takes between 4 to 12 weeks from the blueprint stage to deployment.',
  },
  {
    question: 'Can this system be integrated with my existing software?',
    answer: 'Yes, system integration is our specialty. We will ensure your new ecosystem connects seamlessly with your existing tools.',
  },
  {
    question: 'Does Raynad Digital provide maintenance after the system is completed?',
    answer: 'Of course. We provide ongoing support and periodic system optimization to ensure your business continues to run smoothly.',
  },
  {
    question: "What industries can use Raynad Digital's services?",
    answer: 'We have experience in the F&B, Retail, Automotive, and various MSME sectors looking to undergo digital transformation.',
  },
  {
    question: 'What about the security of my business data?',
    answer: 'Security is our top priority. We use secure cloud infrastructure and industry-standard encryption to protect all your transaction data.',
  },
];

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button className="faq-item__question" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <div className="faq-item__icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </button>
      <div className="faq-item__answer-wrapper">
        <div className="faq-item__answer">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const faqItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function FAQ() {
  return (
    <motion.section
      className="faq"
      id="faq"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="faq__inner">

        {/* Header */}
        <div className="faq__header">
          <motion.p className="faq__label" variants={itemVariants}>Questions</motion.p>
          <motion.h2 className="faq__title" variants={itemVariants}>Frequently Asked Questions</motion.h2>
          <motion.p className="faq__subtitle" variants={itemVariants}>
            Everything you need to know about our process and systems.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="faq__accordion">
          {FAQ_DATA.map((item, index) => (
            <motion.div key={index} variants={faqItemVariants}>
              <FAQItem item={item} />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}