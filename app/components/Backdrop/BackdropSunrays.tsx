import React from "react";

import { motion } from 'framer-motion'

import Sunrays1 from "@/public/static/images/backdrop/sunrays-1.svg";
import Sunrays2 from "@/public/static/images/backdrop/sunrays-2.svg";
import Image from "next/image";

export const BackdropSunrays = () => {
    return <>
        <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <Image
                src={Sunrays1}
                alt="Sunrays 1"
                className="w-full h-full object-cover"
            />
        </motion.div>

        <motion.div
            className="absolute top-0 left-10 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2
            }}
        >
            <Image
                src={Sunrays2}
                alt="Sunrays 2"
                className="w-full h-full object-cover"
            />
        </motion.div>
    </>

}