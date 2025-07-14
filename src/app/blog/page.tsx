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
      <ul className="space-y-2">
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

      {/*  <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Work in progress</h2>
        <p className="text-muted-foreground">
          This is not a real blog post, it&apos;s a work in progress. 🚨
        </p>

        <div
          className="relative h-[400px] w-full bg-neutral-200 shadow-lg grid place-items-center"
          style={{
            clipPath: 'url(#customSvgClip)',
            WebkitClipPath: 'url(#customSvgClip)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }}
        >
         
          <svg
            className="absolute inset-0 overflow-hidden"
            width="0"
            height="0"
            viewBox="0 0 1 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="customSvgClip" clipPathUnits="objectBoundingBox">
                <path d="M1 0.94336C1 0.97464 0.98464 1 0.96570 1H0.03430C0.01536 1 0 0.97464 0 0.94336V0.05664C0 0.02536 0.01536 0 0.03430 0H0.30499C0.31484 0 0.32431 0.00698 0.33071 0.01916L0.34237 0.04099C0.34877 0.05317 0.35824 0.06018 0.36809 0.06018H0.64737H0.67953H0.96570C0.98464 0.06018 1 0.08552 1 0.11680V0.94336Z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div> */}
    </AnimationOrchestrator>
  );
};

export default BlogPage;
