import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { motion } from 'framer-motion';
import { FC, useEffect } from "react";
import { DaySelectItemType } from "../../../types/DaySelectItemType";
import DetailedScheduleItem from "../DetailedScheduleItem/DetailedScheduleItem";
import EventModal from "../EventModal";
import { useDetailedScheduleHook } from "./use-detailed-schedule-hook";

const DetailedSchedule: FC<{
    selectedDayNumber: number,
    selectedDay?: DaySelectItemType,
    events: EventTypeWithMomentDates[],
    selectedEvent: EventTypeWithMomentDates | undefined,
    onSelectEvent: (event: EventTypeWithMomentDates | undefined) => void,
    onHoverEventId: (eventId: string | undefined) => void
}> = (props) => {
    const detailedScheduleHook = useDetailedScheduleHook(
        props.selectedEvent,
        props.events,
        props.onSelectEvent
    )

    useEffect(() => {
        props.onHoverEventId(detailedScheduleHook.hoveredEventId);
    }, [detailedScheduleHook.hoveredEventId])

    return (
        <>
            <motion.div
                ref={detailedScheduleHook.listRef}
                className="w-full overflow-y-auto scrollbar-none animate-fadeIn gap-4 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onWheel={() => {
                    detailedScheduleHook.handleResetHoveredEvent();
                }}
            >
                {props.events.map((event, index) => (
                    <DetailedScheduleItem
                        isHovered={detailedScheduleHook.hoveredEventId === event.eventId}
                        key={`detailed-schedule-item-${event.eventId}`}
                        event={event}
                        onClick={() => {
                            detailedScheduleHook.handleSelectEvent(event);
                        }}
                        onHoverEventId={props.onHoverEventId}
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