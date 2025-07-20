import React from "react";
import { Bubbles } from "./Bubbles";

export const BackdropBubbles = () => {
    return <>
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
    </>
}