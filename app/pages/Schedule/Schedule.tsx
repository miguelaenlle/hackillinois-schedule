"use client";
import { MapSegment } from "@/app/components/Map/MapSegment";
import ScheduleDaySelectorSegment from "@/app/components/ScheduleSegments/ScheduleDaySelectorSegment";
import ScheduleInformationSegment from "@/app/components/ScheduleSegments/ScheduleInformationSegment";
import { FC } from "react";
import { useScheduleHook } from "./use-schedule-hook";

const Schedule: FC<{}> = () => {
    const scheduleHook = useScheduleHook();

    return (
        <>
            <div className={"absolute z-50 w-screen md:pb-32 h-[100dvh] flex gap-10"}>
                <div className="flex gap-10 w-full max-w-[1500px] mx-auto px-2">
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
                    <div className={'hidden lg:flex md:flex-1 flex-col justify-center items-center'}>
                        <MapSegment
                            displayedEvents={scheduleHook.displayedEvents}
                            hoveredEventId={scheduleHook.hoveredEventId}
                            onHoverEventId={scheduleHook.handleHoverEventId}
                            onSelectEvent={scheduleHook.handleSelectEvent}
                        />
                    </div>
                </div>
            </div>

        </>
    );
}
export default Schedule