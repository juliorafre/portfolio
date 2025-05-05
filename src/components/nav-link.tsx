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
        'relative inline-flex items-center gap-0.5 px-1',
        'mt-0.5 via-[#90aaeb] transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#efa79b] hover:to-[#bde064] hover:text-black',
        className
      )}
    >
      {children}
      {showIcon && <ArrowUpRightIcon size={16} />}
    </Link>
  );
};

export default NavLink;
