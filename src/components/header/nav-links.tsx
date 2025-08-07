// src/components/header/nav-links.tsx
'use client';

import { siteConfig } from '@/app/siteConfig';
import { cn } from '@/lib';
import { NavLink } from './nav-link';

interface NavLinksProps {
  className?: string;
  isMobile?: boolean;
}

export const NavLinks = ({ className, isMobile }: NavLinksProps) => {
  return (
    <nav
      className={cn(
        'relative flex items-center justify-center gap-x-0',
        className
      )}
    >
      {siteConfig.baseLinks.map((link) => {
        const isComingSoon = 'isComingSoon' in link && link.isComingSoon;
        if (!link.isVisible) {
          return null;
        }
        if (isMobile && isComingSoon) {
          return null;
        }
        if (isMobile && link.url === '/') {
          return null;
        }
        return (
          <NavLink
            href={link.url}
            isComingSoon={isComingSoon}
            isMobile={isMobile}
            key={link.url}
          >
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
};
