import { IconType } from "react-icons";
import { GiPartyFlags, GiTalk } from "react-icons/gi";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { PiForkKnifeFill, PiMicrophoneStageFill } from "react-icons/pi";
import { TbCalendarEvent } from "react-icons/tb";

const SCHEDULE_INFO: {
    [key: string]: {
        icon: IconType,
        displayText: string,
        bgColor: string
    }
} = {
    MEAL: {
        icon: PiForkKnifeFill,
        displayText: "Meal",
        bgColor: "bg-green-500"
    },
    OTHER: {
        icon: TbCalendarEvent,
        displayText: "Other",
        bgColor: "bg-blue-500"
    },
    MINIEVENT: {
        icon: GiPartyFlags,
        displayText: "Mini Event",
        bgColor: "bg-amber-600"
    },
    WORKSHOP: {
        icon: HiCodeBracketSquare,
        displayText: "Workshop",
        bgColor: "bg-teal-500"
    },
    QNA: {
        icon: GiTalk,
        displayText: "Q&A",
        bgColor: "bg-red-500"
    },
    SPEAKER: {
        icon: PiMicrophoneStageFill,
        displayText: "Speaker",
        bgColor: "bg-indigo-500"
    }
}

export default SCHEDULE_INFO