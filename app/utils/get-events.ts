import { EventType } from "../types/EventType";

export const getEvents = async () => {
    const url = "api/event";
    const response = await fetch(url);
    const json = await response.json();

    return json.events as EventType[];
}