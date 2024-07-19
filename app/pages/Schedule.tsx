"use client";
import { FC } from "react";
import DaySelector from "../components/DaySelector/DaySelector";
import Navbar from "../components/Navbar/Navbar";
import { useScheduleHook } from "./use-schedule-hook";
import ScheduleMode from "../components/DaySelector/ScheduleMode";
import AlertBox from "../components/shared/AlertBox";
import DetailedSchedule from "../components/DetailedSchedule/DetailedSchedule";

// Blur effect from https://stackoverflow.com/questions/70970529/css-div-fade-scroll-styling

const Schedule: FC<{}> = (props) => {
    const scheduleHook = useScheduleHook();

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-30">
                <div className="flex flex-col md:flex-row px-2 md:px-4 py-0 w-full h-screen gap-0 md:gap-10">
                    <div className="flex flex-col justify-center md:flex-1 md:max-w-[600px] mt-16 px-3 md:px-0">
                        <DaySelector
                            selectedDay={scheduleHook.selectedDay}
                            daySelectItems={scheduleHook.eventDays ?? []}
                            onClickDay={scheduleHook.handleSelectDay}
                        />
                    </div>
                    <div
                        className="flex flex-col flex-[2.5] md:mt-16 mb-20 md:mb-0 overflow-y-auto overflow-x-visible mt-0"
                        style={{
                            "maskImage": scheduleHook.selectedEvent ? undefined : "linear-gradient(to bottom, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)"
                        }}
                    >
                        {scheduleHook.error && (
                            <>
                                <br />
                                <AlertBox
                                    title="Whoops, an error occurred!"
                                    message={scheduleHook.error}
                                />
                            </>
                        )}
                        <DetailedSchedule
                            selectedDayNumber={scheduleHook.selectedDay}
                            selectedDay={(scheduleHook?.eventDays) ? scheduleHook.eventDays[scheduleHook.selectedDay] : undefined}
                            events={scheduleHook.displayedEvents ?? []}
                            selectedEvent={scheduleHook.selectedEvent}
                            onSelectEvent={scheduleHook.handleSelectEvent}
                        />

                    </div>
                    <div className="hidden xl:block flex-[0.25] md:flex-1 max-w-2xl">

                    </div>
                </div>
            </div>

        </>
    );
}
export default Schedule