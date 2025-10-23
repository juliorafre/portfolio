// components/LenisInit.tsx
"use client";
import { ReactLenis } from "lenis/react";

export default function LenisInit() {
  return (
    <ReactLenis
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      }}
      root
    />
  );
}
