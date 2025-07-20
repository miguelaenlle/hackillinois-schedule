import { EventTypeWithMomentDates } from "@/app/types/EventType";
import { motion } from 'framer-motion';
import { Map } from './Map';
import { useEffect, useState } from "react";

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
  const [eventHoverEnabled, setEventHoverEnabled] = useState(false);
  useEffect(() => {
    // Enable event hover after a short delay to allow initial animations to complete
    const timer = setTimeout(() => {
      setEventHoverEnabled(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [])

    return <div
        className="relative w-full h-full"
    > 
      <motion.h2
        className="absolute top-[15%] left-0 w-full text-gray-400 text-3xl font-bold mb-4 text-center opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: 'easeOut' }}
      >
        Map of Atlantis
      </motion.h2>
    
      <motion.div
          variants={dropInVariants}
          initial="hidden"
          animate="visible"
      >
          <Map
            displayedEvents={props.displayedEvents}
            hoveredEventId={eventHoverEnabled ? props.hoveredEventId : undefined}
            onHoverEventId={props.onHoverEventId}
            onSelectEvent={props.onSelectEvent}
          />
      </motion.div>
    </div>
};
