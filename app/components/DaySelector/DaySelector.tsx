import { FC } from "react";
import { DaySelectItemType } from "./DaySelectItems";
import DaySelectItem from "./DaySelectItem";

const DaySelector: FC<{
    selectedDay: number;
    daySelectItems: DaySelectItemType[];
    onClickDay: (day: number) => void;
}> = (props) => {
    return (
        <div className="flex flex-col gap-1 bg-zinc-900 backdrop-blur-lg bg-opacity-25 p-3 rounded-2xl shadow-md">
            {props.daySelectItems.map((daySelectItem, index) => (
                <DaySelectItem
                    key={`day-select-item-${index}`}
                    isSelected={props.selectedDay === index}
                    daySelectItem={daySelectItem}
                    onClick={() => {
                        props.onClickDay(index);
                    }}
                />
            ))}
        </div>
    );
}
export default DaySelector