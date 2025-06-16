import CustomLink from '@/components/custom-link';
// import Carousel from '@/modules/carousel/components/carousel';
import ImageShowcase from '@/components/image-showcase/image-showcase';
import InfiniteCanvas from '@/components/infinite-canvas/infinite-canvas';
import { AnimationOrchestrator } from '@/components/animations/animation-orchestrator';

const PlaygroundPage = () => {
  return (
    <AnimationOrchestrator
      className="main-container mt-4 space-y-6"
      sessionKey="craftsPageAnimation"
    >
      <div className="orchestration-element stagger-0 w-full space-y-1 md:max-w-1/2">
        <h1 className="text-xl font-semibold">Crafts</h1>
        <p className="text-muted-foreground">
          Sharing my interest in a little bit of everything, but mostly – technology, design and
          art.
        </p>
      </div>

      <section className="orchestration-element stagger-1 space-y-6">
        <div className="flex w-full flex-col pt-2">
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
        </div>

        <div className="flex w-full flex-col pt-2">
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

      {/* Playgrounds */}
      <section className="orchestration-element stagger-2">
        <h2 className="mb-2 text-lg">Playgrounds</h2>
        <div className="flex w-full flex-col">
          <CustomLink href="/text-parallax">Text Parallax</CustomLink>
          <CustomLink href="/text-gradient-on-scroll">Text Gradient On Scroll</CustomLink>
          <CustomLink href="/map-interaction">Map Interaction</CustomLink>
          <CustomLink href="/draggable-curved">Draggable Curved</CustomLink>
          <CustomLink href="/button-categorization">Button Categorization</CustomLink>
          <CustomLink href="/streaming-text">Streaming Text</CustomLink>
          <CustomLink href="/inertia-grid">Inertia Grid</CustomLink>
        </div>
      </section>
    </AnimationOrchestrator>
  );
};

export default PlaygroundPage;
