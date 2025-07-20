import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import SubmarineSvg from '@/public/static/images/backdrop/submarine.svg';

export const Submarine = () => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], x: [-5, 0, -5] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className="imgevento"
    >
      <Image  
        src={SubmarineSvg}
        alt="Submarine"
        className="w-[40vw] min-w-[400px] max-w-[700px] pointer-events-none"
      />
    </motion.div>
  );
};
