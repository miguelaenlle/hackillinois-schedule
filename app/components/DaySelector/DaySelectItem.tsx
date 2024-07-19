import * as React from "react"
import { DaySelectItemType } from "./DaySelectItems";
import { KeyboardEventContext } from "@/app/context/KeyboardEventContext";
const DaySelectItem: React.FC<{
    isSelected: boolean;
    daySelectItem: DaySelectItemType;
    onClick: () => void;
}> = (props) => {

    const keyboardEventContext = React.useContext(KeyboardEventContext);

    return (
        <div
            className={`${props.isSelected ? "bg-white shadow-md" : ""} p-2 md:p-3 flex-1 md:flex-none transition-all duration-150 bg-opacity-25 ${keyboardEventContext?.selectedMode === "daySelector" ? "bg-opacity-50" : ""} cursor-pointer rounded-lg`}
            onClick={props.onClick}
        >
            <p className="font-bold text-xl">{props.daySelectItem.dayOfWeek}</p>
            <p className="text-sm lg:hidden">{props.daySelectItem.dateShort}</p>
            <p className="hidden lg:block text-md">{props.daySelectItem.fullDate}</p>
        </div>
    );
}
export default DaySelectItem