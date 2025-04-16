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
    <div className="relative h-[400px] w-full rounded-4xl bg-neutral-200" ref={containerRef}>
    {sampleClothes.map((img, idx) => {
      return (
        <div
          key={img.url}
          id={`image-card-${idx}`}
          className="image-card absolute h-[250px] w-auto bg-transparent select-none"
          style={{
            filter: 'blur(4px)',
            transform: `scale(0) rotate(-12deg) translateX(0px)`,
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
            className="pointer-events-none size-full object-cover drop-shadow-xl"
            style={{
              scale: img.scale,
            }}
          />
        </div>
      );
    })}
    <button
      className="absolute bottom-0 left-0 mb-[20px] ml-[20px] cursor-pointer rounded-full bg-white p-[8px] opacity-60 hover:bg-neutral-100"
      onClick={() => setKey(prev => prev + 1)}
      type="button"
      aria-label="Reload animation"
    >
      <span className="sr-only">Reload animation</span>
      <RefreshCcwIcon size={20} />
    </button>
  </div>
  );
};

export default ImageShowcase;
