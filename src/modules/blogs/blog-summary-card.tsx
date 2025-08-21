import Link from 'next/link';
import { cn } from '@/lib';
import type { PostMetadata } from '@/types';

interface BlogSummaryCardProps {
  title: PostMetadata['title'];
  abstract: PostMetadata['abstract'];
  publishedOn: PostMetadata['publishedOn'];
  slug: PostMetadata['slug'];
}

const BlogSummaryCard = ({
  title,
  abstract,
  publishedOn,
  slug,
}: BlogSummaryCardProps) => {
  return (
    <Link
      aria-description={abstract}
      className={cn(
        // Layout & sizing
        'grid w-full grid-cols-[1fr_auto] items-baseline gap-x-4',
        'md:-ml-4 md:w-[calc(100%_+_2rem)]',
        // Positioning
        'relative z-10',
        // Spacing & shape
        'rounded-lg px-4 py-3',
        // Background & colors
        'bg-transparent',
        // Transitions
        'transition-all duration-150',
        // Hover states
        'hover:bg-white hover:ring-1 hover:ring-gray-200',
        'hover:dark:bg-neutral-900 hover:dark:ring-gray-600',
        // Focus states
        'focus-visible:ring-1 focus-visible:ring-gray-200',
        // Active states
        'active:scale-99 active:bg-gray-100 active:ring-1 active:ring-gray-200',
        'active:dark:bg-neutral-800 active:dark:ring-gray-800'
      )}
      href={`/blog/${slug}`}
      prefetch={true}
    >
      {title && (
        <div>
          <h2 className="z-20 text-lg ">{title}</h2>
        </div>
      )}
      {publishedOn && (
        <time
          className="z-10 rounded border border-gray-300 bg-gradient-rainbow-light px-1 font-jetbrains-mono text-gray-500 text-sm tabular-nums dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          dateTime={publishedOn}
        >
          {new Date(publishedOn).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
          })}
        </time>
      )}
    </Link>
  );
};

export default BlogSummaryCard;
