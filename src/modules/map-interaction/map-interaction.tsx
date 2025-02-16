'use client';

import { MapIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Mapbox from './mapbox';

const MapInteraction = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="map-interaction-container" className="h-screen w-full grid place-items-center">
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
            className="bg-[#f0eeee] border border-[#C4C4C4] rounded-full px-4 py-2 hover:bg-slate-100 transition-colors"
          >
            <motion.span layout initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.125 } }} exit={{ opacity: 0 }} className="flex items-center gap-2 font-display">
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
            className="relative h-[300px] w-[300px] rounded-3xl overflow-hidden grid place-items-center"
          >
            <button id="button-close-map" onClick={toggle} className="absolute z-10 top-0 right-0 mt-2 mr-2 bg-white/70 backdrop-blur rounded-full p-2 shadow hover:bg-slate-100 transition-colors">
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
              className="absolute z-10 bottom-0 left-0 m-2 rounded-xl shadow bg-white/70 w-[120px] h-[55px] flex flex-col py-2 px-3 backdrop-blur leading-none">
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
