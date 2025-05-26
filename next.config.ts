import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    mdxRs: true,
    optimizePackageImports: ['@react-three/drei', '@react-three/fiber', 'gsap']
  },
  turbopack: {
    rules: {
      '*.glsl': {
        loaders: ['glslify-loader'],
      },
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default withMDX(nextConfig);
