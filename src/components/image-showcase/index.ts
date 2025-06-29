'use client';

import dynamic from 'next/dynamic';

const ImageShowcase = dynamic(() => import('./image-showcase'));

export default ImageShowcase;
