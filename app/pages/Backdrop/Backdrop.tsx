import { Submarine } from "@/app/components/Backdrop/Submarine";
import { TreasureChest } from "@/app/components/Backdrop/TreasureChest";
import Image from "next/image";
import { FC } from "react";
import BgAtlantis from "@/public/static/images/bg-atlantis.svg";
import Sunrays1 from "@/public/static/images/backdrop/sunrays-1.svg";
import Sunrays2 from "@/public/static/images/backdrop/sunrays-2.svg";
import { Bubbles } from "@/app/components/Backdrop/Bubbles";
import { motion } from 'framer-motion'
import { Fish } from "@/app/components/Backdrop/Fish";

const Backdrop: FC<{}> = () => {
    return (
        <div className="relative w-screen h-screen fixed top-0 left-0 z-10 flex items-center justify-center" style={{ filter: 'blur(4px)' }}>
            <Image
                src={BgAtlantis}
                alt="Atlantis Background"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none transform scale-110"
            />
            
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
                // offset by half a cycle so they never peak together
                delay: 2
                }}
            >
                <Image
                src={Sunrays2}
                alt="Sunrays 2"
                className="w-full h-full object-cover"
                />
            </motion.div>

            <div className="absolute bottom-0 left-0 ml-[-50px] md:ml-0 imgevento-container">
                <Submarine />
            </div>
            <div className="absolute bottom-[150px] right-[5%] w-full flex justify-end pointer-events-none">
                <TreasureChest />
            </div>
            <div className="absolute bottom-[100px] left-[25%] w-full flex justify-center pointer-events-none">
                <Bubbles count={10} />
            </div>
            <div className="absolute bottom-[130px] left-[75%] w-full flex justify-center   pointer-events-none">
                <Bubbles count={10} />
            </div>
            <div className="absolute bottom-[250px] left-[60%] w-full flex justify-center pointer-events-none">
                <Bubbles count={10} />
            </div>

            <div className="absolute bottom-[50%] left-[40%] w-full flex justify-center pointer-events-none">
                <Bubbles count={10} />
            </div>
            <div className="absolute bottom-[50%] left-[80%] w-full flex justify-center pointer-events-none">
                <Bubbles count={10} />
            </div>
            <Fish />
        </div>

    );
}
export default Backdrop