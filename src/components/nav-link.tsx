import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
      className={cn(
        'relative inline-flex items-center gap-0.5 px-1',
        'mt-0.5 bg-gradient-to-r from-[#efa79b]/30 via-[#90aaeb]/30 to-[#bde064]/30 text-black transition-colors duration-300 md:bg-none md:text-inherit md:hover:bg-gradient-to-r md:hover:from-[#efa79b] md:hover:via-[#90aaeb] md:hover:to-[#bde064] md:hover:text-black',
        className
      )}
      href={href}
    >
      {children}
      {showIcon && <ArrowUpRightIcon size={16} />}
    </Link>
  );
};

export default NavLink;
