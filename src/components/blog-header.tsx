import { PostMetadata } from '@/types';
import { formatDate } from '@/lib/utils';

const BlogHeader = (props: PostMetadata) => {
  return (
    <section className="post-header">
      <div className="flex flex-col space-y-2">
        <time
          id="publishedOn"
          dateTime="2025-05-16"
          className="text-muted-foreground font-jetbrains-mono block font-semibold"
        >
          {formatDate(props.publishedOn)}
        </time>
        <h1
          id="title"
          className="font-instrument-serif max-w-[50.5rem] text-3xl font-semibold text-balance lg:text-4xl"
          style={{
            lineHeight:
              'clamp(2.28rem, calc(2.28rem + 1.72 * ((100vw - 23.4375rem) / 66.5625)), 3rem)',
          }}
        >
          {props.title}
        </h1>
        <div id="abstract" className="text-muted-foreground mb-6 text-sm text-balance md:text-base">
          <p className="leading-relaxed">{props.abstract}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
