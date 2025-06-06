import CodeSnippet from '@/components/code-snippet';
import ImageShowcase from '@/components/image-showcase';
import Image, { ImageProps } from 'next/image';
import { ComponentPropsWithoutRef } from 'react';
import Highlight from '@/components/highlight/highlight';

//type HeadingProps = ComponentPropsWithoutRef<'h1'>;
//type ParagraphProps = ComponentPropsWithoutRef<'p'>;
//type ListProps = ComponentPropsWithoutRef<'ul'>;
//type ListItemProps = ComponentPropsWithoutRef<'li'>;
//type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  pre: CodeSnippet,
  Image: (props: ImageProps) => {
    return (
      <div className="image-content wide">
        <div className="overflow-hidden rounded-xl">
          <Image
            {...props}
            alt={props.alt}
            width={props.width}
            height={props.height}
            className="h-auto w-full"
          />
        </div>
      </div>
    );
  },
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
