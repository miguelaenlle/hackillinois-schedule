import { DaySelectItemType } from "@/app/types/DaySelectItemType";
import * as React from "react"
import DaySelector from "../DaySelector/DaySelector";
const ScheduleDaySelectorSegment: React.FC<{
    loading: boolean,
    eventDays: DaySelectItemType[] | undefined,
    selectedDay: number,
    handleSelectDay: (day: number) => void
}> = (props) => {
    return (
        <div className={`flex flex-row mt-20 w-full overflow-x-auto px-3 h-[60px] min-h-[60px]`}>
            {props.eventDays && (props.eventDays.length > 0) && !(props.loading) && (
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