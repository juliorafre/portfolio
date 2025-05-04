'use client';

import { MapIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Mapbox from './mapbox';

const MapInteraction = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="map-interaction-container" className="grid h-full w-full place-items-center">
      <AnimatePresence initial={false} mode="popLayout">
        {!isOpen && (
          <motion.button
            layout
            layoutId="map-interaction"
            onClick={toggle}
            exit={{ filter: 'blur(4px)' }}
            transition={{
              duration: 0.25,
              type: 'spring',
              bounce: 0,
              ease: 'easeInOut',
            }}
            className="rounded-full border border-[#C4C4C4] bg-[#f0eeee] px-4 py-2 transition-colors hover:bg-slate-100"
          >
            <motion.span
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.125 } }}
              exit={{ opacity: 0 }}
              className="font-display flex items-center gap-2"
            >
              <MapIcon size={20} /> View on Map
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} mode="popLayout">
        {isOpen && (
          <motion.div
            ref={mapRef}
            id="map-interaction"
            layout
            layoutId="map-interaction"
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
              type: 'spring',
              bounce: 0.3,
              ease: 'easeInOut',
            }}
            className="relative grid h-[300px] w-[300px] place-items-center overflow-hidden rounded-3xl"
          >
            <button
              id="button-close-map"
              onClick={toggle}
              className="absolute top-0 right-0 z-10 mt-2 mr-2 rounded-full bg-white/70 p-2 shadow-sm backdrop-blur-sm transition-colors hover:bg-slate-100"
            >
              <XIcon size={20} strokeWidth={4} className="text-gray-500" />
            </button>

            {/* <img src="/images/map.png" alt="map-interaction" className="w-full h-full object-cover" /> */}
            <motion.div
              exit={{
                filter: 'blur(4px)',
              }}
            >
              <Mapbox />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-0 left-0 z-10 m-2 flex h-[55px] w-[120px] flex-col rounded-xl bg-white/70 px-3 py-2 leading-none shadow-sm backdrop-blur-sm"
            >
              <p className="text-xs font-semibold text-[#646464]">Location</p>
              <p className="text-base font-bold">New York</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapInteraction;
