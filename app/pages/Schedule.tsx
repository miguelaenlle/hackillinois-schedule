"use client";
import { FC } from "react";
import DaySelector from "../components/DaySelector/DaySelector";
import Navbar from "../components/Navbar/Navbar";
import { useScheduleHook } from "./use-schedule-hook";
import ScheduleMode from "../components/DaySelector/ScheduleMode";
import AlertBox from "../components/shared/AlertBox";
import DetailedSchedule from "../components/DetailedSchedule/DetailedSchedule";

const Schedule: FC<{}> = (props) => {
    const scheduleHook = useScheduleHook();

    return (
        <div className="bg-slate-600 w-full min-h-screen">
            <Navbar />
            <div className="flex items-start flex-col p-4 w-full max-w-5xl mx-auto">
                <DaySelector
                    selectedDay={scheduleHook.selectedDay}
                    daySelectItems={scheduleHook.eventDays ?? []}
                    onClickDay={scheduleHook.handleSelectDay}
                />
                <ScheduleMode
                    mode={scheduleHook.mode}
                    onToggleMode={scheduleHook.handleToggleMode}
                />
                {scheduleHook.error && (
                    <>
                        <br />
                        <AlertBox
                            title="Whoops, an error occurred!"
                            message={scheduleHook.error}
                        />
                    </>
                )}
                {scheduleHook.mode === "detailed" && (
                    <DetailedSchedule
                        events={scheduleHook.displayedEvents ?? []}
                    />
                )}
            </div>
        </div>
    );
}
export default Schedule