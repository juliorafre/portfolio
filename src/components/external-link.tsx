import { ArrowUpRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef } from 'react';

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
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'relative inline-flex items-center gap-0.5 px-1',
        'mt-0.5 via-[#90aaeb] transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#efa79b] hover:to-[#bde064] hover:text-black',
        className
      )}
    >
      {children}
      {showIcon && <ArrowUpRightIcon size={16} />}
    </a>
  );
};

export default ExternalLink;
