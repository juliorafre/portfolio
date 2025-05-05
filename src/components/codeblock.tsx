/* import type { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  children: string;
  lang: BundledLanguage;
}

const CodeBlock = async ({ children, lang }: CodeBlockProps) => {
  const out = await codeToHtml(children, {
    lang,
    theme: 'github-dark',
  });

  return (
    <div
      className="w-full rounded-lg border bg-gray-100 p-4"
      dangerouslySetInnerHTML={{ __html: out }}
    />
  );
};

export default CodeBlock;
 */

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';
import 'prismjs/components/prism-typescript';
import { Button } from '@/components/ui/button';
import { CopyIcon, CheckIcon } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  lang: string;
}

const CodeBlock = ({ children, lang }: CodeBlockProps) => {
  // Specify the element type for the ref
  const codeRef = useRef<HTMLElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const CopyToClipboard = () => {
    if (children) {
      navigator.clipboard.writeText(children);
      setIsCopied(true);
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  };

  useEffect(() => {
    // Ensure the ref is current before highlighting
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [children, lang]); // Dependencies ensure highlighting reruns if content/lang changes

  return (
    <div
      className={`relative w-full rounded-xl ${isExpanded ? 'h-auto overflow-scroll' : 'h-[300px] overflow-hidden'}`}
    >
      <div
        className={`absolute inset-0 flex items-end justify-center p-10 ${isExpanded ? '' : 'bg-gradient-to-b from-transparent to-black/80'}`}
      >
        <Button
          className="absolute top-0 right-0 mt-7 mr-5 cursor-pointer"
          variant={'secondary'}
          onClick={CopyToClipboard}
        >
          {isCopied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
        </Button>
        <Button
          variant={'secondary'}
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>
      {/* CODE */}
      <pre className={`language-${lang}`}>
        <code
          ref={codeRef}
          className={`language-${lang}`}
          style={{
            fontSize: '14px',
            backgroundColor: '#171717',
          }}
        >
          {children}
        </code>
      </pre>
      {/* END CODE */}
    </div>
  );
};

export default CodeBlock;
