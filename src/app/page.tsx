import { AnimationOrchestrator } from '@/components/animations/animation-orchestrator';
import CustomLink from '@/components/custom-link';
import Hero from '@/components/hero';
import ResumeLink from '@/components/resume-link';
import { RRSSLink } from '@/components/rrss-link';
import { getReadingBooks } from './blog/actions';

export default async function Home() {
  const listOfBooks = await getReadingBooks();

  const bookReading = listOfBooks[0];

  return (
    <AnimationOrchestrator
      className="container mx-auto flex h-full max-w-3xl flex-col items-center justify-center space-y-6 px-6 py-10 md:px-0"
      sessionKey="homePageAnimation"
    >
      {/* Hero */}
      <Hero className="orchestration-element stagger-0" />

      {/* About */}
      <section className="orchestration-element stagger-1 w-full" id="about">
        <h2 className="hidden text-base">About me</h2>
        <p className="hidden text-base text-muted-foreground">
          {/* I craft impactful, user-centric products, focusing on seamless interactions and interface
          design. Passionate about collaboration, I thrive in multidisciplinary teams, always
          learning and innovating. Specializing in React, TypeScript, and modern web architectures,
          I build high-performance, scalable applications with real-time data and interactive UIs.
          Currently exploring motion design, GSAP, and Motion (prev framer-motion) to push digital experiences further. */}
          I’m a frontend developer passionate about turning ideas into seamless,
          interactive experiences. Currently diving into GSAP and Motion{' '}
          <span className="whitespace-nowrap">(prev framer-motion)</span> to
          craft more dynamic digital moments.
        </p>
        <div className="flex items-center gap-x-2 font-light text-sm uppercase">
          <RRSSLink href="mailto:juliorafre@gmail.com" platform="email" />
          <span className="text-muted-foreground text-xs">✦</span>
          <RRSSLink href="https://github.com/juliorafre" platform="github" />
          <span className="text-muted-foreground text-xs">✦</span>
          <RRSSLink href="https://x.com/juliorafre" platform="x" />
          <span className="text-muted-foreground text-xs">✦</span>
          <RRSSLink
            href="https://www.linkedin.com/in/juliorafre/"
            platform="linkedin"
          />
          <span className="text-muted-foreground text-xs">✦</span>
          <ResumeLink />
        </div>
      </section>

      {/* Today */}
      <section className="orchestration-element stagger-2 w-full" id="today">
        <h2 className="hidden text-base">Today</h2>
        <p className="text-base text-muted-foreground">
          Listening to{' '}
          <CustomLink href="https://podcasts.apple.com/us/podcast/the-pragmatic-engineer/id1769051199">
            The Pragmatic Engineer
          </CustomLink>{' '}
          by{' '}
          <span className="text-black dark:text-muted-foreground">
            Gergely Orosz
          </span>{' '}
          <br /> Reading{' '}
          <CustomLink href={bookReading.url}>{bookReading.title}</CustomLink> by{' '}
          <span className="text-black dark:text-muted-foreground">
            {bookReading.author}
          </span>
        </p>
      </section>

      {/* Feed */}
      <section className="orchestration-element stagger-3">
        {/* Feed title */}
        {/* <h2 className="mb-2 text-base">Works</h2> */}

        {/* <div className="mb-10 flex w-full flex-col pt-2">
          <div className="order-1 mb-2">
            <InfiniteCanvas />
          </div>
          <div className="order-2 flex flex-col">
            <time className="text-muted-foreground text-sm" dateTime="2025-05-24">
              May 20, 2025
            </time>
            <p className="text-base font-medium">Memories. (Infinite Canvas)</p>
          </div>
          <p className="text-muted-foreground order-3 mb-1 text-base">WIP experiment.</p>
          <div className="order-4 flex flex-row gap-x-2 text-base">
            <CustomLink href="/infinite-canvas" showIcon>
              Code
            </CustomLink>
          </div>
        </div> */}

        {/* <div className="mb-10 flex w-full flex-col pt-2">
          <div className="order-1 mb-2">
            <ImageShowcase />
          </div>
          <div className="order-2 flex flex-col">
            <time className="text-muted-foreground text-base" dateTime="2025-04-25">
              April 25, 2025
            </time>
            <p className="text-base font-medium">Showcase sticker clothes.</p>
          </div>
          <p className="text-muted-foreground order-3 mb-1 text-base">
            Small experiment replicating the sticker clothes reveal animation by{' '}
            <CustomLink href="https://x.com/bartek_marzec/status/1835432359815958530">
              @bartek_marzec
            </CustomLink>
            .
          </p>
          <div className="order-4 flex flex-row gap-x-2 text-base">
            <CustomLink href="/image-showcase" showIcon>
              Code
            </CustomLink>
          </div>
        </div> */}

        {/* <div className="mb-10 flex w-full flex-col pt-2">
          <div className="order-1 mb-2 overflow-hidden rounded-lg border bg-gray-100 p-3 md:p-6">
            <video
              src="https://res.cloudinary.com/juliorafrecloud/video/upload/v1740954577/hpsdmhwpeau1xz7jyrmx.mp4"
              playsInline
              autoPlay
              muted
              loop
              className="aspect-video w-full object-cover"
            ></video>
          </div>
          <div className="order-2 flex flex-col">
            <p className="text-muted-foreground text-base">March 2025</p>
            <p className="text-base font-medium">Map interaction exploration.</p>
          </div>
          <p className="text-muted-foreground order-3 mb-1 text-base">
            Inspired by the work of @nitishkmrk and built with motion-react and mapbox.
          </p>
          <div className="order-4 flex flex-row gap-x-2 text-base">
            <CustomLink href="/map-interaction" showIcon>
              Demo
            </CustomLink>
          </div>
        </div> */}

        {/*   <div className="mb-10 flex w-full flex-col pt-2">
          <div className="order-1 mb-2 aspect-video overflow-hidden rounded-lg border bg-gray-100 p-3 md:p-6">
            <Carousel />
          </div>
          <div className="order-2 flex flex-col">
            <p className="text-muted-foreground text-base">2022 –– 2024</p>
            <p className="text-base font-medium">
              madi™ an AI-powered web platform for protein engineering.
            </p>
          </div>
          <p className="text-muted-foreground order-3 mb-1 text-base">
            Developed interactive UI components and data visualizations to streamline analysis and
            optimization. Collaborated with AI researchers and biochemists to enhance workflows,
            improving efficiency and scalability. Led frontend development, ensuring performance and
            maintainability.
          </p>
          <div className="order-4 flex flex-row gap-x-2 text-base">
            <CustomLink href="/blog/madi">Read about it</CustomLink>
            <CustomLink href="https://www.madi.bio/">Website</CustomLink>
          </div>
        </div> */}
      </section>
    </AnimationOrchestrator>
  );
}
