'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Carousel from '@/modules/carousel/components/carousel';

const BlogPage = () => {
  const { slug } = useParams();
  return (
    <article className="@container relative w-full space-y-10 px-6 py-10">
      {/* header */}
      <div className="flex flex-col items-center">
        <div className="mx-auto w-full max-w-3xl text-center">
          <time dateTime="2025-05-16" className="mb-6 block">
            May 16, 2025
          </time>
          <h1 className="mb-6 text-4xl font-semibold">Introducing Codex {slug}</h1>
          <div className="mb-6">
            <p className="text-muted-foreground leading-relaxed">
              A cloud-based software engineering agent that can work on many tasks in parallel,
              powered by codex-1. Available to ChatGPT Pro, Team, and Enterprise users today, and
              Plus users soon.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="/images/blog/codex/codex.webp" alt="Codex" width={1000} height={1000} />
        </div>
      </div>
      {/* content */}
      <section className="content">
        {/* text content */}
        <div className="text-content">
          <p>
            Today we are launching a research preview of Codex: a cloud-based software engineering
            agent that can work on many tasks in parallel. Codex can perform tasks for you such as
            writing features, answering questions about your codebase, fixing bugs, and proposing
            pull requests for review; each task runs in its own cloud sandbox environment, preloaded
            with your repository.
          </p>
          <h2 className="text-2xl font-semibold">Codex is powered by codex-1</h2>
          <p>
            Codex is powered by codex-1, a version of OpenAI o3 optimized for software engineering.
            It was trained using reinforcement learning on real-world coding tasks in a variety of
            environments to generate code that closely mirrors human style and PR preferences,
            adheres precisely to instructions, and can iteratively run tests until it receives a
            passing result. We are starting to roll out Codex to ChatGPT Pro, Enterprise, and Team
            users today, with support for Plus and Edu coming soon.
          </p>
          <p>
            Today you can access Codex through the sidebar in ChatGPT and assign it new coding tasks
            by typing a prompt and clicking “Code”. If you want to ask Codex a question about your
            codebase, click “Ask”. Each task is processed independently in a separate, isolated
            environment preloaded with your codebase. Codex can read and edit files, as well as run
            commands including test harnesses, linters, and type checkers. Task completion typically
            takes between 1 and 30 minutes, depending on complexity, and you can monitor
            Codex&apos;s progress in real time.
          </p>
        </div>
        {/* image content */}
        <figure className="image-content">
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            {/* <div className="flex flex-col">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/blog/codex/codex.webp"
                  alt="Codex"
                  width={1000}
                  height={1000}
                  title="Codex"
                />
              </div>
              <figcaption>
                23 SWE-Bench Verified samples that were not runnable on our internal infrastructure
                were excluded. codex-1 was tested at a maximum context length of 192k tokens and
                medium ‘reasoning effort’, which is the setting that will be available in product
                today. For details on o3 evaluations, see here⁠.
              </figcaption>
            </div> */}
            <div className="flex flex-col items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/blog/codex/codex.webp"
                  alt="Codex"
                  width={1000}
                  height={1000}
                  title="Codex"
                />
              </div>
              <figcaption className="max-w-xl text-center">
                23 SWE-Bench Verified samples that were not runnable on our internal infrastructure
                were excluded. codex-1 was tested at a maximum context length of 192k tokens and
                medium ‘reasoning effort’, which is the setting that will be available in product
                today. For details on o3 evaluations, see here⁠.
              </figcaption>
            </div>
          </div>
        </figure>
        {/* text content */}
        <div className="text-content">
          <p>
            Today we are launching a research preview of Codex: a cloud-based software engineering
            agent that can work on many tasks in parallel. Codex can perform tasks for you such as
            writing features, answering questions about your codebase, fixing bugs, and proposing
            pull requests for review; each task runs in its own cloud sandbox environment, preloaded
            with your repository.
          </p>
          <h2 className="text-2xl font-semibold">Codex is powered by codex-1</h2>
          <p>
            Codex is powered by codex-1, a version of OpenAI o3 optimized for software engineering.
            It was trained using reinforcement learning on real-world coding tasks in a variety of
            environments to generate code that closely mirrors human style and PR preferences,
            adheres precisely to instructions, and can iteratively run tests until it receives a
            passing result. We are starting to roll out Codex to ChatGPT Pro, Enterprise, and Team
            users today, with support for Plus and Edu coming soon.
          </p>
          <p>
            Today you can access Codex through the sidebar in ChatGPT and assign it new coding tasks
            by typing a prompt and clicking “Code”. If you want to ask Codex a question about your
            codebase, click “Ask”. Each task is processed independently in a separate, isolated
            environment preloaded with your codebase. Codex can read and edit files, as well as run
            commands including test harnesses, linters, and type checkers. Task completion typically
            takes between 1 and 30 minutes, depending on complexity, and you can monitor
            Codex&apos;s progress in real time.
          </p>
        </div>
        {/* image content */}
        <div className="full-content">
          <Carousel />
        </div>
       
      </section>
    </article>
  );
};

export default BlogPage;
