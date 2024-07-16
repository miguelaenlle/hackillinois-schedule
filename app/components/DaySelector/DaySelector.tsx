import { FC } from "react";
import { DAY_SELECT_ITEMS, DaySelectItemType } from "./DaySelectItems";
import DaySelectItem from "./DaySelectItem";

const DaySelector: FC<{
    selectedDay: number;
    daySelectItems: DaySelectItemType[];
    onClickDay: (day: number) => void;
}> = (props) => {
    return (
        <div className="flex gap-5">
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