import { loadBlogPost } from '@/lib/file-helper';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from '@/lib/utils';
import CodeSnippet from '@/components/code-snippet';
import Image, { ImageProps } from 'next/image';
import ImageShowcase from '@/modules/carousel/components/image-showcase';

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const { frontmatter } = await loadBlogPost(slug);
  return {
    title: `${frontmatter.title} • Julio Ramirez`,
    description: frontmatter.abstract,
  };
};

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const { frontmatter, content } = await loadBlogPost(slug);

  return (
    <article className="@container mt-10 w-full md:mt-6">
      {/* Header */}
      <section className="@container grid w-full grid-flow-row grid-cols-12 px-6 text-center">
        <div className="col-span-12 flex flex-col items-center space-y-4 md:col-span-8 md:col-start-3 md:space-y-8">
          <time dateTime="2025-05-16" className="block text-sm">
            {formatDate(frontmatter.publishedOn)}
          </time>
          <h1
            className="max-w-[50.5rem] font-medium text-balance"
            style={{
              fontSize: 'clamp(2rem,calc(2rem + 2 * ((100vw - 23.4375rem) / 66.5625)),3rem)',
              lineHeight:
                'clamp(2.28rem, calc(2.28rem + 1.72 * ((100vw - 23.4375rem) / 66.5625)), 3rem)',
            }}
          >
            {frontmatter.title}
          </h1>
          <div className="mb-6">
            <p className="leading-relaxed">{frontmatter.abstract}</p>
          </div>
        </div>
      </section>
      {/* Content */}
      <div className="content mt-5">
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            Image: (props: ImageProps) => {
              return (
                <div className="image-content">
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
            DoubleImageContent: (props: ImageProps) => {
              return (
                <div className="image-content grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      {...props}
                      alt={props.alt}
                      width={props.width}
                      height={props.height}
                      className="h-auto w-full"
                    />
                  </div>
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
            ImageShowcase: (props: ImageProps) => {
              return <ImageShowcase {...props} />;
            },
          }}
        />
      </div>
    </article>
  );
};

export default BlogPostPage;
