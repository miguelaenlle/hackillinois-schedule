"use client";
import { FC } from "react";
import DaySelector from "../../components/DaySelector/DaySelector";
import DetailedSchedule from "../../components/DetailedSchedule/DetailedSchedule/DetailedSchedule";
import AlertBox from "../../components/shared/AlertBox";
import { useScheduleHook } from "./use-schedule-hook";
import ScheduleDaySelectorSegment from "@/app/components/ScheduleSegments/ScheduleDaySelectorSegment";
import ScheduleInformationSegment from "@/app/components/ScheduleSegments/ScheduleInformationSegment";
import ScheduleSpacerSegment from "@/app/components/ScheduleSegments/ScheduleSpacerSegment";

// Blur effect from https://stackoverflow.com/questions/70970529/css-div-fade-scroll-styling

const Schedule: FC<{}> = () => {
    const scheduleHook = useScheduleHook();

    return (
        <>
            <div className={"absolute z-10 w-full p-5 pb-20 h-screen"}>
                <div className="flex flex-col md:flex-row px-2 md:px-4 py-0 w-full h-screen gap-0 md:gap-6 xl:gap-10">
                    <ScheduleDaySelectorSegment
                        loading={scheduleHook.loading}
                        splashLoading={scheduleHook.splashLoading}
                        eventDays={scheduleHook.eventDays}
                        selectedDay={scheduleHook.selectedDay}
                        handleSelectDay={scheduleHook.handleSelectDay}
                    />
                    <ScheduleInformationSegment
                        loading={scheduleHook.loading}
                        splashLoading={scheduleHook.splashLoading}
                        error={scheduleHook.error}
                        selectedDay={scheduleHook.selectedDay}
                        selectedEvent={scheduleHook.selectedEvent}
                        displayedEvents={scheduleHook.displayedEvents}
                        eventDays={scheduleHook.eventDays}
                        handleSelectEvent={scheduleHook.handleSelectEvent}
                        onSkipSplashLoader={scheduleHook.handleSkipSplashLoader}
                    />
                    <ScheduleSpacerSegment />
                </div>
            </div>

        </>
    );
}
export default Schedule