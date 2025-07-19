import React, { useMemo } from 'react';
import MapSvg from '@/public/static/images/map.svg';
import Image from 'next/image';
import { EventTypeWithMomentDates } from '@/app/types/EventType';
import { convertNumberToRomanNumeral } from '@/app/utils/convert-number-to-roman-numeral';

interface Landmark {
    x: number;
    y: number;
}

interface Location extends Landmark {
    filename: string;
    width: number; 
    height: number;
}

interface LandmarkPoint extends Landmark {
    closestLocationIndex: number;
}

const LANDMARKS: LandmarkPoint[] = [
  { x:  60, y: 115 , closestLocationIndex: -1},
  { x:  89, y: 97, closestLocationIndex: -1 },
  { x: 130, y: 83, closestLocationIndex: -1 },
  { x: 170, y: 84, closestLocationIndex: -1 },
  { x: 205, y: 100, closestLocationIndex: 0 },
  { x: 210, y: 125, closestLocationIndex: 0 },

  { x: 200, y: 150, closestLocationIndex: 1 },

  { x: 179, y: 180, closestLocationIndex: 2 },
  { x: 165, y: 205, closestLocationIndex: 2 },

  { x: 165, y: 235, closestLocationIndex: 3 },
  { x: 195, y: 245, closestLocationIndex: 3 },
  { x: 224, y: 240, closestLocationIndex: 3 },
  { x: 250, y: 235, closestLocationIndex: 4 },
  { x: 285, y: 230, closestLocationIndex: 5 },
];

const LOCATIONS: Location[] = [
    { x: 225, y: 98, filename: 'columns-1.svg', width: 32, height: 32 },
    { x:  223, y: 148, filename: 'house.svg', width: 40, height: 40 },
    { x: 115, y: 175, filename: 'large-building.svg',   width: 80, height: 40 },
    { x: 198, y: 220, filename: 'medium-building.svg', width: 40, height: 40 },
    { x: 257, y: 261, filename: 'columns-2.svg', width: 32, height: 32 },
    { x: 287, y: 265, filename: 'statue.svg', width: 40, height: 40 },
];

const WIDTH  = 380;
const HEIGHT = 342;

interface MapProps {
    hoveredEventId?: string;
    displayedEvents: EventTypeWithMomentDates[];
    onHoverEventId: (eventId: string | undefined) => void;
    onSelectEvent: (event: EventTypeWithMomentDates | undefined) => void;
}

export const Map = ({ displayedEvents, hoveredEventId, onHoverEventId, onSelectEvent }: MapProps) => {
    const hoveredEventIndex = displayedEvents.findIndex(event => event.eventId === hoveredEventId);

    const numLandmarks = LANDMARKS.length;
    const numEvents    = displayedEvents.length;

    let indices: number[];
    if (numEvents === 0) {
        indices = [];
    } else if (numEvents === 1) {
        indices = [ Math.floor(numLandmarks / 2) ];
    } else if (numEvents >= numLandmarks) {
        indices = Array.from(Array(numLandmarks).keys());
    } else {
        indices = Array.from({ length: numEvents }, (_, i) =>
            Math.round(i * (numLandmarks - 1) / (numEvents - 1))
        );
    }

    const selectedLandmarks = indices.map(i => LANDMARKS[i]);
    const closestLocationIndex = useMemo(() => {
        if (hoveredEventIndex === -1) return -1;
        return selectedLandmarks[hoveredEventIndex].closestLocationIndex;
    }, [hoveredEventIndex, selectedLandmarks]);
    
    return (
        <div 
            className="relative w-full h-[200px] md:h-[500px]"
        >
            <Image
                src={MapSvg}
                alt="Map of the event location"
                fill
                className="object-fit pointer-events-none"
            />
            <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                className="absolute inset-0 w-full h-full"
            >
                {LOCATIONS.map((loc, i) => {
                    const width = loc.width;
                    const height = loc.height;
                    const isClosest = closestLocationIndex === i;
                    return (
                        <image
                            key={`poi-${i}`}
                            href={`/static/images/map-locations-of-interest/${loc.filename}`}
                            x={loc.x - width/2}
                            y={loc.y - height/2}
                            width={width}
                            height={height}
                            className={`pointer-events-auto ${isClosest ? 'opacity-40' : 'opacity-20'} transition-opacity duration-300 bg-red-500 hover:opacity-40`}
                            onMouseEnter={() => {
                                const nearestLandmark = selectedLandmarks.findIndex((lm) => lm.closestLocationIndex === i);
                                if (nearestLandmark !== -1) {
                                    onHoverEventId(displayedEvents[nearestLandmark].eventId);
                                } else {
                                    onHoverEventId(undefined);
                                }
                            }}
                        />
                    );
                })}
                {selectedLandmarks.map((lm, i) => {
                    const isHovered = i === hoveredEventIndex
                    return <foreignObject
                        key={i}
                        x={lm.x - 10}
                        y={lm.y - 10}
                        width={20}
                        height={20}
                        onClick={() => {
                            onSelectEvent(displayedEvents[i]);
                        }}
                        onMouseEnter={() => {
                            onHoverEventId(displayedEvents[i].eventId);
                        }}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div
                                style={{
                                    width: isHovered ? '20px' : '10px',
                                    height: isHovered ? '20px' : '10px',
                                }}
                                className={`
                                    flex items-center justify-center
                                    rounded-full
                                    transition-all
                                    cursor-pointer
                                    ${isHovered ? 'bg-[#866443]' : 'bg-[#bc966b]'}
                                `}
                            >
                                <p className={`text-[10px] ${isHovered ? 'opacity-100' : 'opacity-0'} transition-all`}>{convertNumberToRomanNumeral(i+1).toLowerCase()}</p>
                            </div>
                        </div>
                    </foreignObject>
            })}
            </svg>
        </div>
    )
}