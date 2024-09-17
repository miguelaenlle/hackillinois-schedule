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
            <p className="font-mono text-cyan-400 mb-2 block md:hidden text-sm">SELECT TIME TO JUMP TO:</p>
            <motion.div
                className="flex flex-row md:flex-col gap-1 sm:gap-5 md:gap-1 bg-zinc-700 bg-opacity-50 md:p-3 rounded-lg md:rounded-2xl md:shadow-md"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <>
                    <p className="font-mono text-cyan-400 hidden md:block text-sm">SELECT TIME TO JUMP TO:</p>
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
                </>
            </motion.div>
        </>
    );
}
export default DaySelector