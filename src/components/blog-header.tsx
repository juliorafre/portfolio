import { formatDate } from "@/lib/utils";
import type { PostMetadata } from "@/types";

const BlogHeader = (props: PostMetadata) => {
  return (
    <section className="post-header">
      <div className="flex flex-col space-y-2">
        <time
          className="block font-jetbrains-mono font-semibold text-muted-foreground"
          dateTime={props.publishedOn}
          id="publishedOn"
        >
          {formatDate(props.publishedOn)}
        </time>
        <h1
          className="max-w-2xl text-balance font-instrument-serif font-semibold text-3xl lg:text-4xl"
          id="title"
          style={{
            lineHeight:
              "clamp(2.28rem, calc(2.28rem + 1.72 * ((100vw - 23.4375rem) / 66.5625)), 3rem)",
          }}
        >
          {props.title}
        </h1>
        <div
          className="mb-6 text-pretty text-muted-foreground text-sm md:text-base"
          id="abstract"
        >
          <p className="leading-relaxed">{props.abstract}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
