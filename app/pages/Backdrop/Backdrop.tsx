import { Submarine } from "@/app/components/Backdrop/Submarine";
import { TreasureChest } from "@/app/components/Backdrop/TreasureChest";
import Image from "next/image";
import { FC } from "react";
import BgAtlantis from "@/public/static/images/bg-atlantis.svg";
import { Bubbles } from "@/app/components/Backdrop/Bubbles";

const Backdrop: FC<{}> = () => {
    return (
        <div className="relative w-screen h-screen fixed top-0 left-0 z-10 flex items-center justify-center"> 
        {/* style={{ filter: 'blur(4px)' }}> */}
            <Image
                src={BgAtlantis}
                alt="Atlantis Background"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0">
                <Submarine />
            </div>
            <div className="absolute bottom-[150px] left-0 w-full flex justify-center">
                <TreasureChest />
            </div>
            <div className="absolute bottom-[100px] left-[25%] w-full flex justify-center">
                <Bubbles count={10} />
            </div>
            <div className="absolute bottom-[130px] left-[75%] w-full flex justify-center">
                <Bubbles count={10} />
            </div>
            <div className="absolute bottom-[250px] left-[60%] w-full flex justify-center">
                <Bubbles count={10} />
            </div>

            <div className="absolute bottom-[50%] left-[40%] w-full flex justify-center">
                <Bubbles count={10} />
            </div>
            <div className="absolute bottom-[50%] left-[80%] w-full flex justify-center">
                <Bubbles count={10} />
            </div>
            
        </div>

    );
}
export default Backdrop