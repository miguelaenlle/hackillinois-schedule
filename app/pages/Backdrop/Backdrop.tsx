import { FC } from "react";
const Backdrop: FC<{}> = () => {
    return (

        <video
            muted
            autoPlay
            playsInline
            loop
            className={
                "absolute min-w-full min-h-full max-h-none z-2 blur-sm object-cover "
            }
        >
        <source src={"/static/videos/bg-video.mp4"} type="video/mp4" className="object-cover w-full" />
            Your browser does not support the video tag.
        </video>

    );
}
export default Backdrop