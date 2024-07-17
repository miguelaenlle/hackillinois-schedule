"use client";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { DaySelectItemType } from "../components/DaySelector/DaySelectItems";
import { TEMP_EVENT_DATA } from "../constants/temp-event-data";
import { useFetchHook } from "../hooks/use-fetch-hook";
import { EventType, EventTypeWithMomentDates } from "./EventType";

export const useScheduleHook = () => {
    const [selectedDay, setSelectedDay] = useState(0);

    const [mode, setMode] = useState<"overview" | "detailed">("overview");

    const [events, setEvents] = useState<EventTypeWithMomentDates[] | undefined>();
    const [eventDays, setEventDays] = useState<DaySelectItemType[] | undefined>();
    const [error, setError] = useState<string | undefined>();

    const displayedEvents = useMemo(() => {
        if (events === undefined || eventDays === undefined) {
            return [];
        }
        return events.filter((event) => {
            return event.startTimeMoment.format("MMMM D, YYYY") === eventDays[selectedDay].fullDate;
        });
    }, [events, selectedDay])


    const fetchHook = useFetchHook();

    const handleSelectDay = (day: number) => {
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
            const isLocalhost = window.location.hostname === "localhost";

            let newEvents: EventType[] = [];
            if (isLocalhost) {
                // Retrieve events via API
                newEvents = (TEMP_EVENT_DATA.events as { [key: string]: any }[]) as EventType[];
            } else {
                const response = await fetchHook.get("event/");
                // const newEvents = response.data.events as Event[];
            }
            const newEventsWithMomentDate = newEvents.map((event) => (
                {
                    ...event,
                    startTimeMoment: moment.unix(event.startTime),
                    endTimeMoment: moment.unix(event.endTime)
                }
            )).sort((a, b) => a.startTime - b.startTime);

            console.log(newEventsWithMomentDate[0].startTimeMoment.format("hh:mm a"));


            let uniqueDates: DaySelectItemType[] = [];

            for (let i = 0; i < newEventsWithMomentDate.length; i++) {
                const event = newEventsWithMomentDate[i];
                const dayOfWeek = event.startTimeMoment.format("dddd");
                const date = event.startTimeMoment.format("MMMM D, YYYY");
                if (!uniqueDates.some((daySelectItem) => daySelectItem.fullDate === date)) {
                    uniqueDates.push({
                        dayOfWeek,
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

    useEffect(() => {
        handleLoadEvents();
    }, [])


    return {
        mode,
        selectedDay,
        displayedEvents,
        error,
        eventDays,

        handleSelectDay,
        handleToggleMode
    }
}