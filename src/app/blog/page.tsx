import { AnimationOrchestrator } from '@/components/animations/animation-orchestrator';
import DynamicComponentBlogCard from '@/components/blog-collection/dynamic-component-blog-card';
import { getBlogPostList } from '@/lib/file-helper';

const BlogPage = async () => {
  const blogPosts = await getBlogPostList();

  return (
    <AnimationOrchestrator
      className="main-container mt-4 space-y-6"
      sessionKey="blogPageAnimation"
    >
      <div className="orchestration-element stagger-0 w-full space-y-1 md:max-w-1/2">
        <h1 className="font-semibold text-xl">Journal</h1>
        <p className="text-muted-foreground">
          Sharing my interest, experiements and thoughts on technology, design
          and art.
        </p>
      </div>
      <ul className="relative space-y-2">
        {blogPosts.map(
          ({ title, abstract, publishedOn, slug, type }, index) => {
            return (
              <li
                className={`orchestration-element stagger-${index + 1}`}
                key={slug}
              >
                <DynamicComponentBlogCard
                  abstract={abstract}
                  key={slug}
                  publishedOn={publishedOn}
                  slug={slug}
                  title={title}
                  type={type}
                />
              </li>
            );
          }
        )}
      </ul>
    </AnimationOrchestrator>
  );
};

export default BlogPage;
