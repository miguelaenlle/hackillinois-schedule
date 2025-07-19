import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { FC, useMemo } from "react";
import { FaLocationDot } from "react-icons/fa6";
import TypeText from "../shared/TypeText";
const EventLocationMapButton: FC<{
    event: EventTypeWithMomentDates,
    speed?: number
}> = (props) => {
    const mapImageUrlAvailable = useMemo(() => {
        return props.event.mapImageUrl ? true : false;
    }, [
        props.event.mapImageUrl
    ])

    const linkStyle = useMemo(() => {
        return `${mapImageUrlAvailable ? "text-blue-500" : "text-gray-800"} ${mapImageUrlAvailable ? "group-hover:text-blue-600" : ""}`
    }, [mapImageUrlAvailable])

    const buttonStyle = useMemo(() => {
        if (mapImageUrlAvailable) {
            return linkStyle
        } else {
            return "text-gray-500"
        }
    }, [mapImageUrlAvailable, linkStyle])

    const mapButton = useMemo(() => {
        return <>
            <FaLocationDot className={`${buttonStyle} w-4 h-4 md:w-5 md:h-5`} />
            <div className="flex items-center">
                {props.event?.locations && props.event?.locations.length > 0 ? (
                    <p
                        className={`${linkStyle} ${mapImageUrlAvailable ? "underline" : ""} text-md`}
                    >
                        {props.event.locations.map(loc => loc.description).join(", ")}
                    </p>
                ) : (
                    <p className="text-md text-gray-600 font-mono">
                        Location not specified
                    </p>
                )}
            </div>
        </>
    }, [
        props.event.mapImageUrl
    ])

    if (props.event.mapImageUrl) {
        return (
            <a href={props.event.mapImageUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-1 hover:cursor-pointer p-4 pb-0 md:pb-4">
                {mapButton}
            </a>
        );
    } else {
        return (
            <div rel="noreferrer" className="flex items-center gap-1 p-4 pb-0 md:pb-4">
                {mapButton}
            </div>
        );
    }

}
export default EventLocationMapButton