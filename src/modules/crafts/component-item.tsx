"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import type { ComponentItemType } from "@/types/crafts";

const ComponentItem = ({ component }: { component: ComponentItemType }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      className="-mx-3 relative flex w-[calc(100%+0.75rem)] items-center justify-between gap-x-4 rounded-lg px-3 py-3 transition-all duration-150 hover:bg-white active:scale-99 active:bg-gray-100 md:hover:bg-transparent active:dark:bg-neutral-900 hover:dark:bg-neutral-800"
      href={component.href}
      key={component.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.span
          className="inset-0 z-10 h-auto w-full rounded-lg bg-white hidden md:absolute dark:bg-neutral-800"
          layoutId="bg-hovered"
          transition={{ type: "spring", bounce: 0.3, duration: 0.25 }}
        />
      )}
      <span className="z-20 grow whitespace-nowrap">{component.text}</span>
      <div className="z-20 w-full grow border-gray-300 border-b border-dashed" />
      <div className="z-20 flex gap-x-2 text-muted-foreground">
        {component.tags.map((tag) => {
          return (
            <span
              className="rounded-full bg-neutral-100 px-2 text-sm dark:bg-transparent dark:text-white"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </Link>
  );
};

export default ComponentItem;
