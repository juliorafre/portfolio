import { PostMetadata } from '@/types';
import Link from 'next/link';

interface BlogSummaryCardProps {
  title: PostMetadata['title'];
  abstract: PostMetadata['abstract'];
  publishedOn: PostMetadata['publishedOn'];
  slug: PostMetadata['slug'];
}

const BlogSummaryCard = ({ title, abstract, publishedOn, slug }: BlogSummaryCardProps) => {
  // console.log(title, abstract, publishedOn, slug);
  return (
    <Link
      prefetch={true}
      href={`/blog/${slug}`}
      className="-mr-4 -ml-4 grid w-[calc(100%_+_1rem)] grid-cols-[1fr_auto] items-baseline gap-x-4 rounded-lg px-4 py-3 transition-all duration-200 hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 focus-visible:ring-1 focus-visible:ring-gray-200 active:scale-98 active:bg-gray-100 active:ring-1 active:ring-gray-200 md:transition-transform dark:active:ring-gray-800"
      aria-description={abstract}
    >
      {title && (
        <div>
          <h2 className="text-lg">{title}</h2>
        </div>
      )}
      {publishedOn && (
        <time
          dateTime={publishedOn}
          className="font-jetbrains-mono bg-gradient-rainbow-light rounded border border-gray-300 px-1 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        >
          {new Date(publishedOn).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </time>
      )}
    </Link>
  );
};

export default BlogSummaryCard;
