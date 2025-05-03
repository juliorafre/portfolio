// components/LenisInit.tsx
'use client';
import { ReactLenis } from 'lenis/react';

export default function LenisInit() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    />
  );
}
