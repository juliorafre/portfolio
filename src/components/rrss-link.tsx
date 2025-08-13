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
  x: { label: 'X(Twitter)' },
  linkedin: { label: 'LinkedIn' },
};

export function RRSSLink({ platform, href, className = '' }: RRSSLinkProps) {
  const { label } = platformConfig[platform];
  const isExternal = platform !== 'email';

  const baseStyles =
    'text-black dark:text-foreground flex items-center hover:underline transition-all duration-300';

  return (
    <a
      className={cn(baseStyles, className)}
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {label}
    </a>
  );
}
