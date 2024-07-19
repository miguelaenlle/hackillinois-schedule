import { FC } from "react";
import Slider from "../shared/Slider";

const ScheduleMode: FC<{
    mode: "overview" | "detailed";
    onToggleMode: () => void;
}> = (props) => {
    return (
        <div onClick={props.onToggleMode} className="flex items-center mt-5 gap-3 group hover:cursor-pointer">
            <p
                className={`text-lg ${props.mode === "overview" ? "font-medium" : "text-zinc-300"} transition-all`}
            >
                Overview
            </p>
            <Slider
                isRight={props.mode === "detailed"}
                onClick={props.onToggleMode}
            />
            <p
                className={`text-lg ${props.mode === "detailed" ? "font-medium" : "text-zinc-300"} transition-all`}
            >
                Detailed
            </p>
        </div>
    );
}
export default ScheduleMode