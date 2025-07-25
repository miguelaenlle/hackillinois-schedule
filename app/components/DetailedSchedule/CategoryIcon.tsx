import SCHEDULE_INFO from "@/app/constants/event-type-icons";
import { FC } from "react";

const CategoryIcon: FC<{
    category: string;
    dark?: boolean;
    customWidth?: string;
    customHeight?: string;
}> = (props) => {
    const iconData = SCHEDULE_INFO[props.category];

    return (
        <div>
            {iconData && <iconData.icon className={`${props.customWidth ?? "w-6"} ${props.customHeight ?? "h-6"} ${props.dark ? "text-[#CE9258]" : "text-white"}`} aria-hidden={true} />}
        </div>
    );
}
export default CategoryIcon