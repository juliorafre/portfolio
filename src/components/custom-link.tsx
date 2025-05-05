import { cn } from '@/lib/utils';
import Link, { type LinkProps } from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
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
  'relative inline-flex items-center gap-0.5 px-1',
  'mt-0.5 bg-gradient-to-r from-[#efa79b]/30 via-[#90aaeb]/30 to-[#bde064]/30 text-black transition-colors duration-300 md:bg-none md:text-inherit md:hover:bg-gradient-to-r md:hover:from-[#efa79b] md:hover:via-[#90aaeb] md:hover:to-[#bde064] md:hover:text-black'
);

const CustomLink = ({
  href,
  children,
  className,
  showIcon: showIconProp, // Rename to avoid conflict
  ...props
}: CustomLinkProps) => {
  const isExternal = href.startsWith('http');
  // Default showIcon to true for external links, false otherwise, unless overridden
  const showIcon = showIconProp ?? isExternal;

  if (isExternal) {
    return (
      <a
        {...props} // Spread remaining props (like target, rel, etc.)
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, className)}
      >
        {children}
        {showIcon && <ArrowUpRightIcon size={16} className="ml-0.5" />}
      </a>
    );
  }

  return (
    <Link
      {...props} // Spread remaining props relevant to Next/Link
      href={href}
      className={cn(baseStyles, className)}
    >
      {children}
      {/* Optionally show icon for internal links if explicitly requested */}
      {showIcon && <ArrowUpRightIcon size={16} className="ml-0.5" />}
    </Link>
  );
};

export default CustomLink; 