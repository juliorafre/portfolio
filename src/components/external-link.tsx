import { ArrowUpRightIcon } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type ExternalLinkProps = ComponentPropsWithoutRef<'a'> & {
  showIcon?: boolean;
};

const ExternalLink = ({
  href,
  children,
  className,
  showIcon = true,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      {...props}
      className={cn(
        'relative inline-flex items-center gap-0.5 px-1',
        'mt-0.5 bg-gradient-to-r from-[#efa79b]/30 via-[#90aaeb]/30 to-[#bde064]/30 text-black transition-colors duration-300 md:bg-none md:text-inherit md:hover:bg-gradient-to-r md:hover:from-[#efa79b] md:hover:via-[#90aaeb] md:hover:to-[#bde064] md:hover:text-black',
        className
      )}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
      {showIcon && <ArrowUpRightIcon size={16} />}
    </a>
  );
};

export default ExternalLink;
