import * as React from "react"
const Slider: React.FC<{
    isRight: boolean;
    onClick: () => void;
}> = (props) => {
    return (
        <div className={`flex items-center bg-zinc-700 rounded-full px-[2px] py-[2px] h-fit ${props.isRight ? "pl-5 " : "pr-5"} transition-all`}>
            <div className="bg-zinc-100 group-hover:bg-zinc-300 transition-all rounded-full w-5 h-5"></div>
        </div>
    );
}
export default Slider