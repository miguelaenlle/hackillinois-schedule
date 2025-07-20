import Image from "next/image";
import React from "react";
import TreasureChestSvg from "@/public/static/images/backdrop/treasure-chest.svg";
import TreasureChestGlowSvg from "@/public/static/images/backdrop/treasure-chest-glow.svg";
import { Bubble, Bubbles } from "./Bubbles";

export const TreasureChest: React.FC = () => {
    return (
        <div className="relative w-[200px] h-fit-content md:scale-[1.5] rotate-[-3deg] md:mb-[60px]">
            <Image
                src={TreasureChestSvg}
                alt="Treasure Chest"
                className="absolute left-0 w-[200px]"
            />
            <div className="absolute top-[-70px] left-[6px] flex flex-col items-center">
                <Image
                    src={TreasureChestGlowSvg}
                    alt="Treasure Chest Glow"
                    className="w-[180px] animate-pulse"
                />
                <Bubbles count={5} />
            </div>
        </div>
    );
}