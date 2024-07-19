import SCHEDULE_INFO from "@/app/constants/event-type-icons";
import { FC, useMemo } from "react";
import Tag from "../shared/Tag";

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