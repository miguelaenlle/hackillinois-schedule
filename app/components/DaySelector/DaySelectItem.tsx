import { FC, useContext } from "react";
import { DaySelectItemType } from "../../types/DaySelectItemType";
import { KeyboardEventContext } from "@/app/contexts/KeyboardEventContext";
import { convertNumberToRomanNumeral } from "@/app/utils/convert-number-to-roman-numeral";

interface DaySelectItemProps {
    dayNumber: number;
    isSelected: boolean;
    daySelectItem: DaySelectItemType;
    onClick: () => void;
}

const DaySelectItem: FC<DaySelectItemProps> = (props) => {
    const keyboardEventContext = useContext(KeyboardEventContext);

    return (
        <div
            className={`${props.isSelected ? "bg-black shadow-md" : "bg-zinc-900 shadow-md"} md:mt-0 p-2 md:p-3 flex items-center gap-2 transition-all duration-150 bg-opacity-50 ${keyboardEventContext?.selectedMode === "daySelector" ? "bg-opacity-[35%]" : ""} cursor-pointer rounded-xl`}
            onClick={props.onClick}
        >
            <h4 className="font-bold text-xl">{props.daySelectItem.dayOfWeek}</h4>
            <h4 className="text-lg text-gray-300">{props.daySelectItem.dateShort}</h4>
        </div>
    );
}
export default DaySelectItem