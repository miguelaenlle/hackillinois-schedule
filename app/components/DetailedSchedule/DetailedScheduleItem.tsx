import { EventTypeWithMomentDates } from "@/app/pages/EventType";
import { FC } from "react";
import Tag from "../shared/Tag";

const DetailedScheduleItem: FC<{
    event: EventTypeWithMomentDates
}> = (props) => {
    return (
        <div className="flex gap-8">
            <div className="w-28 border-r-4 border-r-zinc-400 pt-1">
                <p className="font-bold text-lg">{props.event.startTimeMoment.format("h:MM a")}</p>
                <p className="text-zinc-300">{props.event.endTimeMoment.format("h:MM a")}</p>
            </div>
            <div className="flex flex-col bg-black p-3 rounded-lg bg-opacity-50 backdrop-blur-lg mb-5 w-full">
                <p className="text-xl font-bold">{props.event.name}</p>
                <div className="flex gap-2 my-2">
                    <Tag
                        text={`${props.event.points} points`}
                        bgColor="bg-teal-600"
                    />
                    <Tag
                        text={props.event.eventType}
                        bgColor="bg-gray-500"
                    />
                </div>
                <p className="text">{props.event.description}</p>
            </div>
        </div>
    );
}
export default DetailedScheduleItem