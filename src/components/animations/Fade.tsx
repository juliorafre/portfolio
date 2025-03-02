'use client';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: 'blur(4px)',
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
};

const FadeContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(className)}
      transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
    >
      {children}
    </motion.div>
  );
};


const FadeDiv = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div className={cn(className)} variants={item}>
      {children}
    </motion.div>
  );
};

export { FadeContainer, FadeDiv };
