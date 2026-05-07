import { useRef, useState, useCallback } from 'react';

/**
 * MagneticWrapper - wraps a child element and applies a magnetic pull
 * towards the cursor when hovering. strength controls pull intensity.
 */
export default function MagneticWrapper({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
}
