import { DaySelectItemType } from "@/app/types/DaySelectItemType";
import * as React from "react"
import DaySelector from "../DaySelector/DaySelector";
const ScheduleDaySelectorSegment: React.FC<{
    eventDays: DaySelectItemType[] | undefined,
    selectedDay: number,
    handleSelectDay: (day: number) => void
}> = (props) => {
    return (
        <div className="flex flex-col justify-center md:flex-1 md:max-w-[600px] mt-16 px-3 md:px-0">
            {props.eventDays && (props.eventDays.length > 0) && (
                <DaySelector
                    selectedDay={props.selectedDay}
                    daySelectItems={props.eventDays}
                    onClickDay={props.handleSelectDay}
                />
            )}
        </div>
    );
}
export default ScheduleDaySelectorSegment