In all interactions and commit messages, be extremely concise and sacrifice grammar for the sake of concision.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Next.js portfolio project. Use these commands for development:

- `pnpm dev` - Start development server
- `pnpm dev:turbo` - Start development server with Turbopack (faster HMR)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linting and formatting checks
- `pnpm format` - Auto-format code with Biome
- Package manager: **pnpm 10.13.1** (use pnpm, not npm/yarn)

## Code Best Practices

### TypeScript Standards
- **Never use `any` type** - create proper type interfaces instead
- Enable strict mode and strictNullChecks
- Derive component props from `ComponentPropsWithoutRef` for flexibility
- Centralize type exports in `types/index.ts`
- Use union types for variants (`"default" | "protera"`)

### Component Patterns
- Use `"use client"` directive for all interactive/client-side components
- Prefer composition over inheritance
- Destructure props with defaults in function parameters
- Use `useCallback`, `useRef` for memoization when needed
- Error boundaries in `components/common/` for error handling

### Animation Standards
- **GSAP**: Use `@gsap/react` `useGSAP` hook, register plugins early, clean up with `gsap.context()`
- **Motion**: Prefer spring physics (`bounce`, `visualDuration`) over cubic-bezier
- **Lenis**: Smooth scrolling with manual RAF in some components
- Inline styles for GSAP-controlled animations, CSS-in-JS for complex timelines

### Styling Conventions
- **Primary**: Tailwind utility classes
- **Helper**: `cn()` utility (clsx + tailwind-merge) for class composition
- **Scoped**: CSS modules for component-specific styles
- **Variables**: Global colors/fonts via `globals.css` with `@theme` directive
- Dark mode variants with `dark:` prefix

### File Operations
- Wrap file reads with Next.js `unstable_cache` for performance
- Use `gray-matter` for MDX frontmatter parsing
- Revalidation tags: `"blog-posts"` for on-demand cache invalidation

### Git Conventions
- **Commit style**: Conventional commits (enforced by commitlint)
- **Hooks**: Husky for pre-commit linting

## Project Architecture

### Core Technologies

- **Next.js 16.0.0** with App Router and experimental features
- **React 19.2.0** with strict mode
- **TypeScript** with strict mode enabled
- **Biome 2.2.7** for linting and formatting (VCS-aware, 2-space indent)
- **Tailwind CSS 4.1.7** with PostCSS v4 plugin for styling
- **MDX** for content: `@next/mdx`, `@mdx-js/react`, `next-mdx-remote`, `gray-matter`
- **Animation**: GSAP 3.12.7 + @gsap/react 2.1.2, Motion 12.18.1 (Framer Motion successor)
- **3D Graphics**: Three.js 0.176.0, @react-three/fiber 9.1.2, @react-three/drei 10.0.8
- **Smooth Scrolling**: Lenis 1.1.20
- **UI Components**: Radix UI 1.4.2, shadcn/ui (CVA, tailwind-merge)
- **Carousel**: Embla Carousel 8.6.0, custom GSAP draggable implementations
- **Code Highlighting**: Bright 1.0.0, Sugar-high 0.9.3, Prism.js 1.30.0, Shiki 3.3.0
- **Maps**: Mapbox GL 3.10.0, react-map-gl 8.0.1
- **Icons**: Lucide React 0.475.0, React Icons 5.5.0
- **Notion Integration**: @notionhq/client 3.1.3
- **Utilities**: Effect 3.16.16, html2canvas 1.4.1, use-sound 5.0.0, vaul 1.1.2
- **Monitoring**: @vercel/speed-insights 1.2.0

