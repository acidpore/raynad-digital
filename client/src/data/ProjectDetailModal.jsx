import { useEffect, useState } from 'react';
import './ProjectDetailModal.css';

// Simple inline SVG icons for demonstration
const ICONS = {
  identity: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  ),
  tracking: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
  ),
  intelligence: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8a2.3 2.3 0 0 0-3.4 0l-4.6 4.6a2.3 2.3 0 0 0 0 3.4l2.3 2.3a2.3 2.3 0 0 0 3.4 0l4.6-4.6a2.3 2.3 0 0 0 0-3.4Z"></path></svg>
  ),
  whatsapp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
  ),
  pos: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
  ),
  inventory: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
  ),
  crm: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  ),
  analytics: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
  ),
  queue: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
  ),
  history: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 13 4.05"></path><path d="M12 8v4l2 2"></path></svg>
  ),
};

export default function ProjectDetailModal({ project, onClose }) {
  const [lightboxItem, setLightboxItem] = useState(null);

  // Effect to handle 'Escape' key press to close the modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (lightboxItem) {
          setLightboxItem(null); // Close lightbox first
        } else {
          onClose(); // Then close modal
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, lightboxItem]);

  if (!project || !project.details) return null;

  const { title, details } = project;
  const { concept, leadDeveloper, features, strategicImpact, gallery } = details;

  // Assign icons to features
  const featuresWithIcons = features.map((feature) => {
    const title = feature.title.toLowerCase();
    if (title.includes('whatsapp')) return { ...feature, icon: ICONS.whatsapp };
    if (title.includes('identity')) return { ...feature, icon: ICONS.identity };
    if (title.includes('tracking')) return { ...feature, icon: ICONS.tracking };
    if (title.includes('intelligence')) return { ...feature, icon: ICONS.intelligence };
    if (title.includes('pos')) return { ...feature, icon: ICONS.pos };
    if (title.includes('inventory')) return { ...feature, icon: ICONS.inventory };
    if (title.includes('crm')) return { ...feature, icon: ICONS.crm };
    if (title.includes('analytics') || title.includes('dashboard')) return { ...feature, icon: ICONS.analytics };
    if (title.includes('queue')) return { ...feature, icon: ICONS.queue };
    if (title.includes('history')) return { ...feature, icon: ICONS.history };
    return feature;
  });

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close project details">
          &times;
        </button>
        
        <header className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-concept">{concept}</p>
        </header>

        <div className="modal-body">
          <h3 className="modal-section-title">Key Features</h3>
          <ul className="modal-features-list">
            {featuresWithIcons.map((feature) => (
              <li key={feature.title} className={`feature-item ${feature.isHighlighted ? 'is-highlighted' : ''}`}>
                <div className="feature-item__icon">{feature.icon}</div>
                <div className="feature-item__text">
                  <h4 className="feature-item__title">{feature.title}</h4>
                  <p className="feature-item__description">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {gallery && gallery.length > 0 && (
            <div className="modal-gallery">
              <h3 className="modal-section-title">Gallery</h3>
              <div className="gallery-grid">
                {gallery.map((item) => (
                  <div key={item.id} className="gallery-item" onClick={() => setLightboxItem(item)}>
                    {item.src ? (
                      <img src={item.src} alt={item.caption} className="gallery-img" />
                    ) : (
                      <div className="gallery-placeholder">{item.placeholder}</div>
                    )}
                    <p className="gallery-caption">{item.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <h3 className="modal-section-title">Strategic Impact</h3>
          <p className="modal-impact">{strategicImpact}</p>

          {leadDeveloper && (
            <div className="modal-lead-developer">
              <span className="modal-lead-developer__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </span>
              <span className="modal-lead-developer__label">Lead Developer</span>
              <span className="modal-lead-developer__name">{leadDeveloper}</span>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Implementation */}
      {lightboxItem && (
        <div className="lightbox-overlay" onClick={() => setLightboxItem(null)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxItem(null)} aria-label="Close image viewer">
            &times;
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {lightboxItem.src ? (
              <img src={lightboxItem.src} alt={lightboxItem.caption} className="lightbox-img" />
            ) : (
              <div className="lightbox-placeholder">{lightboxItem.placeholder}</div>
            )}
            <p className="lightbox-caption">{lightboxItem.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}