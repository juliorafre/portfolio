import { NavigationLink } from "@/types";

interface SiteConfig {
  readonly name: string;
  readonly url: string;
  readonly description: string;
  readonly baseLinks: readonly NavigationLink[];
}


export const siteConfig = {
  name: "Portfolio",
  url: "https://www.juliorafre.com",
  description: "Portfolio of Julio Ramirez De Freitas",
  baseLinks: [
    {
      url: "/",
      label: "Home",
      isVisible: true,
    },
    {
      url: "/about",
      label: "About",
      isVisible: true,
      isComingSoon: true,
    },
    {
      url: "/photos",
      label: "Photos",
      isVisible: false,
      isComingSoon: true,
    },
    {
      url: "/blog",
      label: "Writing",
      isVisible: true,
    },
    {
      url: "/playground",
      label: "Playground",
      isVisible: true,
      isComingSoon: true,
      paths: [{
        url: "/playground/text-parallax",
        label: "Text Parallax",
        isVisible: false,
      }, {
        url: "/playground/text-gradient-on-scroll",
        label: "Text Gradient on Scroll",
        isVisible: false,
      }, {
        url: "/playground/map-interaction",
        label: "Map Interaction",
        isVisible: false,
      }, {
        url: "/playground/draggable-curved",
        label: "Draggable Curved",
        isVisible: false,
      }]
    }
  ]
} as const satisfies SiteConfig;