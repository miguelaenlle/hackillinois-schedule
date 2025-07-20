import { BackdropSunrays } from "@/app/components/Backdrop/BackdropSunrays";
import { Fish } from "@/app/components/Backdrop/Fish";
import { Submarine } from "@/app/components/Backdrop/Submarine";
import { TreasureChest } from "@/app/components/Backdrop/TreasureChest";
import BgAtlantis from "@/public/static/images/backdrop/bg-atlantis.svg";
import Image from "next/image";
import { FC } from "react";


const Backdrop: FC<{}> = () => {
    return (
        <div className="relative w-screen h-[100dvh] fixed top-0 left-0 z-10 flex items-center justify-center" style={{ filter: 'blur(4px)' }}>
            <Image
                src={BgAtlantis}
                alt="Atlantis Background"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none transform scale-110"
            />
        
            <BackdropSunrays />
            <div className="absolute bottom-0 left-0 ml-[-50px] md:ml-0 imgevento-container">
                <Submarine />
            </div>
            <div className="absolute bottom-[150px] right-[-20%] md:right-[5%] w-full flex justify-end pointer-events-none">
                <TreasureChest />
            </div>
            <BackdropSunrays />
            <Fish />
        </div>

    );
}
export default Backdrop