'use client';

import { Canvas } from '@react-three/fiber';
import { animate } from 'motion';
import { useMotionValue } from 'motion/react';
import { useState } from 'react';
import RevealImage from '@/components/image-reveal-threejs/image-reveal-material';

const ImageRevealShadersPage = () => {
  // REVEAL PROGRESS ANIMATION
  const [isRevealed, setIsRevealed] = useState(true);
  const revealProgress = useMotionValue(0);

  const handleReveal = () => {
    animate(revealProgress, isRevealed ? 0 : 1, {
      duration: 1.5,
      ease: 'easeInOut',
    });
    setIsRevealed(!isRevealed);
  };

  return (
    <div className="main-container">
      <div className="relative flex items-center justify-center">
        <div className="absolute top-0 left-0 size-[400px] bg-green-300"></div>
        <Canvas
          className="absolute top-0 left-0 z-10"
          style={{
            width: '300px',
            height: '300px',
          }}
        >
          <RevealImage imageTexture="/images/example.png" revealProgress={revealProgress} />
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 text-nowrap max-sm:bottom-44">
        <button
          onClick={handleReveal}
          className="rounded-md bg-neutral-800 px-4 py-2 text-sm text-white"
        >
          Show/hide
        </button>
      </div>
    </div>
  );
};

export default ImageRevealShadersPage;
