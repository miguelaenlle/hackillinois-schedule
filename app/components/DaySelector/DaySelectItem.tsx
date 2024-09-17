import { FC, useContext } from "react";
import { DaySelectItemType } from "../../types/DaySelectItemType";
import { KeyboardEventContext } from "@/app/contexts/KeyboardEventContext";

const DaySelectItem: FC<{
    isSelected: boolean;
    daySelectItem: DaySelectItemType;
    onClick: () => void;
}> = (props) => {
    const keyboardEventContext = useContext(KeyboardEventContext);

    return (
        <div
            className={`${props.isSelected ? "bg-white shadow-md" : ""} md:mt-0 p-2 md:p-3 flex-1 md:flex-none transition-all duration-150 bg-opacity-25 ${keyboardEventContext?.selectedMode === "daySelector" ? "bg-opacity-[35%]" : ""} cursor-pointer rounded-lg`}
            onClick={props.onClick}
        >
            <h4 className="font-bold text-xl">{props.daySelectItem.dayOfWeek}</h4>
            <p className="text-sm lg:hidden">{props.daySelectItem.dateShort}</p>
            <p className="hidden lg:block text-md font-mono text-zinc-100">{props.daySelectItem.fullDate}</p>
        </div>
    );
}
export default DaySelectItem