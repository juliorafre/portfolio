import { loadBlogPost } from '@/lib/file-helper';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeSnippet from '@/components/code-snippet';
import Image, { ImageProps } from 'next/image';
import ImageShowcase from '@/modules/carousel/components/image-showcase';
import BlogHeader from '@/components/blog/blog-header';

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
  const { title, abstract, publishedOn, author, tags, published, slug: postSlug } = frontmatter;

  return (
    <article className="container mx-auto mt-10 w-full md:mt-6">
      {/* Header */}
      <BlogHeader
        title={title}
        abstract={abstract}
        publishedOn={publishedOn}
        author={author}
        tags={tags}
        published={published}
        slug={postSlug}
      />
      {/* Content */}
      <div className="post-content">
        <MDXRemote
          source={content}
          components={{
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
