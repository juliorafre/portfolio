"use client";

import { MapIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Mapbox from "./mapbox";

const MapInteraction = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="grid h-full w-full place-items-center"
      id="map-interaction-container"
    >
      <AnimatePresence initial={false} mode="popLayout">
        {!isOpen && (
          <motion.button
            className="rounded-full border border-[#C4C4C4] bg-[#f0eeee] px-4 py-2 transition-colors hover:bg-slate-100"
            exit={{ filter: "blur(4px)" }}
            layout
            layoutId="map-interaction"
            onClick={toggle}
            transition={{
              duration: 0.25,
              type: "spring",
              bounce: 0,
              ease: "easeInOut",
            }}
          >
            <motion.span
              animate={{ opacity: 1, transition: { delay: 0.125 } }}
              className="flex items-center gap-2 font-display"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              layout
            >
              <MapIcon size={20} /> View on Map
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} mode="popLayout">
        {isOpen && (
          <motion.div
            className="relative grid h-[300px] w-[300px] place-items-center overflow-hidden rounded-3xl"
            exit={{
              opacity: 0,
            }}
            id="map-interaction"
            layout
            layoutId="map-interaction"
            ref={mapRef}
            transition={{
              duration: 0.45,
              type: "spring",
              bounce: 0.3,
              ease: "easeInOut",
            }}
          >
            <button
              type="button"
              className="absolute top-0 right-0 z-10 mt-2 mr-2 rounded-full bg-white/70 p-2 shadow-sm backdrop-blur-sm transition-colors hover:bg-slate-100"
              id="button-close-map"
              onClick={toggle}
            >
              <XIcon className="text-gray-500" size={20} strokeWidth={4} />
            </button>

            {/* <img src="/images/map.png" alt="map-interaction" className="w-full h-full object-cover" /> */}
            <motion.div
              exit={{
                filter: "blur(4px)",
              }}
            >
              <Mapbox />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 left-0 z-10 m-2 flex h-[55px] w-[120px] flex-col rounded-xl bg-white/70 px-3 py-2 leading-none shadow-sm backdrop-blur-sm"
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: -10 }}
            >
              <p className="font-semibold text-[#646464] text-xs">Location</p>
              <p className="font-bold text-base">New York</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapInteraction;
