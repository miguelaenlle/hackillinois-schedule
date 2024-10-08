import SCHEDULE_INFO from "@/app/constants/event-type-icons";
import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { FC, useMemo } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { Modal } from "../shared/Modal";
import TypeText from "../shared/TypeText";
import EventLocationMapButton from "./EventLocationMapButton";

const SPEED = 70;

const EventModal: FC<{
    event: EventTypeWithMomentDates | undefined;
    onClose: () => void;
}> = (props) => {
    const startDateTime = useMemo(() => {
        return props.event?.startTimeMoment.format("dddd h:mm a");
    }, [props.event?.startTimeMoment]);

    const endDateTime = useMemo(() => {
        if (props.event?.startTimeMoment.day() === props.event?.endTimeMoment.day()) {
            return props.event?.endTimeMoment.format("h:mm a");
        } else {
            return props.event?.endTimeMoment.format("dddd h:mm a");
        }
    }, [props.event?.endTimeMoment]);

    const categoryInformation = useMemo(() => {
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
                        <div className="grid md:grid-cols-2 bg-zinc-100 rounded-lg shadow-md gap-0 mb-2">
                            <div className="items-center flex gap-1 p-4 pb-0">
                                <MdAccessTimeFilled className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                                <TypeText
                                    speed={SPEED}
                                    text={`${startDateTime} - ${endDateTime}`}
                                    className="text-sm md:text-md text-gray-600 font-mono"
                                />
                            </div>
                            {categoryInformation && (
                                <div className="flex items-center gap-1 p-4 pb-0">
                                    {categoryInformation.icon && <categoryInformation.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />}
                                    <TypeText
                                        speed={SPEED}
                                        text={categoryInformation.displayText}
                                        className="text-sm md:text-md text-gray-600 font-mono"
                                    />
                                </div>
                            )}
                            <EventLocationMapButton
                                event={props.event}
                                speed={SPEED}
                            />
                            <div className="flex items-center gap-[6px] p-4">
                                <FaArrowCircleUp className="text-gray-500 md:w-4 md:h-4 w-[0.9rem] h-[0.9rem] ml-[1.5px]" />
                                <TypeText
                                    speed={SPEED}
                                    text={ `${props.event?.points} points`}
                                    className="text-gray-600 text-sm md:text-md font-mono"
                                />

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