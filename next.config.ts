import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */

const withMDX = createMDX({
  extension: /\.(mdx)$/,
});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/juliorafrecloud/**',
      },
    ],
  },
  experimental: {
    mdxRs: true,
    optimizePackageImports: ['@react-three/drei', '@react-three/fiber', 'gsap'],
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
