"use client";
import ScheduleDaySelectorSegment from "@/app/components/ScheduleSegments/ScheduleDaySelectorSegment";
import ScheduleInformationSegment from "@/app/components/ScheduleSegments/ScheduleInformationSegment";
import ScheduleSpacerSegment from "@/app/components/ScheduleSegments/ScheduleSpacerSegment";
import { FC } from "react";
import { useScheduleHook } from "./use-schedule-hook";

// Blur effect from https://stackoverflow.com/questions/70970529/css-div-fade-scroll-styling

const Schedule: FC<{}> = () => {
    const scheduleHook = useScheduleHook();

    return (
        <>
            <div className={"absolute z-10 w-full p-5 pb-20 h-screen flex gap-20"}>
                <div className={'flex-[0.5] mt-16'}>

                </div>
                <div className="flex flex-col h-full flex-[2]">
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
                    />
                </div>
                <div className={'flex-[0.5] mt-16'}>

                </div>
                <div className={'flex-1 mt-16'}>
                    <p>Map</p>

                </div>
                <div className={'flex-[0.5] mt-16'}>

                </div>
            </div>

        </>
    );
}
export default Schedule