// src/components/header/desktop-header.tsx
"use client";

// import { motion } from 'motion/react';
// import Image from 'next/image';
// import Link from 'next/link';
import { Hour } from "./hour";
import { NavLinks } from "./nav-links";

export const DesktopHeader = () => {
  return (
    <header className="container relative mx-auto hidden max-w-3xl flex-col items-end justify-end gap-x-4 px-6 py-4.5 md:flex md:flex-row md:items-center md:justify-between md:px-0">
      <div className="flex w-full items-center justify-between gap-x-2">
        <NavLinks />
        <Hour />
      </div>
    </header>
  );
};
