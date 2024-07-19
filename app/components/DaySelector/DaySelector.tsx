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
            className="flex flex-row md:flex-col gap-1 sm:gap-5 md:gap-1 md:bg-zinc-900 md:bg-opacity-50 xl:bg-opacity-25 md:p-3 rounded-lg md:rounded-2xl md:shadow-md"
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