import { DaySelectItemType } from "@/app/types/DaySelectItemType";
import { EventTypeWithMomentDates } from "@/app/types/EventType";
import * as React from "react";
import DetailedSchedule from "../DetailedSchedule/DetailedSchedule/DetailedSchedule";
import AlertBox from "../shared/AlertBox";
const ScheduleInformationSegment: React.FC<{
    loading: boolean;
    error: string | undefined;
    selectedDay: number;
    selectedEvent: EventTypeWithMomentDates | undefined;
    displayedEvents: EventTypeWithMomentDates[];
    eventDays: DaySelectItemType[] | undefined;
    handleSelectEvent: (event: EventTypeWithMomentDates | undefined) => void;
}> = (props) => {
    return (
        <div
            className="flex flex-col mt-8 md:mb-0 overflow-y-auto overflow-x-visible mt-0"
        >
            {props.error && (
                <AlertBox
                    title="Whoops, an error occurred!"
                    message={props.error}
                />
            )}
            {(props.displayedEvents && props.displayedEvents.length > 0) && (
                <DetailedSchedule
                    selectedDayNumber={props.selectedDay}
                    selectedDay={(props?.eventDays) ? props.eventDays[props.selectedDay] : undefined}
                    events={props.displayedEvents}
                    selectedEvent={props.selectedEvent}
                    onSelectEvent={props.handleSelectEvent}
                />
            )}
        </div>
    );
}
export default ScheduleInformationSegment;