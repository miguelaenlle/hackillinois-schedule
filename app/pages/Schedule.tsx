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
        <div className=" w-full min-h-screen bg-cover" style={{ backgroundImage: `url("https://i.ibb.co/dr6HHrF/Mountain-Background.jpg")` }}>
            <Navbar />
            <div className="flex p-4 w-full h-screen gap-10">
                <div className="flex flex-col justify-center flex-1 max-w-[600px]">
                    <DaySelector
                        selectedDay={scheduleHook.selectedDay}
                        daySelectItems={scheduleHook.eventDays ?? []}
                        onClickDay={scheduleHook.handleSelectDay}
                    />

                </div>
                <div className="flex flex-col flex-[2.5] pt-20">
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
                        events={scheduleHook.displayedEvents ?? []}
                    />

                </div>
                <div className="flex-1 max-w-2xl">

                </div>
            </div>
        </div>
    );
}
export default Schedule