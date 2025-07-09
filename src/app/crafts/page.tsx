import Link from 'next/link';
import { AnimationOrchestrator } from '@/components/animations/animation-orchestrator';
import CustomLink from '@/components/custom-link';
// import Carousel from '@/modules/carousel/components/carousel';
import ImageShowcase from '@/components/image-showcase/image-showcase';
import InfiniteCanvas from '@/components/infinite-canvas/infinite-canvas';

const craftComponents = [
  {
    href: '/text-parallax',
    text: 'Text Parallax',
    year: 2025,
    tags: ['gsap'],
  },
  {
    href: '/text-gradient-on-scroll',
    text: 'Text Gradient On Scroll',
    year: 2025,
    tags: ['gsap'],
  },
  {
    href: '/map-interaction',
    text: 'Map Interaction',
    year: 2025,
    tags: ['motion', 'mapbox'],
  },
  {
    href: '/draggable-curved',
    text: 'Draggable Curved',
    year: 2025,
    tags: ['gsap'],
  },
  {
    href: '/button-categorization',
    text: 'Button Categorization',
    year: 2025,
    tags: ['motion'],
  },
  {
    href: '/streaming-text',
    text: 'Streaming Text',
    year: 2025,
    tags: ['motion'],
  },
  {
    href: '/inertia-grid',
    text: 'Inertia Grid',
    year: 2025,
    tags: ['gsap'],
  },
];

const PlaygroundPage = () => {
  return (
    <AnimationOrchestrator
      className="main-container mt-4 space-y-6"
      sessionKey="craftsPageAnimation"
    >
      <div className="orchestration-element stagger-0 w-full space-y-1 md:max-w-1/2">
        <h1 className="font-semibold text-xl">Crafts</h1>
        <p className="text-muted-foreground">
          Sharing some of my experimentals components and projects.
        </p>
      </div>
      <section className="orchestration-element stagger-2 space-y-6">
        <div className="flex w-full flex-col pt-2">
          <div className="order-1 mb-2">
            <InfiniteCanvas />
          </div>
          <div className="order-2 flex flex-col">
            <time
              className="text-muted-foreground text-sm"
              dateTime="2025-05-24"
            >
              May 20, 2025
            </time>
            <p className="font-medium text-base">Memories. (Infinite Canvas)</p>
          </div>
          <p className="order-3 mb-1 text-base text-muted-foreground">
            WIP experiment.
          </p>
          <div className="order-4 flex flex-row gap-x-2 text-base">
            <CustomLink href="/infinite-canvas" showIcon>
              Code
            </CustomLink>
            {/*  <CustomLink href="/image-reveal-shaders" showIcon>
              Image reveal shaders
            </CustomLink> */}
          </div>
        </div>

        <div className="flex w-full flex-col pt-2">
          <div className="order-1 mb-2">
            <ImageShowcase />
          </div>
          <div className="order-2 flex flex-col">
            <time
              className="text-base text-muted-foreground"
              dateTime="2025-04-25"
            >
              April 25, 2025
            </time>
            <p className="font-medium text-base">Showcase sticker clothes.</p>
          </div>
          <p className="order-3 mb-1 text-base text-muted-foreground">
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
        </div>

        <div className="flex w-full flex-col pt-2">
          <div className="order-1 mb-2 overflow-hidden rounded-lg border bg-gray-100 p-3 md:p-6">
            <video
              autoPlay
              className="overflow aspect-video w-full rounded-lg object-cover"
              loop
              muted
              playsInline
              src="https://res.cloudinary.com/juliorafrecloud/video/upload/v1740954577/hpsdmhwpeau1xz7jyrmx.mp4"
            />
          </div>
          <div className="order-2 flex flex-col">
            <p className="text-base text-muted-foreground">March 2025</p>
            <p className="font-medium text-base">
              Map interaction exploration.
            </p>
          </div>
          <p className="order-3 mb-1 text-base text-muted-foreground">
            Inspired by the work of @nitishkmrk and built with motion-react and
            mapbox.
          </p>
          <div className="order-4 flex flex-row gap-x-2 text-base">
            <CustomLink href="/map-interaction" showIcon>
              Demo
            </CustomLink>
          </div>
        </div>

        {/*  <div className="mb-10 flex w-full flex-col pt-2">
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

      {/* Components */}
      <section className="orchestration-element stagger-3 mt-20">
        <h2 className="mb-2 font-semibold text-lg">Components</h2>
        <div className="flex w-full flex-col">
          {craftComponents.map((component) => {
            return (
              <Link
                className="-mx-3 flex w-[calc(100%_+_0.75rem)] items-center justify-between gap-x-4 rounded-lg px-3 py-3 transition-colors hover:bg-gray-100 active:bg-gray-200"
                href={component.href}
                key={component.href}
              >
                <span className="grow whitespace-nowrap">{component.text}</span>
                <div className="w-full grow border-gray-300 border-b border-dashed" />
                <div className="flex gap-x-2 text-muted-foreground">
                  {component.tags.map((tag) => {
                    return (
                      <span
                        className="rounded-full bg-neutral-100 px-2 text-sm"
                        key={tag}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </AnimationOrchestrator>
  );
};

export default PlaygroundPage;
