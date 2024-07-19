import * as React from "react"
import HotAirBalloon from "../HotAirBalloon/HotAirBalloon";
const Backdrop: React.FC<{}> = (props) => {
    return (
        <>
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
            <div className="hidden md:flex gap-8 2xl:gap-16 absolute top-36 left-8 h-screen">
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
            <div className="hidden xl:flex gap-5 2xl:gap-16 absolute top-36 right-8 h-screen">

                <div className="animate-float mt-4">
                    <div className="scale-125">
                        <HotAirBalloon />
                    </div>
                </div>

                <div className="animate-float mt-10" style={{
                    animationDelay: "0.5s"
                }}>
                    <HotAirBalloon />
                </div>
            </div>
        </>
    );
}
export default Backdrop