### Key Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (experiments)/      # 16 experimental features/demos
│   │   ├── button-categorization/
│   │   ├── carousel-dragable/
│   │   ├── download-wallpaper/
│   │   ├── draggable-curved/
│   │   ├── finite-canvas/
│   │   ├── image-preview/
│   │   ├── image-reveal-shaders/
│   │   ├── image-showcase/
│   │   ├── inertia-grid/
│   │   ├── infinite-canvas/
│   │   ├── map-interaction/
│   │   ├── streaming-text/
│   │   ├── text-gradient-on-scroll/
│   │   └── text-parallax/
│   ├── blog/              # Blog/journal functionality
│   ├── about/             # About page
│   ├── crafts/            # Projects showcase
│   ├── siteConfig.ts      # Navigation and feature flags
│   ├── robots.ts          # SEO robots.txt generation
│   ├── sitemap.ts         # SEO sitemap generation
│   └── not-found.tsx      # 404 page
├── components/            # Reusable UI components
│   ├── animations/        # GSAP animation primitives
│   │   ├── fade-gsap.tsx
│   │   ├── animation-orchestrator.tsx
│   │   └── sparkles.tsx
│   ├── blog-collection/   # Blog-specific components
│   │   ├── animated-terminal.tsx
│   │   ├── carousel-woved/
│   │   ├── case-studies-header.tsx
│   │   ├── highlight/
│   │   ├── image-post.tsx
│   │   ├── journal-card.tsx
│   │   └── terminal.tsx
│   ├── code-snippet/      # Code highlighting components
│   ├── common/            # Error boundaries and utilities
│   ├── header/            # Navigation (desktop/mobile)
│   ├── image-reveal-threejs/  # Three.js shader components
│   │   ├── image-reveal-material.tsx
│   │   ├── shaders/       # GLSL vertex/fragment shaders
│   │   └── includes/      # Reusable GLSL functions (perlin3dNoise, coverUV)
│   ├── image-showcase/    # Image gallery with interactions
│   ├── infinite-canvas/   # Unbounded drawing canvas
│   ├── finite-canvas/     # Bounded drawing canvas
│   └── ui/                # shadcn/ui base components
├── modules/               # Feature-specific modules (complex functionality)
│   ├── about/
│   ├── blogs/             # Blog listing and cards
│   ├── button-categorization/  # Interactive button filtering
│   ├── carousel/
│   ├── crafts/            # Projects showcase
│   ├── inertia-grid/      # Mouse-tracking inertia animation
│   ├── infinite-canvas/   # Infinite drawing interactions
│   ├── made-w-gsap/       # Pure GSAP implementations
│   │   └── carousel-dragable/
│   ├── map-interaction/
│   ├── share/             # Shared UI patterns (Spacer)
│   ├── streaming-text/    # Real-time text streaming
│   ├── text-gradient-on-scroll/  # Scroll-triggered gradient
│   └── text-parallax/     # Parallax scroll effects
├── lib/                   # Utilities and helpers
│   ├── adapters/
│   │   └── notion.ts      # Notion API adapter with type validation
│   ├── file-helper.ts     # MDX file operations with unstable_cache
│   ├── mdx-components.tsx # Custom MDX component mappings
│   ├── utils.ts           # Core utilities (cn helper)
│   └── index.ts
├── hooks/                 # Custom React hooks
│   ├── use-image-preview.ts    # Image modal with Motion
│   └── use-session-storage.tsx
└── types/                 # TypeScript type definitions
    ├── posts.ts           # PostMetadata, CaseStudyMetadata
    ├── navigation.ts      # NavigationLink, MenuItem, BreadcrumbItem
    ├── notion.ts          # NotionBook interface
    ├── crafts.ts          # ComponentItemType
    └── index.ts           # Centralized type exports

