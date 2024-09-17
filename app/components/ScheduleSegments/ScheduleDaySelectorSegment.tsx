import { DaySelectItemType } from "@/app/types/DaySelectItemType";
import * as React from "react"
import DaySelector from "../DaySelector/DaySelector";
const ScheduleDaySelectorSegment: React.FC<{
    loading: boolean,
    splashLoading: boolean,
    eventDays: DaySelectItemType[] | undefined,
    selectedDay: number,
    handleSelectDay: (day: number) => void
}> = (props) => {
    return (
        <div className="flex flex-col justify-center md:flex-1 md:max-w-[600px] mt-16 px-3 md:px-0 h-full">
            {props.eventDays && (props.eventDays.length > 0) && !(props.loading || props.splashLoading) && (
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