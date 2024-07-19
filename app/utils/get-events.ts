import { EventType } from "../pages/EventType";

export const getEvents = async () => {
    // const url = "https://adonix.hackillinois.org/event/";
    const url = "api/event";
    const response = await fetch(url);
    const json = await response.json();

    return json.events as EventType[];
}