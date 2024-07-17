import SCHEDULE_INFO from "@/app/constants/event-type-icons";
import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import * as React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Modal } from "../shared/Modal";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

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

    const handleLoadMap = () => {
        if (props.event?.mapImageUrl) {
            window.open(props.event.mapImageUrl, "_blank");
        }
    }

    return (
        <Modal
            header={props.event?.name ?? ""}
            isOpen={props.event !== undefined}
            eventType={props.event?.eventType}
            onClose={props.onClose}
        >
            <div className="mt-2">
                <div className="flex flex-col mb-5">
                    <div className="grid grid-cols-2 p-2 bg-zinc-100 rounded-lg shadow-md gap-1">
                        <div className="items-center flex gap-1">
                            <MdAccessTimeFilled className="text-gray-500 w-5 h-5" />
                            <p className="text-gray-800">{startDateTime} - {endDateTime}</p>
                        </div>
                        {/* Link to the location */}

                        {categoryInformation && (
                            <div className="flex items-center gap-1">
                                {categoryInformation.icon && <categoryInformation.icon className="w-5 h-5 text-gray-500" />}
                                <p className="text-gray-800">{categoryInformation.displayText}</p>
                            </div>
                        )}
                        <div className="group flex items-center gap-1 hover:cursor-pointer" onClick={handleLoadMap}>
                            <FaLocationDot className="text-blue-400 w-5 h-5 group-hover:text-blue-500" />
                            <div className="flex items-center">
                                {props.event?.locations && props.event?.locations.length > 0 && (
                                    <p className="text-blue-400 underline  group-hover:text-blue-500">{props.event.locations.map(loc => loc.description).join(", ")}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-[6px]">
                            <FaArrowCircleUp className="text-gray-500 w-4 h-4 ml-[1.5px]" />
                            <p className="text-gray-800">{props.event?.points} points</p>
                        </div>
                    </div>
                </div>
                <p className="text-zinc-900">{props.event?.description}</p>
            </div>
        </Modal>
    );
}
export default EventModal