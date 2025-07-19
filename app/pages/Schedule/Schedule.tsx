"use client";
import ScheduleDaySelectorSegment from "@/app/components/ScheduleSegments/ScheduleDaySelectorSegment";
import ScheduleInformationSegment from "@/app/components/ScheduleSegments/ScheduleInformationSegment";
import ScheduleSpacerSegment from "@/app/components/ScheduleSegments/ScheduleSpacerSegment";
import { FC } from "react";
import { useScheduleHook } from "./use-schedule-hook";
import { Map } from "@/app/components/Map/Map";

// Blur effect from https://stackoverflow.com/questions/70970529/css-div-fade-scroll-styling

const Schedule: FC<{}> = () => {
    const scheduleHook = useScheduleHook();

    return (
        <>
            <div className={"absolute z-10 w-screen md:pb-20 h-screen flex gap-10"}>
                <div className="flex flex-col h-full md:flex-[1] w-full pt-3">
                    <ScheduleDaySelectorSegment
                        loading={scheduleHook.loading}
                        eventDays={scheduleHook.eventDays}
                        selectedDay={scheduleHook.selectedDay}
                        handleSelectDay={scheduleHook.handleSelectDay}
                    />
                    <ScheduleInformationSegment
                        loading={scheduleHook.loading}
                        error={scheduleHook.error}
                        selectedDay={scheduleHook.selectedDay}
                        selectedEvent={scheduleHook.selectedEvent}
                        displayedEvents={scheduleHook.displayedEvents}
                        eventDays={scheduleHook.eventDays}
                        handleSelectEvent={scheduleHook.handleSelectEvent}
                        onHoverEventId={scheduleHook.handleHoverEventId}
                    />
                </div>
                <div className={'hidden md:flex md:flex-1 flex-col justify-center items-center'}>
                    <Map 
                        displayedEvents={scheduleHook.displayedEvents} 
                        hoveredEventId={scheduleHook.hoveredEventId}
                        onHoverEventId={scheduleHook.handleHoverEventId}
                        onSelectEvent={scheduleHook.handleSelectEvent}
                    />
                </div>
            </div>

        </>
    );
}
export default Schedule