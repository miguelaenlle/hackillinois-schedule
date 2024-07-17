import * as React from "react"
import { DaySelectItemType } from "./DaySelectItems";
const DaySelectItem: React.FC<{
    isSelected: boolean;
    daySelectItem: DaySelectItemType;
    onClick: () => void;
}> = (props) => {
    return (
        <div
            className={`${props.isSelected ? "bg-white shadow-md" : ""} p-3 transition-all duration-150 bg-opacity-25 cursor-pointer rounded-lg`}
            onClick={props.onClick}
        >
            <p className="font-bold text-xl">{props.daySelectItem.dayOfWeek}</p>
            <p className="text-md">{props.daySelectItem.fullDate}</p>
        </div>
    );
}
export default DaySelectItem