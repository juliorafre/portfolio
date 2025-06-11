import CodeSnippet from '@/components/code-snippet';
import ImageShowcase from '@/components/image-showcase';
import { ComponentPropsWithoutRef } from 'react';
import Highlight from '@/components/blog-collection/highlight/highlight';
import ImagePost from '@/components/blog-collection/image-post';
import { AnimatedTerminal } from '@/components/blog-collection/animated-terminal';
import {
  TerminalCommand,
  TerminalFlag,
  TerminalString,
  TerminalUrl,
  TerminalJson,
  Terminal,
  TerminalLine,
} from '@/components/blog-collection/terminal';
import CarouselWoved from '@/components/blog-collection/carousel-wowed/carousel-wowed';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
//type ParagraphProps = ComponentPropsWithoutRef<'p'>;
//type ListProps = ComponentPropsWithoutRef<'ul'>;
//type ListItemProps = ComponentPropsWithoutRef<'li'>;
//type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  h1: ({ children, ...props }: HeadingProps) => (
    <h1 className="font-instrument-serif text-3xl" {...props}>
      {children}
    </h1>
  ),
  CarouselWoved,
  AnimatedTerminal,
  TerminalLine,
  TerminalCommand,
  TerminalFlag,
  TerminalString,
  TerminalUrl,
  TerminalJson,
  Terminal,
  pre: CodeSnippet,
  Image: ImagePost,
  ImageShowcase,
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  Highlight,
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium" {...props} />
  ),
};

export default components;
