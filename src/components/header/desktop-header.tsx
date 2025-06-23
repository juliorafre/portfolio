// src/components/header/desktop-header.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { NavLinks } from './nav-links';

export const DesktopHeader = () => {
  return (
    <header className="relative container mx-auto hidden max-w-3xl flex-col items-end justify-end gap-x-4 px-6 md:px-0 py-4.5 md:flex md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center justify-between gap-x-2 md:w-fit md:justify-start">
        <Link href="/">
          <motion.div
            id="logo"
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ rotate: 360, opacity: 1 }}
            transition={{
              opacity: {
                duration: 0.5,
                ease: 'easeInOut',
              },
              rotate: {
                delay: 0.5,
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            <Image
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="size-10 invert md:size-10 dark:invert-0"
            />
          </motion.div>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
};
