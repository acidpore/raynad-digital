import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.1 });

  // Ring follows with lag — the "cinematic" trail
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.5 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const checkPointer = () => {
      const el = document.elementFromPoint(mouseX.get(), mouseY.get());
      if (!el) return;
      const computed = window.getComputedStyle(el).cursor;
      setIsPointer(computed === 'pointer');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousemove', checkPointer);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousemove', checkPointer);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
          scale: isPointer ? 1.6 : isClicking ? 0.85 : 1,
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
      {/* Center dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
          scale: isPointer ? 0 : isClicking ? 1.5 : 1,
        }}
        transition={{ scale: { duration: 0.15 } }}
      />
    </>
  );
}
