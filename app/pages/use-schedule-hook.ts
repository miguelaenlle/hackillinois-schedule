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
            return event.startTimeMoment.format("dddd, MMMM D, YYYY") === eventDays[selectedDay].dateString;
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
            // const response = await fetchHook.get("event");
            // console.log("Repsonse", response);
            // const newEvents = response.data.events as Event[];
            const newEvents = (TEMP_EVENT_DATA.events as { [key: string]: any }[]) as EventType[];
            const newEventsWithMomentDate = newEvents.map((event) => (
                {
                    ...event,
                    startTimeMoment: moment(event.startTime * 1000),
                    endTimeMoment: moment(event.endTime * 1000)
                }
            )).sort((a, b) => a.startTime - b.startTime);

            let uniqueDates: DaySelectItemType[] = [];

            for (let i = 0; i < newEventsWithMomentDate.length; i++) {
                const event = newEventsWithMomentDate[i];
                const date = event.startTimeMoment.format("dddd, MMMM D, YYYY");
                if (!uniqueDates.find((day) => day.dateString === date)) {
                    uniqueDates.push({
                        name: `Day ${uniqueDates.length + 1}`,
                        dateString: date
                    });
                }
            }

            console.log('newEventsWithMomentDate', newEventsWithMomentDate);
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