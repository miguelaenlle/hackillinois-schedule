import { Moment } from "moment";

export type LocationType = {
    description: string;
    tags: string[];
    latitude: number;
    longitude: number;
}

export type EventCategoryType = "MEAL" | "OTHER" | "MINIEVENT" | "WORKSHOP" | "QNA" | "SPEAKER";

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
