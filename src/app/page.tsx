import { RRSSLink } from '@/components/rrss-link';
import CustomLink from '@/components/custom-link';
import Carousel from '@/modules/carousel/components/carousel';
import ImageShowcase from '@/modules/carousel/components/image-showcase';
import Hero from '@/components/hero';
import { AnimationOrchestrator } from '@/components/animations/animation-orchestrator';
import InfiniteCanvas from '@/components/infinite-canvas/infinite-canvas';

export default function Home() {
  return (
    <AnimationOrchestrator
      className="container mx-auto max-w-3xl space-y-10 px-6 py-10"
      sessionKey="homePageAnimation"
    >
      {/* Hero */}
      <div
        style={
          {
            '--stagger': 0,
          } as React.CSSProperties
        }
      >
        <Hero />
      </div>

      {/* About */}
      <section
        id="about"
        style={
          {
            '--stagger': 1,
          } as React.CSSProperties
        }
      >
        <h2 className="text-base">About me</h2>
        <p className="text-base text-[#666]">
          I craft impactful, user-centric products, focusing on seamless interactions and interface
          design. Passionate about collaboration, I thrive in multidisciplinary teams, always
          learning and innovating. Specializing in React, TypeScript, and modern web architectures,
          I build high-performance, scalable applications with real-time data and interactive UIs.
          Currently exploring motion design, GSAP, and Three.js to push digital experiences further.
        </p>
        <div className="text-muted-foreground mt-4 flex items-center gap-x-2 text-sm font-light uppercase">
          <RRSSLink platform="email" href="mailto:juliorafre@gmail.com" />
          <span className="text-xs text-gray-300">✦</span>
          <RRSSLink platform="github" href="https://github.com/juliorafre" />
          <span className="text-xs text-gray-300">✦</span>
          <RRSSLink platform="x" href="https://x.com/juliorafre" />
          <span className="text-xs text-gray-300">✦</span>
          <RRSSLink platform="linkedin" href="https://www.linkedin.com/in/juliorafre/" />
        </div>
      </section>

      {/* Currently */}
      <section
        id="currently"
        style={
          {
            '--stagger': 2,
          } as React.CSSProperties
        }
      >
        <h2 className="text-base">Currently</h2>
        <p className="text-base text-[#666]">
          Listening to <CustomLink href="https://frontend.fm/">Frontend.FM</CustomLink> by{' '}
          <span className="text-black">Maxi Ferreira</span> <br /> Reading{' '}
          <CustomLink href="https://largeapps.dev/">Building Large Scale Web Apps</CustomLink> by
          <span className="text-black">Addy Osmani</span> &{' '}
          <span className="text-black">Hassan Djirdeh</span>.
        </p>
      </section>

      {/* Feed */}
      <section
        style={
          {
            '--stagger': 3,
          } as React.CSSProperties
        }
      >
        {/* Feed title */}
        <h2 className="mb-2 text-base">Feed</h2>

        <div className="mb-10 flex w-full flex-col pt-2">
          <div className="order-1 mb-2">
            <InfiniteCanvas />
          </div>
          <div className="order-2 flex flex-col">
            <time className="text-muted-foreground text-base" dateTime="2025-05-24">
              May 20, 2025
            </time>
            <p className="text-base font-medium">Memories. (Infinite Canvas)</p>
          </div>
          <p className="text-muted-foreground order-3 mb-1 text-base">WIP experiment.</p>
          <div className="order-4 flex flex-row gap-x-2 text-base">
            <CustomLink href="/infinite-canvas" showIcon>
              Code
            </CustomLink>
            <CustomLink href="/image-reveal-shaders" showIcon>
              Image reveal shaders
            </CustomLink>
          </div>
        </div>

        <div className="mb-10 flex w-full flex-col pt-2">
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

        <div className="mb-10 flex w-full flex-col pt-2">
          <div className="order-1 mb-2 overflow-hidden rounded-lg border bg-gray-100 p-3 md:p-6">
            {/* <Image
              src="/images/projects/map-interaction.gif"
              width={3600}
              height={1834}
              alt="map interaction"
              className="w-full"
            /> */}
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

        <div className="mb-10 flex w-full flex-col pt-2">
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
            <CustomLink href="https://www.madi.bio/">Read about it</CustomLink>
            <CustomLink href="https://www.madi.bio/">Website</CustomLink>
          </div>
        </div>
      </section>

      {/* Playgrounds */}
      <section
        style={
          {
            '--stagger': 4,
          } as React.CSSProperties
        }
      >
        <h2 className="mb-2 text-lg">Playgrounds</h2>
        <div className="flex w-full flex-col">
          <CustomLink href="/text-parallax">Text Parallax</CustomLink>
          <CustomLink href="/text-gradient-on-scroll">Text Gradient On Scroll</CustomLink>
          <CustomLink href="/map-interaction">Map Interaction</CustomLink>
          <CustomLink href="/draggable-curved">Draggable Curved</CustomLink>
          <CustomLink href="/button-categorization">Button Categorization</CustomLink>
          <CustomLink href="/streaming-text">Streaming Text</CustomLink>
        </div>
      </section>
    </AnimationOrchestrator>
  );
}
