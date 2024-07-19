import SCHEDULE_INFO from "@/app/constants/event-type-icons";
import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import * as React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { Modal } from "../shared/Modal";
import EventLocationMapButton from "./EventLocationMapButton";

const EventModal: React.FC<{
    event: EventTypeWithMomentDates | undefined;
    onClose: () => void;
}> = (props) => {
    const startDateTime = React.useMemo(() => {
        return props.event?.startTimeMoment.format("dddd h:mm a");
    }, [props.event?.startTimeMoment]);

    const endDateTime = React.useMemo(() => {
        if (props.event?.startTimeMoment.day() === props.event?.endTimeMoment.day()) {
            return props.event?.endTimeMoment.format("h:mm a");
        } else {
            return props.event?.endTimeMoment.format("dddd h:mm a");
        }
    }, [props.event?.endTimeMoment]);

    const categoryInformation = React.useMemo(() => {
        if (props.event?.eventType && SCHEDULE_INFO[props.event?.eventType]) {
            return SCHEDULE_INFO[props.event?.eventType];
        }
    }, [props.event?.eventType])

    return (
        <Modal
            header={props.event?.name ?? ""}
            isOpen={props.event !== undefined}
            eventType={props.event?.eventType}
            onClose={props.onClose}
            stringLights
        >
            {props.event ? (
                <div className="mt-2">
                    <div className="flex flex-col mb-3">
                        <div className="grid md:grid-cols-2 p-2 md:p-4 bg-zinc-100 rounded-lg shadow-md gap-2 mb-2">
                            <div className="items-center flex gap-1">
                                <MdAccessTimeFilled className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                                <p className="text-sm md:text-md text-gray-800">{startDateTime} - {endDateTime}</p>
                            </div>
                            {/* Link to the location */}

                            {categoryInformation && (
                                <div className="flex items-center gap-1">
                                    {categoryInformation.icon && <categoryInformation.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />}
                                    <p className="text-gray-800 text-sm md:text-md">{categoryInformation.displayText}</p>
                                </div>
                            )}
                            <EventLocationMapButton
                                event={props.event}
                            />
                            <div className="flex items-center gap-[6px]">
                                <FaArrowCircleUp className="text-gray-500 md:w-4 md:h-4 w-[0.9rem] h-[0.9rem] ml-[1.5px]" />
                                <p className="text-gray-800 text-sm md:text-md">{props.event?.points} points</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-zinc-900">{props.event?.description}</p>
                </div>
            ) : <></>}
        </Modal>
    );
}
export default EventModal