import type { Metadata } from "next";
import { AnimationOrchestrator } from "@/components/animations/animation-orchestrator";
import ComponentItem from "@/modules/crafts/component-item";
// import Carousel from '@/modules/carousel/components/carousel';
// import ImageShowcase from '@/components/image-showcase/image-showcase';
// import InfiniteCanvas from '@/components/infinite-canvas/infinite-canvas';
import ProjectItem, {
  type ProjectItemProps,
} from "@/modules/crafts/project-item";
import type { ComponentItemType } from "@/types/crafts";

const craftComponents: ComponentItemType[] = [
  {
    href: "/finite-canvas",
    text: "Palmer's Finite Canvas",
    year: 2025,
    tags: ["gsap"],
  },
  {
    href: "/carousel-dragable",
    text: "Carousel Dragable",
    year: 2025,
    tags: ["gsap"],
  },
  {
    href: "/image-preview",
    text: "Image Preview",
    year: 2025,
    tags: ["motion"],
  },
  {
    href: "/text-parallax",
    text: "Text Parallax",
    year: 2025,
    tags: ["gsap"],
  },
  {
    href: "/text-gradient-on-scroll",
    text: "Text Gradient On Scroll",
    year: 2025,
    tags: ["gsap"],
  },
  {
    href: "/map-interaction",
    text: "Map Interaction",
    year: 2025,
    tags: ["motion", "mapbox"],
  },
  {
    href: "/draggable-curved",
    text: "Draggable Curved",
    year: 2025,
    tags: ["gsap"],
  },
  {
    href: "/button-categorization",
    text: "Button Categorization",
    year: 2025,
    tags: ["motion"],
  },
  {
    href: "/streaming-text",
    text: "Streaming Text",
    year: 2025,
    tags: ["motion"],
  },
  {
    href: "/inertia-grid",
    text: "Inertia Grid",
    year: 2025,
    tags: ["gsap"],
  },
];

const projectsList: ProjectItemProps[] = [
  {
    href: "",
    mediaSrc:
      "https://res.cloudinary.com/juliorafrecloud/video/upload/v1754338503/Portfolio/Projects/kyoki/yyrs2vowc048omhbeawh.mp4",
    mediaType: "video",
    title: "Kyoki Lab",
    year: 2025,
    description: "More comming soon!",
    projectType: "none",
  },
  {
    href: "/infinite-canvas",
    mediaSrc:
      "https://res.cloudinary.com/juliorafrecloud/video/upload/v1752466875/Portfolio/Projects/infinite-canvas/kourhsbylemkpk11gxi0.mp4",
    mediaType: "video",
    title: "Infinite Canvas",
    year: 2025,
    description: "WIP experiment. An infinite canvas of memories.",
  },
  {
    href: "/image-showcase",
    mediaSrc: "/images/projects/showcase.png",
    mediaType: "image",
    title: "Image Showcase",
    year: 2025,
    description:
      "Small experiment replicating the sticker clothes reveal animation by @bartek_marzec.",
  },
  {
    href: "/map-interaction",
    mediaSrc:
      "https://res.cloudinary.com/juliorafrecloud/video/upload/v1740954577/hpsdmhwpeau1xz7jyrmx.mp4",
    mediaType: "video",
    title: "Map Interaction",
    year: 2025,
    description:
      "Inspired by the work of @nitishkmrk and built with motion-react and mapbox.",
  },
];

export const metadata: Metadata = {
  title: "Crafts - Interactive Experiments & Code Demos",
  description:
    "Explore my interactive experiments, code demonstrations, and creative coding projects. Featuring GSAP animations, Three.js experiments, React components, and modern web development techniques.",
  keywords: [
    "interactive experiments",
    "code demos",
    "gsap experiments",
    "three.js demos",
    "react components",
    "creative coding",
    "web experiments",
    "animation demos",
    "frontend demos",
    "web development showcase",
  ],
  alternates: {
    canonical: "./crafts",
  },
  openGraph: {
    title: "Crafts - Interactive Experiments & Code Demos",
    description:
      "Explore my interactive experiments, code demonstrations, and creative coding projects.",
    type: "website",
    url: "./crafts",
  },
};

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
      <section className="orchestration-element stagger-1 -mx-2 grid w-[100%+0.5rem] grid-cols-1 gap-4 md:grid-cols-2 md:gap-2">
        {projectsList.map((project) => (
          <ProjectItem
            description={project.description}
            href={project.href}
            key={project.href}
            mediaSrc={project.mediaSrc}
            mediaType={project.mediaType}
            projectType={project.projectType}
            title={project.title}
            year={project.year}
          />
        ))}
      </section>
      {/* Components */}
      <section className="orchestration-element stagger-2">
        <h2 className="mb-2 font-semibold text-lg">Components</h2>
        <div className="flex w-full flex-col">
          {craftComponents.map((component) => {
            return <ComponentItem component={component} key={component.href} />;
          })}
        </div>
      </section>
    </AnimationOrchestrator>
  );
};

export default PlaygroundPage;
