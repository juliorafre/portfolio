'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CopyIcon, CheckIcon } from 'lucide-react';
import { highlight } from 'sugar-high';

interface CodeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => {
  // Specify the element type for the ref

  const codeRef = useRef<HTMLElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const CopyToClipboard = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  };

  useEffect(() => {
    if (codeRef.current) {
      const highlightedCode = highlight(code);
      codeRef.current.innerHTML = highlightedCode;
    }
  }, [code]);

  return (
    <div
      className={`relative w-full rounded-xl ${isExpanded ? 'h-auto overflow-scroll' : 'h-[300px] overflow-hidden'}`}
    >
      <div
        className={`absolute inset-0 flex items-end justify-center p-10 ${isExpanded ? 'pointer-events-none' : 'bg-gradient-to-b from-transparent to-black/80'}`}
      >
        <Button
          className="absolute top-0 right-0 mt-7 mr-5 cursor-pointer pointer-events-auto"
          variant={'secondary'}
          onClick={CopyToClipboard}
        >
          {isCopied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
        </Button>
        <Button
          variant={'secondary'}
          className="cursor-pointer pointer-events-auto"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>
      {/* CODE */}
      <pre className="overflow-x-auto rounded-xl bg-[#0f0f0f] p-4 text-sm">
        <code ref={codeRef} />
      </pre>
      {/* END CODE */}
    </div>
  );
};

export default CodeBlock;
