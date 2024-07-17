import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import { FC } from "react";
import Tag from "../shared/Tag";
import CategoryTag from "./CategoryTag";
import CategoryIcon from "./CategoryIcon";

const DetailedScheduleItem: FC<{
    event: EventTypeWithMomentDates;
    onClick: () => void;
}> = (props) => {
    return (
        <div className="flex gap-8" onClick={props.onClick}>
            <div className="w-32 border-r-4 border-r-amber-400 pt-1">
                <p className="font-bold text-lg">{props.event.startTimeMoment.format("h:mm a")}</p>
                <p className="text-zinc-300">{props.event.endTimeMoment.format("h:mm a")}</p>
            </div>
            <div className="flex flex-col bg-zinc-900 p-4 rounded-lg bg-opacity-25 backdrop-blur-lg mb-5 w-full hover:cursor-pointer hover:scale-[103%] transition-all hover:bg-opacity-60">
                <div className="flex gap-2 mb-2 items-center">
                    <CategoryIcon
                        category={props.event.eventType}
                    />
                    <p className="text-xl font-bold mt-[1.5px]">{props.event.name}</p>
                    <div className="flex-1"></div>
                    <Tag
                        text={`${props.event.points} pts`}
                        bgColor="bg-teal-600"
                        opacity={props.event.points === 0 ? "opacity-75" : ""}
                    />
                </div>
                <p className="text">{props.event.description}</p>
            </div>
        </div>
    );
}
export default DetailedScheduleItem