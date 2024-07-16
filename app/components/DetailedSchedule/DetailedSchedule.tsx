import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import { FC } from "react";
import DetailedScheduleItem from "./DetailedScheduleItem";

const DetailedSchedule: FC<{
    events: EventTypeWithMomentDates[]
}> = (props) => {
    return (
        <div className="w-full mt-6">
            {props.events.map((event, index) => (
                <DetailedScheduleItem
                    key={`detailed-schedule-item-${index}`}
                    event={event}
                />
            ))}
        </div>
    );
}
export default DetailedSchedule