'use client';

import { siteConfig } from '@/app/siteConfig';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
// import { RRSSLink } from '@/components/rrss-link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib';

const NavLinks = ({ className, isMobile }: { className?: string; isMobile?: boolean }) => {
  return (
    <nav className={cn('relative flex items-center justify-center gap-x-2', className)}>
      {siteConfig.baseLinks.map(link => {
        const isComingSoon = 'isComingSoon' in link && link.isComingSoon;
        if (!link.isVisible) return null;
        if (isMobile && isComingSoon) return null;
        return (
          <NavLink key={link.url} href={link.url} isComingSoon={isComingSoon} isMobile={isMobile}>
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

const NavLink = ({
  href,
  isComingSoon,
  isMobile,
  children,
}: {
  href: string;
  isComingSoon?: boolean;
  children: React.ReactNode;
  isMobile?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname.startsWith(href) && href !== '/');

  return (
    <Link
      href={isComingSoon ? '#' : href}
      onClick={e => {
        if (isComingSoon) {
          e.preventDefault();
        }
      }}
      className={cn(
        'group flex items-center gap-x-2 rounded-sm px-2 py-1 transition-all duration-300',
        isMobile && 'px-2 py-3 first:pl-6 last:pr-6',
        isActive && !isMobile
          ? 'text-black dark:text-white'
          : 'text-neutral-500 dark:text-neutral-400',
        isActive && isMobile && 'text-black dark:text-black',
        'hover:bg-neutral-200 hover:text-black dark:hover:bg-neutral-600 dark:hover:text-white',
        isComingSoon &&
          'hover:text-muted-foreground dark:hover:text-muted-foreground cursor-auto opacity-50 hover:bg-transparent hover:opacity-50 dark:hover:bg-transparent'
      )}
      /* style={{
        transition: 'all .2s cubic-bezier(.075,.82,.165,1)',
      }} */
    >
      {children}
      {/* {isComingSoon && (
        <span className="rounded bg-neutral-200 px-1 text-xs font-semibold text-neutral-400 dark:text-neutral-600">
          Soon
        </span>
      )} */}
    </Link>
  );
};

const Header = () => {
  const headerMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerMobileRef.current) {
      gsap.to(headerMobileRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    }
  }, [headerMobileRef]);

  return (
    <>
      <header className="relative hidden flex-col items-end justify-end gap-x-4 px-6 py-4.5 md:flex md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center justify-between gap-x-2 md:w-fit md:justify-start">
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
          <NavLinks />
        </div>
      </header>

      <motion.header
        ref={headerMobileRef}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          duration: 0.95,
          bounce: 0.3,
          ease: 'easeInOut',
          delay: 0.2,
        }}
        className="inset-shadow-accent fixed bottom-0 left-1/2 z-[999] translate-x-[-50%] translate-y-[-2vh] overflow-hidden rounded-full bg-[rgba(224,_224,_224,_0.9)] shadow-2xl backdrop-blur-sm md:hidden"
        style={{
          backdropFilter: 'blur(10px)',
          borderRadius: '50px',
          boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
          cursor: 'pointer',
          /* padding: '8px 20px', */
          border: '2px solid rgb(206, 206, 206)',
        }}
      >
        {/* <div className="backdrop" /> */}
        <NavLinks isMobile />
      </motion.header>
    </>
  );
};

export default Header;
