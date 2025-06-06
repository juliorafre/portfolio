'use client';

import { cn } from '@/lib';
import { motion } from 'motion/react';
import { useState } from 'react';

const InfiniteVeil = () => {
  const [isVeilHidden, setIsVeilHidden] = useState(false);

  const handleHideVeil = () => {
    setIsVeilHidden(true);
  };

  return (
    <motion.div
      id="infinite-canvas-veil"
      className={cn(
        'absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-4 bg-neutral-200/50 backdrop-blur-sm',
        isVeilHidden && 'animate-hide-veil pointer-events-none'
      )}
    >
      <p className="font-instrument-serif mt-6 text-4xl dark:text-gray-800">Memories</p>
      <button
        className="inset-shadow-lg inset-shadow-white-200/50 h-[46px] cursor-pointer rounded-full border border-neutral-700/10 bg-neutral-200/80 px-6 py-1 text-sm transition-all hover:bg-neutral-200/90 md:h-auto dark:text-gray-800"
        onClick={handleHideVeil}
      >
        Explore
      </button>
    </motion.div>
  );
};

export default InfiniteVeil;
