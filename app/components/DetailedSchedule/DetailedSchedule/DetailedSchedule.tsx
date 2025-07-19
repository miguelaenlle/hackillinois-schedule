import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { motion } from 'framer-motion';
import { FC, useMemo } from "react";
import { DaySelectItemType } from "../../../types/DaySelectItemType";
import TypeText from "../../shared/TypeText";
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

    const scheduleHeader = useMemo(() => {
        return <div className={"h-[2rem] md:h-[2.25rem]"}>
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