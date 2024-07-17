import { FC } from "react";

const Tag: FC<{
    icon?: React.ReactNode
    text: string;
    bgColor?: string;
    opacity?: string;
    disableBgColor?: boolean;
}> = (props) => {
    return (
        <div className={`flex items-center gap-1 ${props.disableBgColor ? "" : props.bgColor} p-2 py-1 rounded-md w-max ${props.opacity}`}>
            {props.icon && props.icon}
            <p className={`${props.disableBgColor ? "text-black" : "font-semibold"} text-nowrap`}>{props.text}</p>
        </div>
    );
}
export default Tag
