import { FC } from "react";
import { DaySelectItemType } from "./DaySelectItems";
import DaySelectItem from "./DaySelectItem";
import { motion } from 'framer-motion';

const DaySelector: FC<{
    selectedDay: number;
    daySelectItems: DaySelectItemType[];
    onClickDay: (day: number) => void;
}> = (props) => {
    return (
        <motion.div
            className="flex flex-col gap-1 bg-zinc-900 backdrop-blur-lg bg-opacity-25 p-3 rounded-2xl shadow-md"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
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
        </motion.div>
    );
}
export default DaySelector