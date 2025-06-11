'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon, MaximizeIcon, MinimizeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  showControls?: boolean;
  copyable?: boolean;
}

export function Terminal({
  title = 'command.shell',
  children,
  className,
  showControls = true,
  copyable = true,
}: TerminalProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleCopy = async () => {
    const textContent = extractTextContent(children);
    try {
      await navigator.clipboard.writeText(textContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const extractTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return node.toString();
    if (Array.isArray(node)) return node.map(extractTextContent).join('');
    if (node && typeof node === 'object' && 'props' in node) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return extractTextContent((node as any).props.children);
    }
    return '';
  };

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl',
        'border border-gray-700/50',
        isMaximized && 'fixed inset-4 z-50',
        className
      )}
      layout={isMaximized}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800/80 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          {/* Traffic Light Controls */}
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 cursor-pointer rounded-full bg-red-500 transition-colors hover:bg-red-400" />
            <div className="h-3 w-3 cursor-pointer rounded-full bg-yellow-500 transition-colors hover:bg-yellow-400" />
            <div className="h-3 w-3 cursor-pointer rounded-full bg-green-500 transition-colors hover:bg-green-400" />
          </div>

          {/* Terminal Title */}
          <span className="text-sm font-medium text-gray-300 select-none">{title}</span>
        </div>

        {/* Control Buttons */}
        {showControls && (
          <div className="flex items-center gap-2">
            {copyable && (
              <button
                onClick={handleCopy}
                className="group rounded-md p-1.5 transition-colors hover:bg-gray-700/50"
                aria-label={isCopied ? 'Copied!' : 'Copy to clipboard'}
              >
                <AnimatePresence mode="wait">
                  {isCopied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <CheckIcon size={14} className="text-green-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <CopyIcon size={14} className="text-gray-400 group-hover:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="group rounded-md p-1.5 transition-colors hover:bg-gray-700/50"
              aria-label={isMaximized ? 'Minimize' : 'Maximize'}
            >
              {isMaximized ? (
                <MinimizeIcon size={14} className="text-gray-400 group-hover:text-gray-300" />
              ) : (
                <MaximizeIcon size={14} className="text-gray-400 group-hover:text-gray-300" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Terminal Content */}
      <div className="relative">
        <pre className="overflow-x-auto bg-gray-900/50 p-4 font-mono text-sm leading-relaxed">
          <code className="text-gray-100">{children}</code>
        </pre>

        {/* Subtle gradient overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20" />
      </div>
    </motion.div>
  );
}

// Terminal Line Component for structured content
interface TerminalLineProps {
  number?: number;
  children: React.ReactNode;
  className?: string;
}

export function TerminalLine({ number, children, className }: TerminalLineProps) {
  return (
    <div className={cn('flex items-baseline gap-3', className)}>
      {number && (
        <span className="min-w-[1.5rem] text-right font-mono text-xs text-gray-500 select-none">
          {number}
        </span>
      )}
      <span className="flex-1">{children}</span>
    </div>
  );
}

// Syntax highlighting components
export function TerminalCommand({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-cyan-400">{children}</span>;
}

export function TerminalFlag({ children }: { children: React.ReactNode }) {
  return <span className="text-blue-400">{children}</span>;
}

export function TerminalString({ children }: { children: React.ReactNode }) {
  return <span className="text-yellow-300">{children}</span>;
}

export function TerminalUrl({ children }: { children: React.ReactNode }) {
  return <span className="text-green-400">{children}</span>;
}

export function TerminalJson({ children }: { children: React.ReactNode }) {
  return <span className="text-orange-300">{children}</span>;
}
