// src/components/header/desktop-header.tsx
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from './nav-links';

export const DesktopHeader = () => {
  return (
    <header className="container relative mx-auto hidden max-w-3xl flex-col items-end justify-end gap-x-4 px-6 py-4.5 md:flex md:flex-row md:items-center md:justify-between md:px-0">
      <div className="flex w-full items-center justify-between gap-x-2 md:w-fit md:justify-start">
        <Link href="/">
          <motion.div
            animate={{ rotate: 360, opacity: 1 }}
            className="w-full"
            id="logo"
            initial={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 0.5,
                ease: 'easeInOut',
              },
              rotate: {
                delay: 0.5,
                duration: 60,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              },
            }}
          >
            <Image
              alt="logo"
              className="size-10 invert md:size-10 dark:invert-0"
              height={40}
              src="/images/logo.png"
              width={40}
            />
          </motion.div>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
};
