import BackdropBottomBlur from "@/app/components/BackdropSegments/BackdropBottomBlur";
import BackdropBuildings from "@/app/components/BackdropSegments/BackdropBuildings";
import BackdropMountain from "@/app/components/BackdropSegments/BackdropMountain";
import BackdropStars from "@/app/components/BackdropSegments/BackdropStars";
import BackdropHotAirBalloons from "@/app/components/BackdropSegments/BackdropHotAirBalloons";
import { FC } from "react";
const Backdrop: FC<{}> = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden aria-hidden:*">
            {/* <div className="relative w-screen h-screen z-10 blur-[2px] scale-105 md:blur-none md:scale-100 overflow-hidden" style={{
                backgroundImage: "linear-gradient(180deg, #172B96 0%, #5B3980 15%, #9E476B 35%, #C6B751 100%)"
            }} >
                <BackdropStars />
                <BackdropHotAirBalloons />
                <BackdropMountain />
                <BackdropBuildings />
                <BackdropBottomBlur />
            </div > */}
        </div>
    );
}
export default Backdrop