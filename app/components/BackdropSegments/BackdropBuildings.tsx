import * as React from "react"
import FerrisWheel from "../FerrisWheel/FerrisWheel";
import Carousel from "../Carousel/Carousel";
import Tent from "../Tent/Tent";
const BackdropBuildings: React.FC<{}> = (props) => {
    return (
        <>
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
        </>
    );
}
export default BackdropBuildings