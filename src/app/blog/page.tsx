import { getBlogPostList } from '@/lib/file-helper';
import BlogSummaryCard from '@/modules/blogs/blog-summary-card';

const BlogPage = async () => {
  const blogPosts = await getBlogPostList();

  return (
    <div className="main-container">
      <h1>List of blogs</h1>
      <ul className="space-y-4">
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
