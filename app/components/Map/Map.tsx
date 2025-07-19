import React from 'react';
import MapSvg from '@/public/static/images/map.svg';
import Image from 'next/image';
import { EventTypeWithMomentDates } from '@/app/types/EventType';
import { convertNumberToRomanNumeral } from '@/app/utils/convert-number-to-roman-numeral';

interface Landmark {
    x: number;
    y: number;
}

const LANDMARKS: Landmark[] = [
  { x:  60, y: 115 },
  { x:  89, y: 97 },
  { x: 130, y: 83 },
  { x: 170, y: 84 },
  { x: 205, y: 100 },
  { x: 210, y: 125 },
  { x: 200, y: 150 },
  { x: 179, y: 180 },
  { x: 165, y: 205 },
  { x: 165, y: 235 },
  { x: 195, y: 245 },
  { x: 224, y: 240 },
  { x: 250, y: 235 },
  { x: 285, y: 230 },
];

const WIDTH  = 380;
const HEIGHT = 342;

interface MapProps {
    selectedEvent: EventTypeWithMomentDates | undefined;
    hoveredEventId?: string;
    displayedEvents: EventTypeWithMomentDates[];
}

export const Map = ({ selectedEvent, displayedEvents, hoveredEventId }: MapProps) => {
    const selectedEventIndex = displayedEvents.findIndex(event => event.eventId === selectedEvent?.eventId);
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
    
    return (
        <div 
            className="relative w-full h-[200px] md:h-[500px]"
        >
            <Image
                src={MapSvg}
                alt="Map of the event location"
                fill
                className="object-fit"
            />
            <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                {selectedLandmarks.map((lm, i) => {
                    const isHovered = i === hoveredEventIndex
                    return <foreignObject
                        key={i}
                        x={lm.x - 5}
                        y={lm.y - 5}
                        width={20}
                        height={20}
                        onClick={() => console.log('clicked landmark', i)}
                    >
                        <div
                            style={{
                                width: isHovered ? '20px' : '10px',
                                height: isHovered ? '20px' : '10px',
                            }}
                            className={`
                                flex items-center justify-center
                                bg-[#655240ff]
                                rounded-full
                                transition-all
                            `}
                            onMouseEnter={() => {
                                
                            }}
                        >
                            {isHovered && (
                                <p className='text-sm'>{convertNumberToRomanNumeral(i+1).toLowerCase()}</p>
                            )}

                        </div>
                    </foreignObject>
            })}
            </svg>
        </div>
    )
}