import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * ScrambleText — animates text scrambling letter-by-letter before
 * revealing the final text. Triggers on mount or when `trigger` changes.
 *
 * Usage:
 *   <ScrambleText text="Hello World" trigger={isVisible} />
 */
export default function ScrambleText({
  text,
  trigger = true,
  duration = 800,
  delay = 0,
  className = '',
  tag: Tag = 'span',
}) {
  const [displayed, setDisplayed] = useState(text);
  const animRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    const chars = text.split('');
    const totalFrames = Math.ceil(duration / 16); // ~60fps
    let frame = 0;

    const timer = setTimeout(() => {
      animRef.current = setInterval(() => {
        const progress = frame / totalFrames;
        const resolved = Math.floor(progress * chars.length);

        const scrambled = chars.map((char, i) => {
          if (char === ' ') return ' ';
          if (i < resolved) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('');

        setDisplayed(scrambled);
        frame++;

        if (frame > totalFrames) {
          clearInterval(animRef.current);
          setDisplayed(text);
        }
      }, 16);
    }, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(animRef.current);
    };
  }, [trigger]);

  return <Tag className={className}>{displayed}</Tag>;
}
