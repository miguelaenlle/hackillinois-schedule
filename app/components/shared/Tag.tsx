import * as React from "react"
const Tag: React.FC<{
    text: string;
    bgColor: string;
}> = (props) => {
    return (
        <div className={`${props.bgColor} p-2 py-1 rounded-md`}>
            <p className="font-semibold">{props.text}</p>
        </div>
    );
}
export default Tag