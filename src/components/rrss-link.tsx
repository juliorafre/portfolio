"use client";
import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "motion/react";

type RRSSPlatform = "email" | "rrss";

interface RRSSLinkProps {
  platform: RRSSPlatform;
  href: string;
  children?: React.ReactNode;
}

export function RRSSLink({ platform = "rrss", href, children }: RRSSLinkProps) {
  const isExternal = platform !== "email";

  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      className="cursor-pointer"
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <motion.span
        variants={{
          initial: {
            y: 0,
            scale: 1,
          },
          hover: {
            scale: [1, 0.945, 1], // shrink then bounce back
            y: -4,
          },
        }}
        transition={{
          scale: {
            duration: 0.35,
            times: [0, 0.43, 1], // 0.15s squeeze, 0.2s bounce
            ease: [
              [0.72, 0.17, 0.17, 1], // default ease (shrink)
              [0.34, 1.42, 0.64, 1], // bouncy ease (recovery)
            ],
          },

          y: {
            type: "spring",
            visualDuration: 0.25,
            bounce: 0.5,
            delay: 0.1,
          },
        }}
        className="flex size-full items-center rounded-full bg-neutral-200/50 py-0.5 pr-2 pl-2.5 font-medium text-black hover:bg-neutral-200 dark:bg-neutral-800 dark:text-foreground dark:hover:bg-neutral-700"
      >
        {children}
        <ArrowUpRightIcon size={16} />
      </motion.span>
    </motion.a>
  );
}
