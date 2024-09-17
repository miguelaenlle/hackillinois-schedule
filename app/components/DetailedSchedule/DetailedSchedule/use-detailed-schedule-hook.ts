import { KeyboardEventContext } from "@/app/contexts/KeyboardEventContext";
import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

export const useDetailedScheduleHook = (
    selectedEvent: EventTypeWithMomentDates | undefined,
    events: EventTypeWithMomentDates[],
    onSelectEvent: (event: EventTypeWithMomentDates | undefined) => void
) => {
    const keyboardEventContext = useContext(KeyboardEventContext);

    const listRef = useRef<HTMLDivElement | null>(null);

    const [hoveredEventId, setHoveredEventId] = useState<string | undefined>(undefined);

    const handleResetHoveredEvent = async () => {
        setHoveredEventId(undefined);
    }

    const handleSelectEvent = (event: EventTypeWithMomentDates) => {
        setHoveredEventId(event.eventId);
        onSelectEvent(event);
    }

    const handleScrollToEventId = (eventId: string) => {
        const element = document.getElementById(`event-${eventId}`);

        if (element) {
            listRef.current?.scrollTo({
                top: element.offsetTop - 200,
                behavior: 'smooth'
            });
        }
    }

    const handleClickUpOrDownArrow = useCallback((e: any) => {
        // Moves the hovered event up or down
        if (keyboardEventContext?.selectedMode !== "schedule") {
            return;
        }
        if ((e.key === "ArrowUp" || e.key === "ArrowDown") && events.length > 0) {
            if (!hoveredEventId) {
                setHoveredEventId(events[0].eventId);
                return;
            }
            const index = events.findIndex((event) => event.eventId === hoveredEventId);

            let newEventId: string | undefined;

            if (e.key === "ArrowUp") {
                if (index > 0) {
                    newEventId = events[index - 1].eventId;
                }
            } else if (e.key === "ArrowDown") {
                if (index < events.length - 1) {
                    newEventId = events[index + 1].eventId;
                }
            }

            if (newEventId) {
                e.preventDefault();
                onSelectEvent(undefined);
                handleScrollToEventId(newEventId);
                setHoveredEventId(newEventId);
            }
        }
    }, [events, hoveredEventId, keyboardEventContext?.selectedMode])


    const handleClickEnter = useCallback(() => {
        // If no event modal open: Expands the selected event
        // If event modal open: CLoses the modal

        if (keyboardEventContext?.selectedMode !== "schedule") {
            return;
        }
        if (hoveredEventId) {
            const event = events.find((event) => event.eventId === hoveredEventId);
            if (event) {
                onSelectEvent(event);
            }
        }
        if (selectedEvent) {
            onSelectEvent(undefined);
        }
    }, [hoveredEventId, selectedEvent, keyboardEventContext?.selectedMode])


    useEffect(() => {
        if (keyboardEventContext?.selectedMode === "schedule") {
            if ((events?.length ?? 0) > 0 && !hoveredEventId) {
                const newEventId = events[0].eventId;
                setHoveredEventId(newEventId);
            }
        } else {
            handleResetHoveredEvent();
        }
    }, [keyboardEventContext?.selectedMode, hoveredEventId])

    useEffect(() => {
        const timeout = setTimeout(() => {
            window.addEventListener('keydown', handleClickUpOrDownArrow);
        }, 100);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('keydown', handleClickUpOrDownArrow);
        }
    }, [handleClickUpOrDownArrow]);

    useEffect(() => {
        handleClickEnter();
    }, [keyboardEventContext?.enterRefreshTrigger])

    useEffect(() => {
        // If the escape key is pressed, close the modal
        if (selectedEvent) {
            onSelectEvent(undefined);
        }
    }, [keyboardEventContext?.escapeRefreshTrigger])

    return {
        listRef,
        hoveredEventId,
        handleSelectEvent,
        handleResetHoveredEvent
    }
}