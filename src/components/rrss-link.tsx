'use client';
import { cn } from '@/lib/utils';

type RRSSPlatform = 'email' | 'github' | 'x' | 'linkedin';

interface RRSSLinkProps {
  platform: RRSSPlatform;
  href: string;
  className?: string;
}

const platformConfig: Record<RRSSPlatform, { label: string; icon?: string }> = {
  email: { label: 'Email' },
  github: { label: 'GitHub' },
  x: { label: 'X' },
  linkedin: { label: 'LinkedIn' },
};

export function RRSSLink({ platform, href, className = '' }: RRSSLinkProps) {
  const { label } = platformConfig[platform];
  const isExternal = platform !== 'email';

  const baseStyles = 'text-black dark:text-foreground flex items-center hover:underline transition-all duration-300';

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(baseStyles, className)}
    >
      {label}
    </a>
  );
}
