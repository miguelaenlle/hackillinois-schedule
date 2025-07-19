import { FC } from "react";
import { DaySelectItemType } from "../../types/DaySelectItemType";
import DaySelectItem from "./DaySelectItem";
import { motion } from 'framer-motion';

const DaySelector: FC<{
    selectedDay: number;
    daySelectItems: DaySelectItemType[];
    onClickDay: (day: number) => void;
}> = (props) => {
    return (
        <>
            <motion.div
                className="flex flex-row gap-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <>
                    {props.daySelectItems.map((daySelectItem, index) => (
                        <DaySelectItem
                            key={`day-select-item-${index}`}
                            dayNumber={index + 1}
                            isSelected={props.selectedDay === index}
                            daySelectItem={daySelectItem}
                            onClick={() => {
                                props.onClickDay(index);
                            }}
                        />
                    ))}
                </>
            </motion.div>
        </>
    );
}
export default DaySelector