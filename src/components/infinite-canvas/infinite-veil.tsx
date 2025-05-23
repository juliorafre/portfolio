'use client';

import { motion } from 'motion/react';

const InfiniteVeil = () => {
  return (
    <motion.div
      layout
      id="infinite-canvas-veil"
      initial={{ opacity: 1, filter: 'blur(0px)' }}
      animate={{
        opacity: 0,
        filter: 'blur(10px)',
        transition: {
          duration: 0.6,
          delay: 2.5,
        },
        transitionEnd: {
          display: 'none',
        },
      }}
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-neutral-200/50 backdrop-blur-sm"
    >
      <p className="font-instrument-serif text-4xl">Memories</p>
    </motion.div>
  );
};

export default InfiniteVeil;
