import { getBlogPostList } from '@/lib/file-helper';
import BlogSummaryCard from '@/modules/blogs/blog-summary-card';

const BlogPage = async () => {
  const blogPosts = await getBlogPostList();

  return (
    <div className="main-container space-y-6 mt-4">
      <div className="w-full space-y-1 md:max-w-1/2">
        <h1 className="text-3xl font-semibold">Journal</h1>
        <p className="text-muted-foreground">
          Sharing my interest in a little bit of everything, but mostly – technology, design and
          art.
        </p>
      </div>
      <ul>
        {blogPosts.map(({ title, abstract, publishedOn, slug }) => (
          <li key={slug}>
            <BlogSummaryCard
              title={title}
              abstract={abstract}
              publishedOn={publishedOn}
              slug={slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
