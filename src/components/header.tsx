'use client';

import { siteConfig } from '@/app/siteConfig';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
// import { RRSSLink } from '@/components/rrss-link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname.startsWith(href) && href !== '/');

  return (
    <Link
      href={href}
      className={`text-sm ${isActive ? 'text-black' : 'text-muted-foreground'} hover:text-black`}
      style={{
        transition: 'color .2s cubic-bezier(.075,.82,.165,1)',
      }}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const headerMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerMobileRef.current) { 
      
    }
    gsap.to(headerMobileRef.current, {
      opacity: 1,
      duration: 0.5,
    });
  }, []);

  return (
    <>
      <header className="relative container mx-auto hidden max-w-3xl flex-col items-end justify-end gap-x-4 px-6 py-4.5 md:flex md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center justify-between gap-x-2 md:w-fit md:justify-start">
          <motion.div
            id="logo"
            className="w-fit"
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Image
              src="/images/logo.png"
              alt="galaxy-pixel-art"
              width={100}
              height={100}
              className="size-13 invert md:size-10"
            />
          </motion.div>
          <nav className="relative flex w-fit items-baseline gap-x-4">
            <NavLink href={siteConfig.baseLinks.home}>Home</NavLink>
            <NavLink href={siteConfig.baseLinks.about}>About</NavLink>
            <NavLink href={siteConfig.baseLinks.blog}>Blog</NavLink>
            <NavLink href={siteConfig.baseLinks.playground.home}>Experiments</NavLink>
          </nav>
        </div>
      </header>

      <motion.header
        ref={headerMobileRef}
        initial={{
          opacity: 0,
          filter: 'blur(8px)',
          translateY: '4px',
        }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          translateY: '0px',
        }}
        transition={{
          type: 'spring',
          duration: 0.85,
          bounce: 0.3,
          ease: 'easeInOut',
          delay: 0.6,
        }}
        className="header-mobile inset-shadow-accent fixed bottom-0 left-1/2 z-[999] w-[90%] translate-x-[-50%] translate-y-[-2vh] overflow-hidden rounded-full border border-gray-200 px-10 py-4 shadow-2xl md:hidden"
      >
        <div className="backdrop" />
        <nav className="relative flex w-full items-baseline justify-between gap-x-4">
          <NavLink href={siteConfig.baseLinks.home}>Home</NavLink>
          <NavLink href={siteConfig.baseLinks.about}>About</NavLink>
          <NavLink href={siteConfig.baseLinks.blog}>Blog</NavLink>
          <NavLink href={siteConfig.baseLinks.playground.home}>Experiments</NavLink>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;

/* 
<nav className="flex justify-between items-center p-4 py-4 bg-red-50">
      <div className="w-full flex max-w-6xl mx-auto gap-x-4 items-center">
        <div className="flex flex-col leading-tight">
          <p className='font-bold font-display'>Julio Ramirez</p>
          <p>✦ Front End Engineer </p>
        </div>
        <Link href={siteConfig.baseLinks.playground.home}>About</Link>
        <Link href={siteConfig.baseLinks.playground.home}>Pics</Link>
        <Link href={siteConfig.baseLinks.playground.home}>Playground</Link>
      </div>
    </nav>
     */
