import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
