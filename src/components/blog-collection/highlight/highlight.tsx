'use client';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { isValidElement, useMemo, useState } from 'react';

// import Image from 'next/image';

const Highlight = ({ children }: { children: React.ReactNode }) => {
  const [isCopied, setIsCopied] = useState('idle');
  const [, copyToClipboardFunction] = useCopyToClipboard();

  const text = useMemo(() => {
    const extractText = (node: React.ReactNode): string => {
      if (!node) return '';

      if (typeof node === 'string' || typeof node === 'number') {
        return String(node);
      }

      if (Array.isArray(node)) {
        return node.map(extractText).join('\n');
      }

      if (isValidElement(node)) {
        // Type guard to ensure we have props
        const element = node as React.ReactElement<{
          children?: React.ReactNode;
        }>;

        // If it's a paragraph element, extract its children
        if (element.type === 'p') {
          return extractText(element.props.children);
        }
        // For other elements, recursively extract text from children
        return extractText(element.props.children);
      }

      return '';
    };
    return extractText(children);
  }, [children]);

  const copyToClipboard = () => {
    copyToClipboardFunction(text);
    setIsCopied('copied');
    const timeout = setTimeout(() => {
      setIsCopied('idle');
    }, 2000);
    return () => clearTimeout(timeout);
  };

  return (
    <div className="highlight group relative inset-shadow-accent-foreground mb-6 rounded-xl border-3 border-white bg-neutral-100 p-4 font-jetbrains-mono font-semibold text-black text-sm shadow-lg md:text-base dark:border-gray-800 dark:bg-neutral-900 dark:text-white">
      {/* <SparklesIcon className="absolute top-0 left-0 z-90 size-9 -translate-x-1/2 -translate-y-1/2 fill-amber-300 text-amber-300 dark:fill-amber-500 dark:text-amber-500" /> */}
      {/* <Image
        src="/images/sparkles.png"
        alt="sparkles"
        width={1000}
        height={1000}
        className="absolute top-0 right-0 z-90 size-50 drop-shadow-xl translate-x-1/3 -translate-y-1/3"
      /> */}
      <button
        className="absolute top-2 right-2 z-50 grid cursor-pointer place-items-center overflow-hidden rounded-md bg-neutral-300/40 p-2 opacity-100 backdrop-blur transition-all duration-300 hover:bg-neutral-300 group-hover:opacity-100 md:opacity-0 dark:bg-neutral-800/40 dark:hover:bg-neutral-700"
        disabled={isCopied === 'copied'}
        onClick={copyToClipboard}
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            initial={{ opacity: 0, y: -25 }}
            key={isCopied}
            transition={{ type: 'spring', duration: 0.54, bounce: 0.4 }}
          >
            {isCopied === 'copied' ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </motion.span>
        </AnimatePresence>
      </button>
      <div className="text-pretty bg-gradient-to-r from-[#ee5c43] via-[#1248d0] to-[#f12ef1] bg-clip-text font-light text-transparent text-xs md:text-base dark:via-[#8dff42]">
        {children}
      </div>
    </div>
  );
};

export default Highlight;
