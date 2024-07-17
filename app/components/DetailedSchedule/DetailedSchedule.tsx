import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import { motion } from 'framer-motion';
import { FC, useState } from "react";
import DetailedScheduleItem from "./DetailedScheduleItem";
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
            <motion.div 
                className="w-full pt-5 h-full max-h-full overflow-y-auto pr-8 animate-fadeIn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {props.events.map((event, index) => (
                    <DetailedScheduleItem
                        key={`detailed-schedule-item-${index}`}
                        event={event}
                        onClick={() => {
                            handleSelectEvent(event);
                        }}
                    />
                ))}
            </motion.div>
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