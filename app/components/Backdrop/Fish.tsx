import React, { FC } from 'react';
import Image from 'next/image';
import FishSvg from "@/public/static/images/backdrop/fish.svg";
import { motion } from 'framer-motion';

export const Fish: React.FC = () => {
    return (
        <motion.div
            className="absolute top-10 left-0"
            // start fully off-screen to the left
            initial={{ x: '-50vw', scale: 1 }}
            animate={{ x: '100vw', scale: 0.2 }}
            transition={{
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',    // jump back to start each time
                    duration: 24,           // 24 seconds per swim
                    ease: 'linear',        // constant speed
                },
                scale: {
                    repeat: Infinity,
                    repeatType: 'loop', // scale up and down
                    duration: 24,            // 2 seconds per scale
                    ease: 'easeInOut',      // smooth scaling
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