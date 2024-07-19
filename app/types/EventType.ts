import { Moment } from "moment";
import { LocationType } from "./LocationType";

export type EventType = {
    eventId: string;
    name: string;
    description: string;
    startTime: number;
    endTime: number;
    locations: LocationType[];
    eventType: string;
    points: number;
    isAsync: boolean;
    mapImageUrl: string;
    isPro: boolean;
}

export type EventTypeWithMomentDates = EventType & {
    startTimeMoment: Moment;
    endTimeMoment: Moment;
}