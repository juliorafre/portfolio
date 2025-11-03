"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import type { Memory } from "@/modules/infinite-canvas/data";

const MotionImage = motion.create(Image);

interface MemoryItemProps {
  memory: Memory; // Use the actual type for memory
  onMemoryClick: ({
    id,
    layoutIdPrefix,
  }: {
    id: number;
    layoutIdPrefix: number;
  }) => void;
  layoutIdPrefix: number; // To differentiate layoutIds for duplicated items
}

const MemoryItem = ({
  memory,
  onMemoryClick,
  layoutIdPrefix,
}: MemoryItemProps) => {
  const layoutId = `${layoutIdPrefix}-memory-item-${memory.id}`;

  return (
    <button
      className="image-wrapper aspect-square w-[15cqw] scale-0 transform cursor-pointer select-none opacity-0"
      onClick={() => {
        onMemoryClick({
          id: memory.id,
          layoutIdPrefix,
        });
      }}
      type="button"
    >
      <AnimatePresence initial={false} mode="popLayout">
        <MotionImage
          alt="Infinite canvas"
          className="pointer-events-none block size-full select-none object-contain drop-shadow-xl"
          height={500}
          layoutId={layoutId}
          priority
          src={`/images/postcards/${memory.id}/${memory.id}.png`}
          transition={{
            type: "spring",
            bounce: 0.15,
          }}
          width={500}
        />
      </AnimatePresence>
    </button>
  );
};

export default MemoryItem;
