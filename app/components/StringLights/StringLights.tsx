import * as React from "react"
const StringLights: React.FC<{}> = (props) => {
    return (
        <div className="relative w-40" aria-hidden="true">
            <img className="absolute top-0 left-0 blur-[1px] animate-pulse" src="/static/images/lights-only.png" />
            <img className="absolute top-0 left-0" src="/static/images/lights-base.png" />
        </div>
    );
}
export default StringLights