import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

const NavLink = ({
  href,
  children,
  className,
  showIcon = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative inline-flex items-center gap-0.5',
        "after:bg-accent-link after:absolute after:bottom-px after:left-0 after:h-px after:w-full after:content-['']",
        'bg-accent-link/20 mt-0.5',
        className
      )}
    >
      {children}
      {showIcon && <ArrowUpRightIcon size={16} />}
    </Link>
  );
};

export default NavLink;
