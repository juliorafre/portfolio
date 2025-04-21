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
            rotate: () => randomBetween(-5, 8),
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
      className="inset-shadow-lg @container/image-showcase relative min-h-[280px] w-full overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-200 aspect-video"
      ref={containerRef}
    >
      {sampleClothes.map((img, idx) => {
        return (
          <div
            key={img.url}
            id={`image-card-${idx}`}
            className="image-card absolute h-[30vw] max-h-[250px] w-auto bg-transparent select-none sm:h-full aspect-square"
            style={{
              filter: 'blur(4px)',
              transform: `translate(calc(-50% + ${img.translateX}), calc(-50% + ${img.translateY}))`,
              transformOrigin: 'bottom center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              rotate: '0deg',
            }}
          >
            <Image
              src={img.url}
              width={img.width}
              height={img.height}
              alt={img.alt}
              loading="lazy"
              className="pointer-events-none h-full w-full object-contain drop-shadow-xl"
              style={{
                scale: img.scale,
              }}
            />
          </div>
        );
      })}
      <button
        id="reload-button"
        className="absolute bottom-0 left-0 mb-2 ml-2 flex cursor-pointer items-center justify-center gap-x-2 rounded-full bg-white/75 px-4 py-2 text-sm text-nowrap opacity-60 backdrop-blur-xl hover:bg-neutral-100 sm:mb-[20px] sm:ml-[20px] sm:px-2 sm:text-base"
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
