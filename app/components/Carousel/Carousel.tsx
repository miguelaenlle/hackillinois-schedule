import { FC } from "react";
import CarouselBase from "./CarouselBase";
import Horse from "./Horse";

const Carousel: FC<{}> = () => {
    return (
        <div className="relative" aria-hidden="true">
            <CarouselBase />
            <div className="absolute top-0 pt-36 w-[195px]">
                <div className="flex flex-1 animate-horseBob">
                    <Horse />
                </div>
            </div>

            <div className="absolute top-0 pt-36 flex justify-center w-[195px]">
                <div className="flex justify-center flex-1 animate-horseBob" style={{
                    animationDelay: "0.75s"
                }}>
                    <Horse />
                </div>
            </div>
            <div className="absolute top-0 pt-36 w-[195px]">
                <div className="flex flex-1 animate-horseBob justify-end">
                    <Horse />
                </div>
            </div>
        </div>
    );
}
export default Carousel