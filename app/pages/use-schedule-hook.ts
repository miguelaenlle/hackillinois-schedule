"use client";
import moment from "moment";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DaySelectItemType } from "../components/DaySelector/DaySelectItems";
import { KeyboardEventContext } from "../context/KeyboardEventContext";
import { NavbarEnabledContext } from "../context/NavbarEnabledContext";
import { EventType, EventTypeWithMomentDates } from "./EventType";
import { getEvents } from "../utils/get-events";

export const useScheduleHook = () => {
    const [selectedDay, setSelectedDay] = useState(0);

    const [mode, setMode] = useState<"overview" | "detailed">("overview");

    const [events, setEvents] = useState<EventTypeWithMomentDates[] | undefined>();
    const [eventDays, setEventDays] = useState<DaySelectItemType[] | undefined>();

    const [error, setError] = useState<string | undefined>();
    const [selectedEvent, setSelectedEvent] = useState<EventTypeWithMomentDates | undefined>();
    const keyboardEventContext = useContext(KeyboardEventContext);

    const displayedEvents = useMemo(() => {
        if (events === undefined || eventDays === undefined) {
            return [];
        }
        return events.filter((event) => {
            return event.startTimeMoment.format("MMMM D, YYYY") === eventDays[selectedDay].fullDate;
        });
    }, [events, selectedDay])


    const handleSelectDay = (day: number) => {
        keyboardEventContext?.handleSetSelectedMode("daySelector");
        setSelectedDay(day);
    }

    const handleToggleMode = () => {
        setMode(prevMode => {
            if (prevMode === "overview") {
                return "detailed";
            } else {
                return "overview";
            }
        });
    }

    const handleLoadEvents = async () => {
        try {
            let newEvents: EventType[] = await getEvents();
            
            const newEventsWithMomentDate = newEvents.map((event) => (
                {
                    ...event,
                    startTimeMoment: moment.unix(event.startTime),
                    endTimeMoment: moment.unix(event.endTime)
                }
            )).sort((a, b) => a.startTime - b.startTime);
            let uniqueDates: DaySelectItemType[] = [];

            for (let i = 0; i < newEventsWithMomentDate.length; i++) {
                const event = newEventsWithMomentDate[i];
                const dayOfWeek = event.startTimeMoment.format("dddd");
                const dateShort = event.startTimeMoment.format("MMM D, YYYY");
                const date = event.startTimeMoment.format("MMMM D, YYYY");
                if (!uniqueDates.some((daySelectItem) => daySelectItem.fullDate === date)) {
                    uniqueDates.push({
                        dayOfWeek,
                        dateShort,
                        fullDate: date
                    });
                }
            }

            setEvents(newEventsWithMomentDate);
            setEventDays(uniqueDates);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError("An unknown error occurred");
            }
        }
    }

    const handleSelectEvent = (event: EventTypeWithMomentDates | undefined) => {
        keyboardEventContext?.handleSetSelectedMode("schedule");

        setSelectedEvent(event);
    }

    useEffect(() => {
        handleLoadEvents();
    }, [])

    const handleMove = useCallback((e: any) => {
        if (keyboardEventContext?.selectedMode !== "daySelector") {
            return;
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (selectedDay > 0) {
                setSelectedDay(selectedDay - 1);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (selectedDay < (eventDays?.length ?? 0) - 1) {
                setSelectedDay(selectedDay + 1);
            }
        }
    }, [
        selectedDay,
        eventDays,
        keyboardEventContext?.selectedMode
    ])

    useEffect(() => {
        window.addEventListener('keydown', handleMove);
        return () => {
            window.removeEventListener('keydown', handleMove);
        }
    }, [handleMove])

    const navbarEnabledContext = useContext(NavbarEnabledContext);

    useEffect(() => {
        if (selectedEvent) {
            navbarEnabledContext?.onSetNavbarEnabled(false);
        } else {
            navbarEnabledContext?.onSetNavbarEnabled(true);
        }
    }, [selectedEvent])

    return {
        mode,
        selectedDay,
        displayedEvents,
        error,
        eventDays,
        selectedEvent,

        handleSelectDay,
        handleToggleMode,
        handleSelectEvent
    }
}