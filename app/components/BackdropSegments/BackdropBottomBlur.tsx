import * as React from "react"
const BackdropBottomBlur: React.FC<{}> = (props) => {
    return (
        <div className="flex absolute left-0 bottom-0 w-full h-5 md:h-10 z-30" style={{
            background: "linear-gradient(180deg, rgba(40, 42, 87, 0%) 0%, #282A57 100%)"
        }}>
        </div>
    );
}
export default BackdropBottomBlur