import * as React from "react"

import SCHEDULE_INFO from "@/app/constants/event-type-icons";

const CategoryIcon: React.FC<{
    category: string;
    dark?: boolean;
}> = (props) => {
    const iconData = SCHEDULE_INFO[props.category];

    return (
        <div>
            {iconData && <iconData.icon className={`w-6 h-6 ${props.dark ? "text-amber-600" : "text-neutral-300"}`} />}
        </div>
    );
}
export default CategoryIcon