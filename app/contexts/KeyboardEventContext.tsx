import { createContext, FC, PropsWithChildren, useCallback, useEffect, useState } from "react"

interface KeyboardEventContextInterface {
    selectedMode: "schedule" | "daySelector",
    handleSetSelectedMode: (mode: "schedule" | "daySelector") => void,
    enterRefreshTrigger: number,
    escapeRefreshTrigger: number
}

export const KeyboardEventContext = createContext<KeyboardEventContextInterface | null>(null);

const KeyboardEventProvider: FC<PropsWithChildren<{}>> = (props) => {
    const [selectedMode, setSelectedMode] = useState<"schedule" | "daySelector">("schedule");
    const [enterRefreshTrigger, setEnterRefreshTrigger] = useState<number>(0);
    const [escapeRefreshTrigger, setEscapeRefreshTrigger] = useState<number>(0);

    const handleSetSelectedMode = (mode: "schedule" | "daySelector") => {
        setSelectedMode(mode);
    }

    const handleClickEnter = useCallback((e: any) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setEnterRefreshTrigger((prev) => prev + 1);
        } else if (e.key === "Escape") {
            e.preventDefault();
            setEscapeRefreshTrigger((prev) => prev + 1);
        }
    }, [setEnterRefreshTrigger])

    useEffect(() => {
        window.addEventListener('keydown', handleClickEnter);
        return () => {
            window.removeEventListener('keydown', handleClickEnter);
        }
    }, [handleClickEnter])

    return (
        <KeyboardEventContext.Provider value={{ selectedMode, enterRefreshTrigger, escapeRefreshTrigger, handleSetSelectedMode }}>
            {props.children}
        </KeyboardEventContext.Provider>
    )
}

export default KeyboardEventProvider;