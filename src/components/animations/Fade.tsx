'use client';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const container = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      staggerChildren: 0.129,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
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
    <motion.div className={cn(className)} variants={container} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
};

const FadeItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div className={cn(className)} variants={item} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
};

export { FadeContainer, FadeItem };
