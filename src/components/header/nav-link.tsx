'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib';

interface NavLinkProps {
  href: string;
  isComingSoon?: boolean;
  children: React.ReactNode;
  isMobile?: boolean;
}

export const NavLink = ({
  href,
  isComingSoon,
  isMobile,
  children,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname.startsWith(href) && href !== '/');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={cn(
        'group relative flex cursor-pointer items-center gap-x-2 rounded-sm px-2 py-1 transition-all duration-150 active:scale-97',
        isMobile && 'px-2 py-3 first:pl-6 last:pr-6',
        isActive && !isMobile
          ? 'text-black dark:text-white'
          : 'text-neutral-500 dark:text-neutral-500',
        isActive && isMobile && 'text-black dark:text-black',
        ' hover:text-black dark:hover:text-white',
        isComingSoon &&
          'cursor-auto opacity-50 hover:bg-transparent hover:text-muted-foreground hover:opacity-50 dark:hover:bg-transparent dark:hover:text-muted-foreground'
      )}
      href={isComingSoon ? '#' : href}
      onClick={(e) => {
        if (isComingSoon) {
          e.preventDefault();
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="z-20">{children}</span>
      {isHovered && (
        <motion.span
          className="dark: absolute inset-0 z-10 rounded-sm bg-neutral-200 dark:bg-neutral-600"
          layoutId="nav-link-highlight"
          transition={{ duration: 0.2, type: 'spring', bounce: 0.3 }}
        />
      )}
    </Link>
  );
};
