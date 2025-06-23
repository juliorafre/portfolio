import { cn } from '@/lib/utils';
import Link, { type LinkProps } from 'next/link';
import { ArrowUpRightIcon, AnchorIcon } from 'lucide-react';
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react';

// Combine props from <a> and Next/Link, adding our custom ones
type CustomLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> &
  Omit<LinkProps, 'href'> & {
    href: string; // Ensure href is always a string
    children: React.ReactNode;
    className?: string;
    showIcon?: boolean; // Explicitly control icon visibility
    style?: 'default' | 'protera';
  };

// Shared base styles
const baseStyles: HTMLAttributes<HTMLElement>['className'] = cn(
  'relative inline gap-0.5 rounded-sm py-[0.5px] pr-1 pl-1.5 font-normal text-black',
  'mt-0 bg-gradient-to-r from-[#efa79b]/30 via-[#90aaeb]/30 to-[#bde064]/30 transition-colors duration-300 dark:text-neutral-300',
  'bg-gradient-to-r dark:from-[#3E86C6] dark:via-[#F5315B]/80 dark:to-orange-500/80 dark:bg-clip-text dark:p-0 dark:text-transparent',
  'md:hover:not-dark:bg-gradient-to-r md:hover:not-dark:from-[#efa79b] md:hover:not-dark:via-[#90aaeb] md:hover:not-dark:to-[#bde064] md:hover:not-dark:text-black'
);

const baseStylesProtera: HTMLAttributes<HTMLElement>['className'] = cn(
  'relative inline gap-0.5 rounded-sm py-[4px] pr-1 pl-1.5 font-normal text-white',
  'mt-0 bg-gradient-to-r from-[#060D4E] to-[#C531FD] transition-colors duration-300 dark:text-neutral-300',
  'bg-gradient-to-r dark:from-[#26C9D7] dark:via-[#C531FD]/80 dark:to-orange-500/80 dark:bg-clip-text dark:p-0 dark:text-transparent',
  'md:hover:not-dark:bg-gradient-to-r md:hover:not-dark:from-[#efa79b] md:hover:not-dark:via-[#90aaeb] md:hover:not-dark:to-[#bde064] md:hover:not-dark:text-black'
);

const CustomLink = ({
  href,
  children,
  className,
  showIcon: showIconProp, // Rename to avoid conflict
  style = 'default',
  ...props
}: CustomLinkProps) => {
  if (!href) href = '#';
  const isExternal = href.startsWith('http');
  // const isInternal = href.startsWith('/');
  const isAnchor = href.startsWith('#');
  const showIcon = showIconProp ?? isExternal;

  const styles = style === 'protera' ? baseStylesProtera : baseStyles;

  /* External links */
  if (isExternal) {
    return (
      <a {...props} href={href} className={cn(styles, className)}>
        {children}
        {showIcon && (
          <ArrowUpRightIcon
            size={16}
            className="ml-0.5 inline-block -translate-y-[0.1rem] transform dark:text-white"
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
        className={cn(styles, className)}
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
    <Link {...props} href={href} className={cn(styles, className)}>
      {children}
      {showIcon && (
        <ArrowUpRightIcon
          size={16}
          className="ml-0.5 inline-block -translate-y-[0.1rem] transform dark:text-white"
        />
      )}
    </Link>
  );
};

export default CustomLink;
