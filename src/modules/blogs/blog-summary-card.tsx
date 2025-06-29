import Link from 'next/link';
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
  // console.log(title, abstract, publishedOn, slug);
  return (
    <Link
      aria-description={abstract}
      className="-mr-4 -ml-4 grid w-[calc(100%_+_1rem)] grid-cols-[1fr_auto] items-baseline gap-x-4 rounded-lg bg-white px-4 py-3 transition-all duration-200 hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 focus-visible:ring-1 focus-visible:ring-gray-200 active:scale-98 active:bg-gray-100 active:ring-1 active:ring-gray-200 md:transition-transform dark:bg-transparent active:dark:bg-neutral-800 dark:active:ring-gray-800 hover:dark:bg-neutral-900 dark:hover:ring-gray-600"
      href={`/blog/${slug}`}
      prefetch={true}
    >
      {title && (
        <div>
          <h2 className="text-lg">{title}</h2>
        </div>
      )}
      {publishedOn && (
        <time
          className="rounded border border-gray-300 bg-gradient-rainbow-light px-1 font-jetbrains-mono text-gray-500 text-sm tabular-nums dark:border-gray-600 dark:bg-gray-900 dark:text-white"
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
