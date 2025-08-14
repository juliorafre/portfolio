'use client';
import { ArrowUpRightIcon } from 'lucide-react';

type RRSSPlatform = 'email' | 'rrss';

interface RRSSLinkProps {
  platform: RRSSPlatform;
  href: string;
  children?: React.ReactNode;
}

export function RRSSLink({ platform = 'rrss', href, children }: RRSSLinkProps) {
  const isExternal = platform !== 'email';

  return (
    <a
      className="flex cursor-pointer items-center gap-x-0.5 rounded-full bg-neutral-200/50 py-0.5 pr-2 pl-2.5 font-medium text-black transition-all duration-150 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-foreground dark:hover:bg-neutral-700"
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
      <ArrowUpRightIcon size={16} />
    </a>
  );
}
