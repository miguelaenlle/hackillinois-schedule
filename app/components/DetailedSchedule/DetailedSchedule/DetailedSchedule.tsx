import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { motion } from 'framer-motion';
import { FC, useMemo } from "react";
import { DaySelectItemType } from "../../../types/DaySelectItemType";
import DetailedScheduleItem from "../DetailedScheduleItem/DetailedScheduleItem";
import EventModal from "../EventModal";
import { useDetailedScheduleHook } from "./use-detailed-schedule-hook";
import { TypeAnimation } from "react-type-animation";
import TypeText from "../../shared/TypeText";

const DetailedSchedule: FC<{
    selectedDayNumber: number,
    selectedDay?: DaySelectItemType,
    events: EventTypeWithMomentDates[],
    selectedEvent: EventTypeWithMomentDates | undefined,
    onSelectEvent: (event: EventTypeWithMomentDates | undefined) => void
}> = (props) => {
    const detailedScheduleHook = useDetailedScheduleHook(
        props.selectedEvent,
        props.events,
        props.onSelectEvent
    )

    const scheduleHeader = useMemo(() => {
        return <div className="min-h-9">
            <TypeText
                key={Math.random()}
                text={`Day ${props.selectedDayNumber + 1} - ${props.selectedDay?.dayOfWeek ?? ""}`}
                speed={70}
                className="text-2xl md:text-3xl font-mono"
            />
        </div>
    }, [props.selectedDayNumber, props.selectedDay]);



    return (
        <>
            <motion.div
                ref={detailedScheduleHook.listRef}
                className="w-full pt-7 md:pt-[14px] pb-20 overflow-y-auto scrollbar-none md:pr-8 animate-fadeIn px-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onWheel={() => {
                    detailedScheduleHook.handleResetHoveredEvent();
                }}
            >
                <div className="min-h-7">
                    <TypeText
                        text={`TIME JUMP DESTINATION DETAILS`}
                        speed={40}
                        className="text-sm font-mono text-cyan-400"
                    />
                </div>
                {scheduleHeader}
                <div className="mb-4"></div>

                {props.events.map((event, index) => (
                    <DetailedScheduleItem
                        isHovered={detailedScheduleHook.hoveredEventId === event.eventId}
                        key={`detailed-schedule-item-${event.eventId}`}
                        event={event}
                        onClick={() => {
                            detailedScheduleHook.handleSelectEvent(event);
                        }}
                    />
                ))}
            </motion.div>
            <EventModal
                event={props.selectedEvent}
                onClose={() => {
                    props.onSelectEvent(undefined);
                }}
            />
        </>
    );
}
export default DetailedSchedule