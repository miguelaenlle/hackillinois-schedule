import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { useMemo } from "react";

export const useDetailedScheduleItemHook = (
    event: EventTypeWithMomentDates
) => {
    const formattedStartTime = useMemo(() => {
        return event.startTimeMoment.format("h:mm a");
    }, [event.startTimeMoment])

    const formattedEndTime = useMemo(() => {
        return event.endTimeMoment.format("h:mm a");
    }, [event.endTimeMoment])

    return {
        formattedStartTime,
        formattedEndTime
    }

}