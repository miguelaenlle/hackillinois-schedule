import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { FC, use, useMemo } from "react";
import Tag from "../../shared/Tag";
import CategoryIcon from "../CategoryIcon";
import { useDetailedScheduleItemHook } from "./use-detailed-schedule-item-hook";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const DetailedScheduleItem: FC<{
    isHovered?: boolean;
    event: EventTypeWithMomentDates;
    onClick: () => void;
    onHoverEventId?: (eventId: string | undefined) => void;
}> = (props) => {
    const detailedScheduleItemHook = useDetailedScheduleItemHook(props.event);
    const scheduleItemStyle = useMemo(() => {
        return `flex flex-col bg-zinc-900 ${props.isHovered ? "bg-opacity-80 bg-zinc-200" : "bg-opacity-50 hover:bg-opacity-80"} p-3 md:p-4 rounded-xl w-full hover:cursor-pointer transition-all`;
    }, [props.isHovered])

    return (
        <div id={`event-${props.event.eventId}`} className="flex flex-col md:flex-row gap-1 md:gap-8 w-full" onMouseEnter={(e) => {
            props.onHoverEventId?.(props.event.eventId);
        }}>
            <div className={scheduleItemStyle} onClick={props.onClick}>
                <div className="flex gap-2 items-center font-serif">
                    <CategoryIcon
                        category={props.event.eventType}
                    />
                    <h2 className="text-lg md:text-xl font-bold">{props.event.name}</h2>
                    <div className="flex-1"></div>
                    <Tag
                        text={`${props.event.points} pts`}
                        ariaLabel={`${props.event.points} points`}
                        bgColor="bg-teal-600"
                        opacity={props.event.points === 0 ? "md:opacity-75" : ""}
                        textSize="text-sm"
                    />
                </div>
                <div className="flex items-center gap-3 mb-2 mt-1">
                    <div className="flex items-center gap-1">
                        <FaClock className="w-3 h-3 text-gray-300 mt-[1.5px]" />
                        <p className="text-zinc-300 text-sm">{`${props.event.startTimeMoment.format("h:mm a")} - ${props.event.endTimeMoment.format("h:mm a")}`}</p>
                    </div>
                    {props.event.locations.length > 0 && (
                        <div className="flex items-center gap-1">
                            <FaLocationDot className="w-3 h-3 text-gray-300 mt-[1.5px]" />
                            {props.event.locations.map((location, index) => (
                                <p key={`location-${index}`} className="text-zinc-300 text-sm">{location.description}</p>
                            ))}
                        </div>
                    )}
                </div>
                <p className="text-sm md:text-base text-zinc-100 mt-1">{props.event.description}</p>
            </div>
        </div>
    );
}
export default DetailedScheduleItem