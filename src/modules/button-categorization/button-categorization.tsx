'use client';
import { cn } from '@/lib/utils';
import { InfoIcon, SparklesIcon, LaptopIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// https://codesandbox.io/p/sandbox/framer-motion-familys-fluid-button-f68w5h

const badgeStylesVariants = {
  base: 'font-display inline-flex w-fit items-center gap-x-1.5 rounded-lg border px-3 py-1 font-medium',
  idle: 'border-neutral-100 bg-neutral-100 text-neutral-500',
  analyzing: 'border-neutral-100 bg-white text-blue-500',
  success: 'border-[#DCF3FF] bg-[#DCF3FF] text-[#4D83A1]',
};

const BadgeCategorization = () => {
  const [state, setState] = useState<'idle' | 'analyzing' | 'success'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => (prev === 'idle' ? 'analyzing' : prev === 'analyzing' ? 'success' : 'idle'));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative space-y-4">
      <style jsx>{`
        .trail {
          background: radial-gradient(100% 100% at right, #8abad3, transparent 50%);
          offset-path: border-box;
          offset-anchor: 100% 50%;
          animation: trail infinite linear;
          animation-duration: 6s;
        }

        @keyframes trail {
          to {
            offset-distance: 100%;
          }
        }
      `}</style>

      <div className="flex flex-col items-center gap-y-2 overflow-hidden">
        <motion.div
          transition={{
            type: 'ease',
            ease: 'easeInOut',
          }}
          style={{
            transformOrigin: 'left center',
          }}
          className={cn(badgeStylesVariants.base, badgeStylesVariants[state])}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {state === 'idle' && (
              <motion.span
                layout
                className="inline-flex items-center gap-x-1.5 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                Uncategorised
                <InfoIcon size={16} />
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence mode="popLayout" initial={false}>
            {state === 'analyzing' && (
              <motion.span
                layout
                className="inline-flex items-center gap-x-1.5 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                Categorizing
                <SparklesIcon size={16} />
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence mode="popLayout" initial={false}>
            {state === 'success' && (
              <motion.span
                layout
                className="inline-flex items-center gap-x-1.5 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                Software
                <LaptopIcon size={16} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key="box-example"
            id="box-example"
            className="relative z-20 overflow-hidden rounded-[20px]"
          >
            <div className="absolute inset-0 z-[-1] rounded-[20px] bg-neutral-200">
              <div className="trail absolute top-0 left-0 z-10 aspect-[2/1] w-[100px]" />
              <div className="trail absolute right-0 bottom-0 z-10 aspect-[2/1] w-[100px]" />
            </div>

            <div
              style={{
                background: 'linear-gradient(#ffffff, #e0e0e0) padding-box transparent',
                padding: '0 1.5rem',
                border: '2px solid transparent',
                borderRadius: '20px',
                textAlign: 'center',
              }}
            >
              <p> contenido</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* <div className="font-display inline-flex w-fit items-center gap-x-1.5 rounded-lg border border-neutral-100 bg-neutral-100 px-3 py-1 font-medium text-neutral-500">
          Uncategorised
          <InfoIcon size={16} />
        </div> */}

        {/* <div className="font-display inline-flex w-fit items-center gap-x-1.5 rounded-lg border border-blue-500 bg-white px-3 py-1 font-medium text-blue-500">
          Categorizing
          <SparklesIcon size={16} />
        </div> */}

        {/* <div className="font-display inline-flex w-fit items-center gap-x-1.5 rounded-lg border border-[#DCF3FF] bg-[#DCF3FF] px-3 py-1 font-medium text-[#4D83A1]">
          <LaptopIcon size={18} />
          Software
        </div> */}
      </div>
    </div>
  );
};

export default BadgeCategorization;
