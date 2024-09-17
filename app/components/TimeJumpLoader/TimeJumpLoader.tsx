import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const TimeJumpLoader: React.FC<{
    splashLoading: boolean;
    onSkipSplashLoader: () => void;
}> = (props) => {
    const [skipDisabled, setSkipDisabled] = React.useState(true);
    const [skipShown, setSkipShown] = React.useState(false);

    const handleSkipSplashLoader = () => {
        props.onSkipSplashLoader();
    }

    const handleUpdateSkipShown = () => {
        const userHasSeenAnimation = localStorage.getItem("userHasSeenAnimation");
        console.log("userHasSeenAnimation", userHasSeenAnimation);
        if (userHasSeenAnimation === "true") {
            setSkipShown(true);
        } else {
            setSkipShown(false);
        }
    }

    React.useEffect(() => {
        handleUpdateSkipShown();
    }, [])

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            localStorage.setItem("userHasSeenAnimation", "true");
            setSkipDisabled(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [])


    return (
        <div className="flex flex-col justify-center items-center h-full gap-2 mb-20">
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    `INITIALIZING TIME JUMP TO:`,
                    1000,
                    `INITIALIZING TIME JUMP TO: HACKILLINOIS 2025`,
                    100000
                ]}
                wrapper="span"
                speed={50}
                className="text-lg md:text-xl font-mono text-teal-500 text-center"
                repeat={1}
                cursor={false}
            />
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    5000,
                    "TIME JUMP READY"
                ]}
                wrapper="span"
                speed={50}
                className="text-xl font-mono text-green-500 mt-5"
                repeat={1}
                cursor={false}
            />
            {skipShown && (            
                <p className={`text-cyan-500 p-3 mt-10 hover:cursor-pointer ${skipDisabled ? "opacity-90" : ""}`} onClick={handleSkipSplashLoader}>Skip to Schedule →</p>
            )}
        </div>
    )
}

export default TimeJumpLoader;