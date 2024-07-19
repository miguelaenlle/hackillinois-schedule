import { createContext, FC, PropsWithChildren, useCallback, useEffect, useState } from "react"

interface KeyboardEventContextInterface {
    selectedMode: "schedule" | "daySelector",
    enterRefreshTrigger: number,
    escapeRefreshTrigger: number
}

export const KeyboardEventContext = createContext<KeyboardEventContextInterface | null>(null);

const KeyboardEventProvider: FC<PropsWithChildren<{}>> = (props) => {
    const [selectedMode, setSelectedMode] = useState<"schedule" | "daySelector">("schedule");
    const [enterRefreshTrigger, setEnterRefreshTrigger] = useState<number>(0);
    const [escapeRefreshTrigger, setEscapeRefreshTrigger] = useState<number>(0);

    const handleClickEnter = useCallback((e: any) => {

        console.log("Key", e.key);

        if (e.key === "Enter") {
            setEnterRefreshTrigger((prev) => prev + 1);
        } else if (e.key === "Escape") {
            setEscapeRefreshTrigger((prev) => prev + 1);
        }
    }, [setEnterRefreshTrigger])

    useEffect(() => {
        window.addEventListener('keydown', handleClickEnter);
        return () => {
            window.removeEventListener('keydown', handleClickEnter);
        }
    }, [handleClickEnter])


    const handleSwapMode = useCallback((e: any) => {
        if (e.key === "ArrowLeft") {
            setSelectedMode("daySelector");
        } else if (e.key === "ArrowRight") {
            setSelectedMode("schedule");
        }
    }, [setSelectedMode])

    useEffect(() => {
        window.addEventListener('keydown', handleSwapMode);
        return () => {
            window.removeEventListener('keydown', handleSwapMode);
        }
    }, [handleSwapMode])

    return (
        <KeyboardEventContext.Provider value={{ selectedMode, enterRefreshTrigger, escapeRefreshTrigger }}>
            {props.children}
        </KeyboardEventContext.Provider>
    )
}

export default KeyboardEventProvider;