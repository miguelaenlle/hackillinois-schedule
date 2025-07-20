import React, { FC } from 'react';
import Image from 'next/image';
import FishSvg from "@/public/static/images/backdrop/fish.svg";
import { motion } from 'framer-motion';

/** Fish that swim across the screen in the backdrop. */
export const Fish: React.FC = () => {
    return (
        <motion.div
            className="absolute top-10 left-0"
            // We also scale the fish to create a depth effect
            initial={{ x: '-50vw', scale: 1 }}
            animate={{ x: '100vw', scale: 0.2 }}
            transition={{
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 24, 
                    ease: 'linear',
                },
                scale: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 24,
                    ease: 'easeInOut',
                }
            }}
            >
            <Image
                src={FishSvg}
                alt="Fish"
                className="pointer-events-none"
            />
        </motion.div>
    )
}