import type { NavigationLink } from '@/types';

interface SiteConfig {
  readonly name: string;
  readonly url: string;
  readonly description: string;
  readonly baseLinks: readonly NavigationLink[];
}

export const siteConfig = {
  name: 'Portfolio',
  url: 'https://www.juliorafre.com',
  description: 'Portfolio of Julio Ramirez De Freitas',
  baseLinks: [
    {
      url: '/',
      label: 'Home',
      isVisible: true,
    },
    {
      url: '/about',
      label: 'About',
      isVisible: true,
      isComingSoon: false,
    },
    {
      url: '/photos',
      label: 'Photos',
      isVisible: false,
      isComingSoon: true,
    },
    {
      url: '/crafts',
      label: 'Crafts',
      isVisible: true,
      isComingSoon: false,
      paths: [
        {
          url: '/crafts/text-parallax',
          label: 'Text Parallax',
          isVisible: false,
        },
        {
          url: '/crafts/text-gradient-on-scroll',
          label: 'Text Gradient on Scroll',
          isVisible: false,
        },
        {
          url: '/crafts/map-interaction',
          label: 'Map Interaction',
          isVisible: false,
        },
        {
          url: '/crafts/draggable-curved',
          label: 'Draggable Curved',
          isVisible: false,
        },
        {
          url: '/crafts/inertia-grid',
          label: 'Inertia Grid',
          isVisible: false,
        },
      ],
    },
    {
      url: '/blog',
      label: 'Journal',
      isVisible: true,
    },
  ],
} as const satisfies SiteConfig;
