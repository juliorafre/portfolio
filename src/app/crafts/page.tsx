import Link from 'next/link';
import { AnimationOrchestrator } from '@/components/animations/animation-orchestrator';
// import Carousel from '@/modules/carousel/components/carousel';
// import ImageShowcase from '@/components/image-showcase/image-showcase';
// import InfiniteCanvas from '@/components/infinite-canvas/infinite-canvas';
import ProjectItem, {
  type ProjectItemProps,
} from '@/modules/crafts/project-item';

const craftComponents = [
  {
    href: '/image-preview',
    text: 'Image Preview',
    year: 2025,
    tags: ['motion'],
  },
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

const projectsList: ProjectItemProps[] = [
  {
    href: '/infinite-canvas',
    mediaSrc:
      'https://res.cloudinary.com/juliorafrecloud/video/upload/v1752466875/Portfolio/Projects/infinite-canvas/kourhsbylemkpk11gxi0.mp4',
    mediaType: 'video',
    title: 'Infinite Canvas',
    year: 2025,
    description: 'WIP experiment. An infinite canvas of memories.',
  },
  {
    href: '/image-showcase',
    mediaSrc: '/images/projects/showcase.png',
    mediaType: 'image',
    title: 'Image Showcase',
    year: 2025,
    description:
      'Small experiment replicating the sticker clothes reveal animation by @bartek_marzec.',
  },
  {
    href: '/map-interaction',
    mediaSrc:
      'https://res.cloudinary.com/juliorafrecloud/video/upload/v1740954577/hpsdmhwpeau1xz7jyrmx.mp4',
    mediaType: 'video',
    title: 'Map Interaction',
    year: 2025,
    description:
      'Inspired by the work of @nitishkmrk and built with motion-react and mapbox.',
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
      <section className="orchestration-element stagger-2 -mx-2 grid w-[100%_+_0.5rem] grid-cols-1 gap-4 md:gap-2 md:grid-cols-2">
        {projectsList.map((project) => (
          <ProjectItem
            description={project.description}
            href={project.href}
            key={project.href}
            mediaSrc={project.mediaSrc}
            mediaType={project.mediaType}
            title={project.title}
            year={project.year}
          />
        ))}
      </section>
      {/* Components */}
      <section className="orchestration-element stagger-3">
        <h2 className="mb-2 font-semibold text-lg">Components</h2>
        <div className="flex w-full flex-col">
          {craftComponents.map((component) => {
            return (
              <Link
                className="-mx-3 flex w-[calc(100%_+_0.75rem)] items-center justify-between gap-x-4 rounded-lg px-3 py-3 transition-colors hover:bg-white hover:dark:bg-neutral-800 active:bg-gray-100 active:dark:bg-neutral-900"
                href={component.href}
                key={component.href}
              >
                <span className="grow whitespace-nowrap">{component.text}</span>
                <div className="w-full grow border-gray-300 border-b border-dashed" />
                <div className="flex gap-x-2 text-muted-foreground">
                  {component.tags.map((tag) => {
                    return (
                      <span
                        className="rounded-full bg-neutral-100 dark:bg-transparent dark:text-white px-2 text-sm"
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
