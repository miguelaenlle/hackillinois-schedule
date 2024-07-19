import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import { FC } from "react";
import Tag from "../shared/Tag";
import CategoryIcon from "./CategoryIcon";

const DetailedScheduleItem: FC<{
    isHovered?: boolean;
    event: EventTypeWithMomentDates;
    onClick: () => void;
}> = (props) => {
    return (
        <div id={`event-${props.event.eventId}`} className="flex flex-col md:flex-row gap-1 md:gap-8 w-full">
            <div className="hidden md:block w-24 min-w-24 xl:w-36 border-r-4 border-r-amber-400 pt-1">
                <p className="font-bold text-lg text-nowrap">{props.event.startTimeMoment.format("h:mm a")}</p>
                <p className="text-zinc-300 text-nowrap">{props.event.endTimeMoment.format("h:mm a")}</p>
            </div>
            <div className={`flex flex-col bg-zinc-800 ${props.isHovered ? "scale-[103%] bg-opacity-60" : "md:hover:scale-[103%] hover:bg-opacity-60 bg-opacity-50 xl:bg-opacity-25"} p-3 md:p-4 rounded-lg mb-3 md:mb-5 w-full hover:cursor-pointer transition-all`} onClick={props.onClick}>
                <div className="flex gap-2 md:mb-2 items-center">
                    <CategoryIcon
                        category={props.event.eventType}
                    />
                    <p className="text-lg md:text-xl font-bold mt-[1.5px]">{props.event.name}</p>
                    <div className="flex-1"></div>
                    <Tag
                        text={`${props.event.points} pts`}
                        bgColor="bg-yellow-600 md:bg-teal-600"
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