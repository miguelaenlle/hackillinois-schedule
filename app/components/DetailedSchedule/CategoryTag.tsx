import { FC, useMemo } from "react";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { PiForkKnifeFill } from "react-icons/pi";
import { MdOutlineEventNote } from "react-icons/md";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { GiTalk } from "react-icons/gi";
import { IconType } from "react-icons";
import Tag from "../shared/Tag";
import SCHEDULE_INFO from "@/app/constants/event-type-icons";

const CategoryTag: FC<{
    text: string;
}> = (props) => {
    const categoryInformation = useMemo(() => {
        if (SCHEDULE_INFO[props.text]) {
            return SCHEDULE_INFO[props.text];
        }
    }, [props.text])

    return (
        <Tag
            icon={categoryInformation?.icon && <categoryInformation.icon />}
            text={categoryInformation?.displayText || props.text}
            bgColor={categoryInformation?.bgColor || "bg-gray-500"}
        />
    );
}
export default CategoryTag