content/                   # MDX blog posts and case studies (13 posts)
public/images/             # Static images organized by feature
```

### Architecture Patterns

**Component Organization**: Components are organized by feature in `modules/` for complex functionality, and `components/` for reusable UI elements. Use `"use client"` directive for all client-side interactive components.

**Content Management**: Blog posts and case studies are written in MDX format in the `content/` directory. The blog system uses `gray-matter` for frontmatter parsing (title, abstract, publishedOn, author, tags, published, type) and supports dynamic routing via `[slug]` pages. Custom MDX components include AnimatedTerminal, CarouselWoved, Highlight, ImagePost, ImageShowcase with custom table and blockquote styling.

**Animation System**:
- **GSAP**: Complex timeline-based animations with `@gsap/react` `useGSAP` hook. Plugins registered: CustomEase, ScrollTrigger, InertiaPlugin, Observer. Use `gsap.context()` for cleanup.
- **Motion**: React-specific animations with spring physics (successor to Framer Motion). Prefer `bounce` and `visualDuration` over cubic-bezier.
- **Lenis**: Smooth scrolling with manual RAF integration in some components.
- **Three.js**: 3D graphics with `@react-three/fiber` and `@react-three/drei`.

**Data Fetching**: Server actions for file operations with `unstable_cache` wrapper (tags: `"blog-posts"`). Notion adapter pattern transforms raw API responses to typed objects.

**Styling**: Tailwind CSS with custom font variables defined in `layout.tsx`. CSS variables in `globals.css` with `@theme` directive. `cn()` helper for class composition (clsx + tailwind-merge). CSS modules for component-scoped styling (e.g., `code-snippet.module.css`).

**Experiments**: The `(experiments)` route group contains 16 interactive demos and prototypes for various UI patterns and animations (GSAP, Three.js, Motion, HTML5 Canvas).

**Canvas Systems**: Dual implementation - `infinite-canvas` (unbounded) and `finite-canvas` (bounded) with mouse tracking and drawing interactions.

**Error Handling**: Error boundaries in `components/common/`. Biome ignore comments with TODO markers for known issues.

## Key Configuration

### Next.js Configuration (next.config.ts)

- MDX support with `mdxRs` experimental flag enabled
- Image optimization: WebP format only, Cloudinary remotePatterns for CDN
- Turbopack rules:
  - `.glsl` files use `glslify-loader`
  - `.svg` files use `@svgr/webpack`
- Experimental `optimizePackageImports`: `@react-three/*`, `@gsap/react`, `gsap`
- Content output file tracing for MDX files
- `next-mdx-remote` transpilation enabled

### TypeScript Configuration (tsconfig.json)

- Target: ES2017
- Strict: true, strictNullChecks: true
- Module resolution: bundler
- Path alias: `@/*` → `src/*`
- Includes specific paths for button-categorization and image-showcase modules

### Biome Configuration (biome.json)

- VCS enabled (git-aware linting)
- Formatter: 2 spaces, enabled
- Linter: recommended + react + next domains
- Ignores: node_modules, .next, dist, build, convex/_generated
- Special rules: `noUnknownAtRules` off, `noImportantStyles` off
- Auto import organization enabled

### PostCSS Configuration (postcss.config.mjs)

- Tailwind CSS v4 PostCSS plugin (`@tailwindcss/postcss`)
- Uses `@theme` directive in `globals.css` for configuration

### Path Aliases

- `@/*` maps to `src/*` for clean imports

### Content Processing

- MDX files processed with custom components (via `mdx-components.tsx`)
- GLSL shaders supported via glslify-loader with reusable includes
- SVG files processed with @svgr/webpack
- Syntax highlighting: Bright, Sugar-high, Prism.js, Shiki with custom themes

### Git Configuration

- **commitlint.config.js**: Conventional commits enforced
- **Husky**: Pre-commit hooks for linting
- Use conventional commit format: `type(scope): message`

## Special Features

**Shader Integration**: Custom GLSL shaders in `components/image-reveal-threejs/` with includes for reusable shader functions (perlin3dNoise, coverUV). Vertex and fragment shaders in `shaders/` directory, loaded via raw-loader and glslify-loader.

**Interactive Experiments**: 16 distinct experiments in `(experiments)` directory showcase different interaction patterns and animation techniques using GSAP, Three.js, Motion, and HTML5 Canvas.

**Blog System**: Dynamic blog with slug-based routing, MDX content, and custom blog components for rich content presentation. Table rendering with custom styling, blockquote styling with dark mode variants.

**Canvas Drawing**: Dual implementation - `infinite-canvas` (unbounded panning/drawing) and `finite-canvas` (bounded area) with mouse tracking interactions.

**Notion Integration**: Adapter pattern in `lib/adapters/notion.ts` for reading books from Notion API with type validation (title, author, status, URL, cover).

**Code Highlighting**: Multiple syntax highlighting options (Bright, Sugar-high, Shiki) with custom themes in `components/code-snippet/`.

**Image System**: Custom image wrapper with preview modal hook (`use-image-preview`). Cloudinary CDN integration, WebP-only optimization.

**Audio Integration**: `use-sound` hook for audio playback in interactive components.

**Performance**:
- Package optimization via experimental Next.js config
- Image format optimization (WebP only)
- Content file tracing for file-based routing
- `unstable_cache` with revalidation tags and periods
- Turbopack support for faster dev builds
- Vercel Speed Insights monitoring

**Navigation System**: Site config in `siteConfig.ts` with feature flags (`isVisible`, `isComingSoon`). Breadcrumb and navigation types. Desktop/mobile header variants with dynamic path resolution.

## Project Metrics

- 122 TypeScript/TSX files in src/
- 30+ component files in components/
- 16 modules in modules/ directory
- 16 experiment routes in (experiments)
- 13 MDX blog posts in content/
- 6+ custom hooks
- 8 type definition files
