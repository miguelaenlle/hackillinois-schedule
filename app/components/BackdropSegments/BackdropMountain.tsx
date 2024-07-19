import * as React from "react"
const BackdropMountain: React.FC<{}> = (props) => {
    return (
        <div className="absolute left-0 w-full overflow-x-hidden bottom-0">
            <img
                src="/static/images/bg-mountains.png"
                className="w-full h-48 md:h-96"
                aria-hidden="true"
            />
        </div>
    );
}
export default BackdropMountain