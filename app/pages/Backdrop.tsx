import * as React from "react"
import HotAirBalloon from "../components/HotAirBalloon/HotAirBalloon";
import Tent from "../components/Tent/Tent";
import Carousel from "../components/Carousel/Carousel";
import FerrisWheel from "../components/FerrisWheel/FerrisWheel";
import RollerCoaster from "../components/RollerCoaster/RollerCoaster";
const Backdrop: React.FC<{}> = (props) => {

    const stars = Array.from({ length: 100 }, (_, index) => ({
        id: index,
        top: Math.random() * 99,
        left: Math.random() * 99,
        animationDelay: `${Math.random() * 1}s`,
    }));

    return (
        <div className="relative w-screen h-screen z-10" style={{
            backgroundImage: "linear-gradient(180deg, #172B96 0%, #5B3980 15%, #9E476B 35%, #C6B751 100%)"
        }} >
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animationDelay: star.animationDelay,
                    }}
                ></div>
            ))}
            <div className="absolute top-0 l-0 h-screen w-1/3 ml-5 pt-36">
                <div className="animate-float flex flex-col align-center h-full">
                    <HotAirBalloon />
                </div>
            </div>
            <div className="absolute top-0 l-0 h-screen w-1/3 ml-48 pt-40">
                <div className=" flex flex-col align-center h-full scale-125 animate-float" style={{
                    animationDelay: "0.5s"
                }}>
                    <div className="scale-125">
                        <HotAirBalloon />
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 h-screen mr-5 pb-52 hidden md:block">
                <div className="animate-float flex flex-col justify-center align-center h-full">
                    <HotAirBalloon />
                </div>
            </div>
            <div className="absolute top-0 right-0 h-screen mr-48 pb-48 hidden md:block">
                <div className=" flex flex-col justify-center align-center h-full scale-125 animate-float" style={{
                    animationDelay: "0.25s"
                }}>
                    <div className="scale-125">
                        <HotAirBalloon />
                    </div>
                </div>
            </div>

            <div className="absolute left-0 w-full overflow-x-hidden bottom-0">
                <img src="/static/images/bg-mountains.png" className="w-full min-w-[700px] h-96 md:h-96" />
            </div>
            <div className="flex items-end absolute left-0 bottom-1 w-full z-10 gap-5">
                <Carousel />
                <div>
                    <Tent />
                </div>
                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <FerrisWheel />
            </div>
            <div className="flex absolute left-0 bottom-0 w-full h-10 z-30" style={{
                background: "linear-gradient(180deg, rgba(40, 42, 87, 0%) 0%, #282A57 100%)"
            }}>
            </div>

        </div >
    );
}
export default Backdrop