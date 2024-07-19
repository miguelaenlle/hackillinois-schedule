import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import { FC, useMemo } from "react";
import Tag from "../shared/Tag";
import CategoryIcon from "./CategoryIcon";

const DetailedScheduleItem: FC<{
    isHovered?: boolean;
    event: EventTypeWithMomentDates;
    onClick: () => void;
}> = (props) => {

    const formattedStartTime = useMemo(() => {
        return props.event.startTimeMoment.format("h:mm a");
    }, [props.event.startTimeMoment])

    const formattedEndTime = useMemo(() => {
        return props.event.endTimeMoment.format("h:mm a");
    }, [props.event.endTimeMoment])

    return (
        <div id={`event-${props.event.eventId}`} className="flex flex-col md:flex-row gap-1 md:gap-8 w-full">
            <div className="hidden md:block w-24 min-w-24 xl:w-36 border-r-4 border-r-amber-400 pt-1">
                <p className="font-bold text-lg text-nowrap">{formattedStartTime}</p>
                <p className="text-zinc-300 text-nowrap">{formattedEndTime}</p>
            </div>
            <div className={`flex flex-col bg-zinc-800 ${props.isHovered ? "bg-opacity-[55%]" : "bg-opacity-50 xl:bg-opacity-25"} hover:bg-opacity-70  p-3 md:p-4 rounded-lg mb-3 md:mb-5 w-full hover:cursor-pointer transition-all`} onClick={props.onClick}>
                <div className="flex gap-2 md:mb-2 items-center">
                    <CategoryIcon
                        category={props.event.eventType}
                    />
                    <h2 className="text-lg md:text-xl font-bold mt-[1.5px]">{props.event.name}</h2>
                    <div className="flex-1"></div>
                    <Tag
                        text={`${props.event.points} pts`}
                        ariaLabel={`${props.event.points} points`}
                        bgColor="bg-yellow-700 md:bg-teal-700"
                        opacity={props.event.points === 0 ? "md:opacity-75" : ""}
                        textSize="text-sm md:text-base"
                    />
                </div>
                <div className="md:hidden flex items-center gap-[6px] w-full mb-2 md:mb-0">
                    <p className="text-zinc-300 text-sm">{props.event.startTimeMoment.format("h:mm a")}</p>
                    <p className="text-zinc-300 text-sm">{` - `}{props.event.endTimeMoment.format("h:mm a")}</p>
                </div>
                <p className="text-sm md:text-base">{props.event.description}</p>
            </div>
        </div>
    );
}
export default DetailedScheduleItem