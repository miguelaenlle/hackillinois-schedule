import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface BubbleProps {
    left: number;
}

export const Bubble: React.FC<BubbleProps> = ({ left }) => {
  // randomize on mount
  const delay = useMemo(() => Math.random() * 3, []);
  const duration = useMemo(() => 4 + Math.random() * 2, []);
  const rise = useMemo(() => 200 + Math.random() * 50, []); // px
  const size = useMemo(() => 12 + Math.random() * 3, []);  // px

  return (
    <motion.div
      className={`absolute bottom-0 rounded-full bg-white bg-opacity-30`}
      style={{ width: size, height: size, left: `${left}px` }}
      initial={{ y: 0,     opacity: 0 }}
      animate={{ 
        y: -rise,             // move up
        opacity: [0, 0.5, 0]    // fade in → visible at mid → fade out
      }}
      transition={{
        delay,
        duration,
        ease: 'easeInOut',
        times: [0, 0.5, 1],   // 0% opacity at start, 50% at midpoint, 100% at end
        repeat: Infinity,        // loop forever
      }}
    />
  );
};

interface BubblesProps {
  count: number;
}

export const Bubbles: React.FC<BubblesProps> = ({ count }) => (
  <div className="relative w-full h-screen overflow-hidden">
    {Array.from({ length: count }).map((_, i) => (
      <Bubble key={i} left={i * 5}/>
    ))}
  </div>
);