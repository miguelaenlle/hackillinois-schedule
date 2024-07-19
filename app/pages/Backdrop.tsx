import * as React from "react";
import Carousel from "../components/Carousel/Carousel";
import FerrisWheel from "../components/FerrisWheel/FerrisWheel";
import HotAirBalloon from "../components/HotAirBalloon/HotAirBalloon";
import Tent from "../components/Tent/Tent";
const Backdrop: React.FC<{}> = (props) => {
    const stars = Array.from({ length: 100 }, (_, index) => ({
        id: index,
        top: Math.random() * 99,
        left: Math.random() * 99,
        animationDelay: `${Math.random() * 1}s`,
    }));

    return (
        <div className="relative w-screen h-screen overflow-hidden aria-hidden:*">
            <div className="relative w-screen h-screen z-10 blur-[4px] scale-105 md:blur-none md:scale-100 overflow-hidden" style={{
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
                <div className="md:hidden top-0 left-0 flex gap-8 2xl:gap-16 absolute w-full h-full justify-center items-center">
                    <div className="animate-float">
                        <HotAirBalloon />
                    </div>
                    <div className="animate-float" style={{
                        animationDelay: "0.5s"
                    }}>
                        <div className="scale-125">
                            <HotAirBalloon />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex  lex gap-8 2xl:gap-16 absolute top-36 left-8 h-screen">
                    <div className="animate-float">
                        <HotAirBalloon />
                    </div>
                    <div className="animate-float" style={{
                        animationDelay: "0.5s"
                    }}>
                        <div className="scale-125">
                            <HotAirBalloon />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex gap-8 2xl:gap-16 absolute top-48 right-8 h-screen">

                    <div className="animate-float mt-20" style={{
                        animationDelay: "0.5s"
                    }}>
                        <div className="scale-125">
                            <HotAirBalloon />
                        </div>
                    </div>
                    <div className="animate-float mt-12">
                        <HotAirBalloon />
                    </div>
                </div>


                <div className="absolute left-0 w-full overflow-x-hidden bottom-0">
                    <img
                        src="/static/images/bg-mountains.png"
                        className="w-full h-48 md:h-96"
                        aria-hidden="true"
                    />
                </div>
                <div className="hidden md:flex items-end absolute left-0 bottom-1 w-full z-10 gap-5">
                    <Carousel />
                    <div>
                        <Tent />
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex-1"></div>
                    <FerrisWheel />
                </div>

                <div className="flex md:hidden items-end absolute left-0 bottom-1 w-full z-10 gap-5 h-64">
                    <div className="flex items-end scale-50 gap-3 overflow-hidden -translate-x-1/4 translate-y-1/4">
                        <Carousel />
                        <div>
                            <Tent />
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden items-end justify-end absolute right-0 bottom-1 w-full z-10 gap-5 h-64">
                    <div className="scale-50 translate-x-1/4 translate-y-1/4 overflow-visible">
                        <FerrisWheel />
                    </div>
                </div>
                <div className="flex absolute left-0 bottom-0 w-full h-5 md:h-10 z-30" style={{
                    background: "linear-gradient(180deg, rgba(40, 42, 87, 0%) 0%, #282A57 100%)"
                }}>
                </div>

            </div >
        </div>
    );
}
export default Backdrop