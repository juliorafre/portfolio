'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib';

interface NavLinkProps {
  href: string;
  isComingSoon?: boolean;
  children: React.ReactNode;
  isMobile?: boolean;
}

export const NavLink = ({ href, isComingSoon, isMobile, children }: NavLinkProps) => {
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
          : 'text-neutral-500 dark:text-neutral-500',
        isActive && isMobile && 'text-black dark:text-black',
        'hover:bg-neutral-200 hover:text-black dark:hover:bg-neutral-600 dark:hover:text-white',
        isComingSoon &&
          'hover:text-muted-foreground dark:hover:text-muted-foreground cursor-auto opacity-50 hover:bg-transparent hover:opacity-50 dark:hover:bg-transparent'
      )}
    >
      {children}
    </Link>
  );
};