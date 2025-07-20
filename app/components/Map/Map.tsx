import { LANDMARKS, LOCATIONS, MAP_SVG_HEIGHT, MAP_SVG_WIDTH } from '@/app/constants/map-landmarks-and-locations';
import { EventTypeWithMomentDates } from '@/app/types/EventType';
import { convertNumberToRomanNumeral } from '@/app/utils/convert-number-to-roman-numeral';
import MapSvg from '@/public/static/images/map/map.svg';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

interface MapProps {
    hoveredEventId?: string;
    displayedEvents: EventTypeWithMomentDates[];
    onHoverEventId: (eventId: string | undefined) => void;
    onSelectEvent: (event: EventTypeWithMomentDates | undefined) => void;
}

export const Map = ({ displayedEvents, hoveredEventId, onHoverEventId, onSelectEvent }: MapProps) => {
    const hoveredEventIndex = displayedEvents.findIndex(event => event.eventId === hoveredEventId);

    const numLandmarks = LANDMARKS.length;
    const numEvents = displayedEvents.length;

    // Select the indices of landmarks to use.
    let indices: number[];
    if (numEvents === 0) {
        indices = [];
    } else if (numEvents === 1) {
        indices = [ Math.floor(numLandmarks / 2) ];
    } else if (numEvents >= numLandmarks) {
        // TODO: This should more dynamically handle the case that there are more events than landmarks.
        indices = Array.from(Array(numLandmarks).keys());
    } else {
        // Select evenly spaced landmark indices based on the number of events.
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
                className="object-fit pointer-events-none"
            />
            <svg
                viewBox={`0 0 ${MAP_SVG_WIDTH} ${MAP_SVG_HEIGHT}`}
                className="absolute inset-0 w-full h-full"
            >
                {LOCATIONS.map((loc, i) => {
                    const width = loc.width;
                    const height = loc.height;
                    return (
                        <image
                            key={`poi-${i}`}
                            href={`/static/images/map/${loc.filename}`}
                            x={loc.x - width/2}
                            y={loc.y - height/2}
                            width={width}
                            height={height}
                            className={`pointer-events-none opacity-20`}
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
                        className="overflow-visible cursor-pointer"
                        onClick={() => {
                            onSelectEvent(displayedEvents[i]);
                        }}
                        onMouseEnter={() => {
                            onHoverEventId(displayedEvents[i].eventId);
                        }}
                        data-tooltip-id={`location-tooltip-${i}`}
                        data-tooltip-content={displayedEvents[i].name}
                    >
                        <div 
                            className="w-full h-full flex items-center justify-center overflow-visible"
                        >
                            <div
                                style={{
                                    width: isHovered ? '20px' : '10px',
                                    height: isHovered ? '20px' : '10px',
                                }}
                                className={`
                                    flex items-center justify-center
                                    rounded-full
                                    ${isHovered ? 'bg-[#866443]' : 'bg-[#bc966b]'}
                                `}
                            >
                                <p className={`text-[10px] ${isHovered ? 'opacity-100' : 'opacity-0'}`}>{convertNumberToRomanNumeral(i+1).toLowerCase()}</p>
                            </div>
                        </div>
                        <Tooltip id={`location-tooltip-${i}`} isOpen={isHovered} />
                    </foreignObject>
            })}
            </svg>
        </div>
    )
}