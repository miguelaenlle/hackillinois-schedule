import React from 'react';
import { motion } from 'framer-motion';
import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { Map } from './Map';
import { Submarine } from '../Backdrop/Submarine';
import { TreasureChest } from '../Backdrop/TreasureChest';

interface MapSegmentProps {
  hoveredEventId?: string;
  displayedEvents: EventTypeWithMomentDates[];
  onHoverEventId: (eventId: string | undefined) => void;
  onSelectEvent: (event: EventTypeWithMomentDates | undefined) => void;
}

const dropInVariants = {
  hidden: {
    opacity: 0,
    y: '0%',     // start completely above container
    rotate: -20,    // tilted in mid‑air
  },
  visible: {
    opacity: 1,
    y: '50%',
    rotate: 0,
    transition: {
      type: 'tween',    // switch from spring to tween for precise timing
      duration: 2,      // two seconds
      ease: 'easeOut',  // smooth easing
    },  
  }
};

export const MapSegment = (props: MapSegmentProps) => {
    return <div
        className="relative w-full h-full"
    >
        <motion.div
            variants={dropInVariants}
            initial="hidden"
            animate="visible"
        >
            <Map
              displayedEvents={props.displayedEvents}
              hoveredEventId={props.hoveredEventId}
              onHoverEventId={props.onHoverEventId}
              onSelectEvent={props.onSelectEvent}
            />
        </motion.div>

        <TreasureChest />
    </div>
};
