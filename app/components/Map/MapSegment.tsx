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
    y: '0%',    
    rotate: -20, 
  },
  visible: {
    opacity: 1,
    y: '50%',
    rotate: 0,
    transition: {
      type: 'tween',
      duration: 2,
      ease: 'easeOut',
    },
  }
};

export const MapSegment = (props: MapSegmentProps) => {
  const [eventHoverEnabled, setEventHoverEnabled] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setEventHoverEnabled(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

    return <div
        className="relative w-full h-full"
    > 
      <motion.div
          variants={dropInVariants}
          initial="hidden"
          animate="visible"
      >
        <motion.h2
          className="w-full text-gray-200 text-3xl font-bold mb-4 text-center opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, ease: 'easeOut' }}
        >
          Map of Atlantis
        </motion.h2>
      
          <Map
            displayedEvents={props.displayedEvents}
            hoveredEventId={eventHoverEnabled ? props.hoveredEventId : undefined}
            onHoverEventId={props.onHoverEventId}
            onSelectEvent={props.onSelectEvent}
          />
      </motion.div>
    </div>
};
