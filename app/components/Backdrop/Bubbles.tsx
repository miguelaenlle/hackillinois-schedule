import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface BubbleProps {
    left: number;
}

/** A single bubble, which rises 200 pixels plus some variation for 4 seconds plus some variation. */
export const Bubble: React.FC<BubbleProps> = ({ left }) => {
  const delay = useMemo(() => Math.random() * 3, []); // In seconds
  const duration = useMemo(() => 4 + Math.random() * 2, []); // In seconds
  const rise = useMemo(() => 200 + Math.random() * 50, []); // In pixels
  const size = useMemo(() => 12 + Math.random() * 3, []);  // In pixels

  return (
    <motion.div
      className={`absolute bottom-0 rounded-full bg-white bg-opacity-30`}
      style={{ width: size, height: size, left: `${left}px` }}
      initial={{ y: 0,     opacity: 0 }}
      animate={{ 
        y: -rise,
        opacity: [0, 0.5, 0]
      }}
      transition={{
        delay,
        duration,
        ease: 'easeInOut',
        times: [0, 0.5, 1], 
        repeat: Infinity,
      }}
    />
  );
};

interface BubblesProps {
  count: number;
}

/** A collection of bubbles which rise side by side. */
export const Bubbles: React.FC<BubblesProps> = ({ count }) => (
  <div className="relative w-full h-screen overflow-hidden">
    {Array.from({ length: count }).map((_, i) => (
      <Bubble key={i} left={i * 5}/>
    ))}
  </div>
);