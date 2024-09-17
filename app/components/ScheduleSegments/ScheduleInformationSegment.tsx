import { EventTypeWithMomentDates } from "@/app/types/EventType";
import * as React from "react"
import AlertBox from "../shared/AlertBox";
import DetailedSchedule from "../DetailedSchedule/DetailedSchedule/DetailedSchedule";
import { DaySelectItemType } from "@/app/types/DaySelectItemType";
import TimeJumpLoader from "../TimeJumpLoader/TimeJumpLoader";
const ScheduleInformationSegment: React.FC<{
    loading: boolean;
    splashLoading: boolean;
    error: string | undefined;
    selectedDay: number;
    selectedEvent: EventTypeWithMomentDates | undefined;
    displayedEvents: EventTypeWithMomentDates[];
    eventDays: DaySelectItemType[] | undefined;
    handleSelectEvent: (event: EventTypeWithMomentDates | undefined) => void;
    onSkipSplashLoader: () => void;
}> = (props) => {
    return (
        <div
            className="flex flex-col flex-[2.5] md:mt-16 mb-20 md:mb-0 overflow-y-auto overflow-x-visible mt-0"
            style={{
                "maskImage": props.selectedEvent ? undefined : "linear-gradient(to bottom, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)"
            }}
        >
            {props.error && (
                <AlertBox
                    title="Whoops, an error occurred!"
                    message={props.error}
                />
            )}
            {(props.loading || props.splashLoading) ? (
                <TimeJumpLoader 
                    splashLoading={props.splashLoading}
                    onSkipSplashLoader={props.onSkipSplashLoader}
                />
            ) : (
                props.displayedEvents && props.displayedEvents.length > 0 && (
                    <DetailedSchedule
                        selectedDayNumber={props.selectedDay}
                        selectedDay={(props?.eventDays) ? props.eventDays[props.selectedDay] : undefined}
                        events={props.displayedEvents}
                        selectedEvent={props.selectedEvent}
                        onSelectEvent={props.handleSelectEvent}
                    />
                )
            )}
        </div>
    );
}
export default ScheduleInformationSegment