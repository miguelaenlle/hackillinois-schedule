import * as React from "react"
import { DaySelectItemType } from "./DaySelectItems";
const DaySelectItem: React.FC<{
    isSelected: boolean;
    daySelectItem: DaySelectItemType;
    onClick: () => void;
}> = (props) => {
    return (
        <div
            className={`${props.isSelected ? "bg-black" : ""} transition-all duration-150 backdrop-blur-md bg-opacity-75 rounded-lg p-3 cursor-pointer`}
            onClick={props.onClick}
        >
            <p className="font-bold text-xl">{props.daySelectItem.name}</p>
            <p className="text-lg">{props.daySelectItem.dateString}</p>
        </div>
    );
}
export default DaySelectItem