'use client';
import { CopyIcon, CheckIcon } from 'lucide-react';
import { useMemo, useState, isValidElement } from 'react';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { motion, AnimatePresence } from 'motion/react';

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
        const element = node as React.ReactElement<{ children?: React.ReactNode }>;

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
    <div className="highlight group font-jetbrains-mono relative mb-6 rounded-xl border-3 border-white bg-neutral-100 p-4 inset-shadow-accent-foreground text-sm font-semibold text-black shadow-lg md:text-base dark:border-gray-800 dark:bg-neutral-900 dark:text-white">
      <button
        onClick={copyToClipboard}
        disabled={isCopied === 'copied'}
        className="absolute top-2 right-2 z-50 grid cursor-pointer place-items-center overflow-hidden rounded-md bg-neutral-200/40 backdrop-blur p-2 hover:bg-neutral-300 dark:bg-neutral-800/40 dark:hover:bg-neutral-700 group-hover:opacity-100 opacity-100 md:opacity-0 transition-all duration-300"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            transition={{ type: 'spring', duration: 0.54, bounce: 0.4 }}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            key={isCopied}
          >
            {isCopied === 'copied' ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </motion.span>
        </AnimatePresence>
      </button>
      <div className="bg-gradient-to-r from-[#ee5c43] via-[#1248d0] to-[#f12ef1] bg-clip-text text-transparent dark:via-[#8dff42]  text-pretty text-xs md:text-base">
        {children}
      </div>
    </div>
  );
};

export default Highlight;
