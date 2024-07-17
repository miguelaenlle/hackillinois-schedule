import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import { FC, useState } from "react";
import DetailedScheduleItem from "./DetailedScheduleItem";
import { Modal } from "../shared/Modal";
import EventModal from "./EventModal";

const DetailedSchedule: FC<{
    events: EventTypeWithMomentDates[]
}> = (props) => {

    const [selectedEvent, setSelectedEvent] = useState<EventTypeWithMomentDates | undefined>();

    const handleSelectEvent = (event: EventTypeWithMomentDates) => {
        setSelectedEvent(event);
    }

    return (
        <>
            <div className="w-full pt-5 h-full max-h-full overflow-y-auto pr-8">
                {props.events.map((event, index) => (
                    <DetailedScheduleItem
                        key={`detailed-schedule-item-${index}`}
                        event={event}
                        onClick={() => {
                            handleSelectEvent(event);
                        }}
                    />
                ))}
            </div>
            <EventModal
                event={selectedEvent}
                onClose={() => {
                    setSelectedEvent(undefined);
                }}
            />
        </>
    );
}
export default DetailedSchedule