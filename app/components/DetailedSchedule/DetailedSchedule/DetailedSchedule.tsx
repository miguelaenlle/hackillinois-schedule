import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { motion } from 'framer-motion';
import { FC } from "react";
import { DaySelectItemType } from "../../../types/DaySelectItemType";
import DetailedScheduleItem from "../DetailedScheduleItem/DetailedScheduleItem";
import EventModal from "../EventModal";
import { useDetailedScheduleHook } from "./use-detailed-schedule-hook";

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

    return (
        <>
            <motion.div
                ref={detailedScheduleHook.listRef}
                className="w-full pt-[14px] pb-20 h-full max-h-full overflow-y-auto scrollbar-none md:pr-8 animate-fadeIn px-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onWheel={() => {
                    detailedScheduleHook.handleResetHoveredEvent();
                }}
            >
                <h1 className="text-2xl md:text-3xl mb-4">Day {props.selectedDayNumber + 1} Schedule - {props.selectedDay?.dayOfWeek ?? ""}</h1>
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