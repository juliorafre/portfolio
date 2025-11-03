"use client";

import { memoriesData } from "@/modules/infinite-canvas/data";
import MemoryItem from "./memory-item";

interface MemoryGridProps {
  idPrefix: number;
  isAriaHidden?: boolean;
  handleMemoryClick: ({
    id,
    layoutIdPrefix,
  }: {
    id: number;
    layoutIdPrefix: number;
  }) => void;
}

const MemoryGrid = ({
  idPrefix,
  isAriaHidden = false,
  handleMemoryClick,
}: MemoryGridProps) => {
  return (
    <div
      aria-hidden={isAriaHidden}
      className="grid grid-cols-5 gap-[5cqw] p-[5cqw] will-change-transform"
      style={{
        width: "max-content",
      }}
    >
      {memoriesData.map((memory) => {
        return (
          <MemoryItem
            key={`img-${memory.id}`}
            layoutIdPrefix={idPrefix}
            memory={memory}
            onMemoryClick={handleMemoryClick}
          />
        );
      })}
    </div>
  );
};

export default MemoryGrid;
