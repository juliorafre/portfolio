import { Post } from '@/types';
import Link from 'next/link';

interface BlogSummaryCardProps {
  title: Post['title'];
  abstract: Post['abstract'];
  publishedOn: Post['publishedOn'];
  slug: Post['slug'];
}

const BlogSummaryCard = ({ title, abstract, publishedOn, slug }: BlogSummaryCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex w-full flex-col gap-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
    >
      {title && <h2 className="text-lg font-semibold">{title}</h2>}
      {abstract && <p className="text-sm text-gray-500">{abstract}</p>}
      {publishedOn && (
        <p className="text-sm text-gray-500">
          {new Date(publishedOn).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      )}
    </Link>
  );
};

export default BlogSummaryCard;
