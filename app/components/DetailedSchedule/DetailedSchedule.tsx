import { KeyboardEventContext } from "@/app/context/KeyboardEventContext";
import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import { motion } from 'framer-motion';
import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { DaySelectItemType } from "../DaySelector/DaySelectItems";
import DetailedScheduleItem from "./DetailedScheduleItem";
import EventModal from "./EventModal";

const DetailedSchedule: FC<{
    selectedDayNumber: number,
    selectedDay?: DaySelectItemType,
    events: EventTypeWithMomentDates[],
    selectedEvent: EventTypeWithMomentDates | undefined,
    onSelectEvent: (event: EventTypeWithMomentDates | undefined) => void
}> = (props) => {

    const keyboardEventContext = useContext(KeyboardEventContext);

    const listRef = useRef<HTMLDivElement | null>(null);
    const [hoveredEventId, setHoveredEventId] = useState<string | undefined>(undefined);

    const handleMove = useCallback((e: any) => {
        if (keyboardEventContext?.selectedMode !== "schedule") {
            return;
        }
        if ((e.key === "ArrowUp" || e.key === "ArrowDown") && props.events.length > 0) {
            if (!hoveredEventId) {
                setHoveredEventId(props.events[0].eventId);
                return;
            }
            const index = props.events.findIndex((event) => event.eventId === hoveredEventId);

            let newEventId: string | undefined;

            if (e.key === "ArrowUp") {
                if (index > 0) {
                    newEventId = props.events[index - 1].eventId;
                }
            } else if (e.key === "ArrowDown") {
                if (index < props.events.length - 1) {
                    newEventId = props.events[index + 1].eventId;
                }
            }

            if (newEventId) {
                e.preventDefault();
                props.onSelectEvent(undefined);
                const element = document.getElementById(`event-${newEventId}`);

                if (element) {
                    // scroll to the elemtn in the list
                    listRef.current?.scrollTo({
                        top: element.offsetTop - 200,
                        behavior: 'smooth'
                    });
                }
                setHoveredEventId(newEventId);
            }
        }
    }, [props.events, hoveredEventId, keyboardEventContext?.selectedMode])


    const handleResetHoveredEvent = async () => {
        setHoveredEventId(undefined);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            window.addEventListener('keydown', handleMove);
        }, 100);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('keydown', handleMove);
        }
    }, [handleMove]);

    const handleClickEnter = useCallback(() => {
        if (keyboardEventContext?.selectedMode !== "schedule") {
            return;
        }
        if (hoveredEventId) {
            const event = props.events.find((event) => event.eventId === hoveredEventId);
            if (event) {
                props.onSelectEvent(event);
            }
        }
        if (props.selectedEvent) {
            props.onSelectEvent(undefined);
        }
    }, [hoveredEventId, props.selectedEvent, keyboardEventContext?.selectedMode])

    useEffect(() => {
        handleClickEnter();
    }, [keyboardEventContext?.enterRefreshTrigger])

    useEffect(() => {
        if (props.selectedEvent) {
            props.onSelectEvent(undefined);
        }
    }, [keyboardEventContext?.escapeRefreshTrigger])

    useEffect(() => {
        if (keyboardEventContext?.selectedMode === "schedule") {
            if ((props.events?.length ?? 0) > 0) {
                const newEventId = props.events[0].eventId;
                setHoveredEventId(newEventId);
                const element = document.getElementById(`event-${newEventId}`);

                if (element) {
                    // scroll to the elemtn in the list
                    listRef.current?.scrollTo({
                        top: element.offsetTop - 200,
                        behavior: 'smooth'
                    });
                }
                setHoveredEventId(newEventId);
            }
        } else {
            handleResetHoveredEvent();
        }
    }, [keyboardEventContext?.selectedMode])

    const handleSelectEvent = (event: EventTypeWithMomentDates) => {
        setHoveredEventId(event.eventId);
        props.onSelectEvent(event);
    }


    return (
        <>
            <motion.div
                ref={listRef}
                className="w-full pt-[33px] md:pt-10 pb-20 h-full max-h-full overflow-y-auto scrollbar-none md:pr-8 animate-fadeIn px-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onWheel={() => {
                    handleResetHoveredEvent();
                }}
            >
                <h1 className="text-2xl md:text-3xl mb-4">Day {props.selectedDayNumber + 1} Schedule - {props.selectedDay?.dayOfWeek ?? ""}</h1>
                {props.events.map((event, index) => (
                    <DetailedScheduleItem
                        isHovered={hoveredEventId === event.eventId}
                        key={`detailed-schedule-item-${event.eventId}`}
                        event={event}
                        onClick={() => {
                            handleSelectEvent(event);
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