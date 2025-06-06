import { cn } from '@/lib/utils';
import Link, { type LinkProps } from 'next/link';
import { ArrowUpRightIcon, AnchorIcon } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';

// Combine props from <a> and Next/Link, adding our custom ones
type CustomLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> &
  Omit<LinkProps, 'href'> & {
    href: string; // Ensure href is always a string
    children: React.ReactNode;
    className?: string;
    showIcon?: boolean; // Explicitly control icon visibility
  };

// Shared base styles
const baseStyles = cn(
  'relative inline gap-0.5 py-[0.3px] pr-1 pl-1.5 font-normal',
  'mt-0 bg-gradient-to-r from-[#efa79b]/30 via-[#90aaeb]/30 to-[#bde064]/30 text-black transition-colors duration-300',
  /* 'dark:text-muted-foreground dark:from-[#efa79b]/30 dark:via-[#90aaeb]/30 dark:to-[#bde064]/30', */
  'dark:from-[#efa79b] dark:via-[#90aaeb] dark:to-[#bde064] dark:bg-clip-text dark:p-0 dark:text-transparent hover:dark:underline dark:underline-offset-4 dark:decoration-1 dark:decoration-neutral-500',
  'md:hover:not-dark:bg-gradient-to-r md:hover:not-dark:from-[#efa79b] md:hover:not-dark:via-[#90aaeb] md:hover:not-dark:to-[#bde064] md:hover:not-dark:text-black'
);

const CustomLink = ({
  href,
  children,
  className,
  showIcon: showIconProp, // Rename to avoid conflict
  ...props
}: CustomLinkProps) => {
  const isExternal = href.startsWith('http');
  // const isInternal = href.startsWith('/');
  const isAnchor = href.startsWith('#');
  const showIcon = showIconProp ?? isExternal;

  /* External links */
  if (isExternal) {
    return (
      <a {...props} href={href} className={cn(baseStyles, className)}>
        {children}
        {showIcon && (
          <ArrowUpRightIcon
            size={16}
            className="ml-0.5 inline-block -translate-y-[0.1rem] transform dark:hidden"
          />
        )}
      </a>
    );
  }

  /* Anchor links */
  if (isAnchor) {
    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, className)}
      >
        {children}
        {showIcon && (
          <AnchorIcon size={16} className="ml-0.5 inline-block -translate-y-[0.1rem] transform" />
        )}
      </a>
    );
  }

  /* Default: Internal links */

  return (
    <Link {...props} href={href} className={cn(baseStyles, className)}>
      {children}
      {showIcon && (
        <ArrowUpRightIcon
          size={16}
          className="ml-0.5 inline-block -translate-y-[0.1rem] transform dark:hidden"
        />
      )}
    </Link>
  );
};

export default CustomLink;
