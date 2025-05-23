'use client';

import { Memory } from '@/modules/infinite-canvas/data';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

const MotionImage = motion.create(Image);

interface MemoryItemProps {
  memory: Memory; // Use the actual type for memory
  onMemoryClick: ({ id, layoutIdPrefix }: { id: number; layoutIdPrefix: number }) => void;
  layoutIdPrefix: number; // To differentiate layoutIds for duplicated items
}

const MemoryItem = ({ memory, onMemoryClick, layoutIdPrefix }: MemoryItemProps) => {
  const layoutId = `${layoutIdPrefix}-memory-item-${memory.id}`;

  return (
    <div
      role="button"
      onClick={() => {
        onMemoryClick({
          id: memory.id,
          layoutIdPrefix,
        });
      }}
      className="image-wrapper aspect-square w-[15cqw] scale-0 cursor-pointer opacity-0 select-none"
    >
      <AnimatePresence initial={false} mode="popLayout">
        <MotionImage
          layoutId={layoutId}
          className="block size-full object-contain drop-shadow-xl select-none"
          src={`/images/postcards/${memory.id}/${memory.id}.png`}
          alt="Infinite canvas"
          width={500}
          height={500}
        />
      </AnimatePresence>
    </div>
  );
};

export default MemoryItem;
