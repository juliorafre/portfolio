import { sampleClothes } from '@/modules/carousel/data/sample.data';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import Observer from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { randomBetween } from '@/lib';
import { RefreshCcwIcon } from 'lucide-react';

gsap.registerPlugin(Observer, useGSAP, ScrollTrigger);

const ImageShowcase = () => {
  const [key, setKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll('.image-card');
        gsap.fromTo(
          cards,
          {
            scale: 0,
            filter: 'blur(10px)',
            rotate: () => randomBetween(-80, -20),
          },
          {
            scale: 1,
            filter: 'blur(0px)',
            rotate: () => randomBetween(-5, 12),
            ease: 'elastic.out(0.5, 0.3, 0.1)', // spring-like
            duration: 0.85,
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              scrub: false,
              start: `top 60%`,
              end: `+=${window.innerHeight / 1.2}`,
            },
          }
        );
      }
    },
    { dependencies: [key], scope: containerRef }
  );

  return (
    <div
      className="inset-shadow-lg relative h-[250px] w-full overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-200 sm:h-[400px] @container/image-showcase"
      ref={containerRef}
    >
      {sampleClothes.map((img, idx) => {
        return (
          <div
            key={img.url}
            id={`image-card-${idx}`}
            className="image-card absolute h-1/3 sm:h-[25vw] max-h-[250px] w-auto bg-transparent select-none"
            style={{
              filter: 'blur(4px)',
              transform: `rotate(-12deg) translateX(0px)`,
              transformOrigin: 'bottom center',
              position: 'absolute',
              top: img.top,
              left: img.left,
            }}
          >
            <Image
              src={img.url}
              width={img.width}
              height={img.height}
              alt={img.alt}
              loading="lazy"
              className="pointer-events-none h-full w-full object-cover drop-shadow-xl"
              style={{
                scale: img.scale,
              }}
            />
          </div>
        );
      })}
      <button
        id="reload-button"
        className="absolute bottom-0 left-0 mb-2 sm:mb-[20px] ml-2 sm:ml-[20px] flex cursor-pointer items-center justify-center gap-x-2 rounded-full bg-white/75 backdrop-blur-xl py-2 px-4 sm:px-2 opacity-60 hover:bg-neutral-100 text-nowrap text-sm sm:text-base"
        onClick={() => setKey(prev => prev + 1)}
        type="button"
        aria-label="Reload animation"
      >
        <RefreshCcwIcon className="size-4 sm:size-5" />
        <span className="sm:sr-only">Reload animation</span>
      </button>
    </div>
  );
};

export default ImageShowcase;
