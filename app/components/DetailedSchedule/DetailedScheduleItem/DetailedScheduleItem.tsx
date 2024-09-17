import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { FC, use, useMemo } from "react";
import Tag from "../../shared/Tag";
import CategoryIcon from "../CategoryIcon";
import { useDetailedScheduleItemHook } from "./use-detailed-schedule-item-hook";

const DetailedScheduleItem: FC<{
    isHovered?: boolean;
    event: EventTypeWithMomentDates;
    onClick: () => void;
}> = (props) => {
    const detailedScheduleItemHook = useDetailedScheduleItemHook(props.event);
    const scheduleItemStyle = useMemo(() => {
        return `flex flex-col bg-zinc-500 ${props.isHovered ? "bg-opacity-80 bg-zinc-200" : "bg-opacity-50 hover:bg-opacity-80"} p-3 md:p-4 rounded-lg mb-3 md:mb-5 w-full hover:cursor-pointer transition-all`;
    }, [props.isHovered])

    return (
        <div id={`event-${props.event.eventId}`} className="flex flex-col md:flex-row gap-1 md:gap-8 w-full">
            <div className="hidden md:block w-24 min-w-24 xl:w-36 border-r-4 border-r-teal-500 pt-1">
                <p className="text-lg text-nowrap font-mono">{detailedScheduleItemHook.formattedStartTime}</p>
                <p className="text-zinc-300 text-nowrap font-mono">{detailedScheduleItemHook.formattedEndTime}</p>
            </div>
            <div className={scheduleItemStyle} onClick={props.onClick}>
                <div className="flex gap-2 md:mb-2 items-center">
                    <CategoryIcon
                        category={props.event.eventType}
                    />
                    <h2 className="text-lg md:text-xl font-bold mt-[1.5px]">{props.event.name}</h2>
                    <div className="flex-1"></div>
                    <Tag
                        text={`${props.event.points} pts`}
                        ariaLabel={`${props.event.points} points`}
                        bgColor="bg-teal-700"
                        opacity={props.event.points === 0 ? "md:opacity-75" : ""}
                        textSize="text-sm font-mono"
                    />
                </div>
                <div className="md:hidden flex items-center gap-[6px] w-full mb-2 md:mb-0">
                    <p className="text-zinc-300 text-sm">{props.event.startTimeMoment.format("h:mm a")}</p>
                    <p className="text-zinc-300 text-sm">{` - `}{props.event.endTimeMoment.format("h:mm a")}</p>
                </div>
                <p className="text-sm md:text-base text-zinc-100">{props.event.description}</p>
            </div>
        </div>
    );
}
export default DetailedScheduleItem