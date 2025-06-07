import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */

const withMDX = createMDX({
  extension: /\.(mdx)$/,
});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    useCache: true,
    mdxRs: true,
    optimizePackageImports: ['@react-three/drei', '@react-three/fiber', 'gsap']
  },
  outputFileTracingIncludes: {
    '/*': ['./content/**/*'],
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
  transpilePackages: ['next-mdx-remote'],
};



export default withMDX(nextConfig);
