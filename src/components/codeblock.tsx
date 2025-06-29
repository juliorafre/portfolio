'use client';

import { CheckIcon, CopyIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { highlight } from 'sugar-high';
import { Button } from '@/components/ui/button';

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
          className="pointer-events-auto absolute top-0 right-0 mt-7 mr-5 cursor-pointer"
          onClick={CopyToClipboard}
          variant={'secondary'}
        >
          {isCopied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
        </Button>
        <Button
          className="pointer-events-auto cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          variant={'secondary'}
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
