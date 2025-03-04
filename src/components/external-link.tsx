import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type ExternalLinkProps = ComponentPropsWithoutRef<"a"> & {
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
        "inline-flex items-center gap-0.5 relative",
        "after:content-[''] after:absolute after:bottom-px after:left-0 after:w-full after:h-px after:bg-accent-link",
        "bg-accent-link/20 mt-0.5",
        className
      )}
    >
      {children}
      {showIcon && <ArrowUpRightIcon size={16} />}
    </a>
  );
};

export default ExternalLink;
