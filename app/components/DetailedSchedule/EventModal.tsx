import SCHEDULE_INFO from "@/app/constants/event-type-icons";
import { EventTypeWithMomentDates } from "@/app/types/EventType";
import BuildingRuins from "@/public/static/images/modal/building-ruins.svg";
import Image from "next/image";
import { FC, useMemo } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { Modal } from "../shared/Modal";
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
    }, [props.event?.startTimeMoment, props.event?.endTimeMoment]);

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
                        <div className="grid md:grid-cols-2 bg-[#FCCD94] border border-2 border-solid border-[#CE9258] rounded-lg shadow-md gap-0 mb-2 mt-1">
                            <div className="items-center flex gap-1 p-4 pb-0">
                                <MdAccessTimeFilled className="text-gray-700 w-4 h-4 md:w-5 md:h-5" />
                                <p className="text-md text-gray-700">{`${startDateTime} - ${endDateTime}`}</p>
                            </div>
                            {categoryInformation && (
                                <div className="flex items-center gap-1 p-4 pb-0">
                                    {categoryInformation.icon && <categoryInformation.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />}
                                    <p className="text-md text-gray-700">{`${categoryInformation.displayText}`}</p>
                                </div>
                            )}
                            <EventLocationMapButton
                                event={props.event}
                                speed={SPEED}
                            />
                            <div className="flex items-center gap-[6px] p-4">
                                <FaArrowCircleUp className="text-gray-700 md:w-4 md:h-4 w-[0.9rem] h-[0.9rem] ml-[1.5px]" />
                                <p className="text-md text-gray-700">{`${props.event?.points} points`}</p>

                            </div>
                        </div>
                    </div>
                    <p className="text-zinc-900">{props.event?.description}</p>

                    <Image
                        src={BuildingRuins}
                        className="w-[40%] md:w-[30%] h-auto mt-4 opacity-50"
                        loading="lazy"
                        style={{ maxHeight: "500px", objectFit: "cover" }}
                        alt="Building ruins"
                    />


                </div>
            ) : <></>}
        </Modal>
    );
}
export default EventModal