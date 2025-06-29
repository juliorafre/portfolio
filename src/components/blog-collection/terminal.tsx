'use client';

import { CheckIcon, CopyIcon, MaximizeIcon, MinimizeIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
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
          <span className="select-none font-medium text-gray-300 text-sm">
            {title}
          </span>
        </div>

        {/* Control Buttons */}
        {showControls && (
          <div className="flex items-center gap-2">
            {copyable && (
              <button
                aria-label={isCopied ? 'Copied!' : 'Copy to clipboard'}
                className="group rounded-md p-1.5 transition-colors hover:bg-gray-700/50"
                onClick={handleCopy}
              >
                <AnimatePresence mode="wait">
                  {isCopied ? (
                    <motion.div
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      initial={{ scale: 0 }}
                      key="check"
                    >
                      <CheckIcon className="text-green-400" size={14} />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      initial={{ scale: 0 }}
                      key="copy"
                    >
                      <CopyIcon
                        className="text-gray-400 group-hover:text-gray-300"
                        size={14}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            <button
              aria-label={isMaximized ? 'Minimize' : 'Maximize'}
              className="group rounded-md p-1.5 transition-colors hover:bg-gray-700/50"
              onClick={() => setIsMaximized(!isMaximized)}
            >
              {isMaximized ? (
                <MinimizeIcon
                  className="text-gray-400 group-hover:text-gray-300"
                  size={14}
                />
              ) : (
                <MaximizeIcon
                  className="text-gray-400 group-hover:text-gray-300"
                  size={14}
                />
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

export function TerminalLine({
  number,
  children,
  className,
}: TerminalLineProps) {
  return (
    <div className={cn('flex items-baseline gap-3', className)}>
      {number && (
        <span className="min-w-[1.5rem] select-none text-right font-mono text-gray-500 text-xs">
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
