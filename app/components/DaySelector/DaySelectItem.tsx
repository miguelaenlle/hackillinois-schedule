import { FC } from "react";
import { DaySelectItemType } from "../../types/DaySelectItemType";

interface DaySelectItemProps {
    dayNumber: number;
    isSelected: boolean;
    daySelectItem: DaySelectItemType;
    onClick: () => void;
}

const DaySelectItem: FC<DaySelectItemProps> = (props) => {
    return (
        <div
            className={`${props.isSelected ? "bg-black shadow-md bg-opacity-80" : "bg-zinc-900 shadow-md"} md:mt-0 p-4 flex items-center gap-2 transition-all duration-150 bg-opacity-50 cursor-pointer rounded-xl`}
            onClick={props.onClick}
        >
            <h4 className="font-bold text-xl">{props.daySelectItem.dayOfWeek}</h4>
            <h4 className="text-lg text-gray-300">{props.daySelectItem.dateShort}</h4>
        </div>
    );
}
export default DaySelectItem