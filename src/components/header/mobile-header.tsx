// src/components/header/mobile-header.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib';
import { NavLinks } from './nav-links';

const MobileWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={cn(
        'inset-shadow-accent cursor-pointer overflow-hidden rounded-full bg-[rgba(243,243,243,0.7)] shadow-2xl backdrop-blur-sm md:hidden',
        className
      )}
      initial={{
        opacity: 0,
        y: 40,
      }}
      style={{
        boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
        border: '2px solid rgb(206, 206, 206)',
      }}
      transition={{
        type: 'spring',
        duration: 0.95,
        bounce: 0.3,
        ease: 'easeInOut',
        delay: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export const MobileHeader = () => {
  return (
    <div className="fixed bottom-0 left-1/2 z-[999] flex h-auto w-full translate-x-[-50%] items-center justify-between overflow-hidden px-8 py-4">
      <MobileWrapper className="self-start">
        <Link href="/">
          <Image
            alt="logo"
            className="m-[5px] size-10 rounded-full md:size-10"
            height={40}
            src="/images/home/image.webp"
            width={40}
          />
        </Link>
      </MobileWrapper>
      <MobileWrapper className="col-span-2">
        <NavLinks isMobile />
      </MobileWrapper>
    </div>
  );
};
