"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Observer from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefreshCcwIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import { randomBetween } from "@/lib";
import { sampleClothes } from "@/modules/carousel/data/sample.data";

gsap.registerPlugin(Observer, useGSAP, ScrollTrigger);

const ImageShowcase = () => {
  const [key, setKey] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<GSAPTimeline | null>(null);

  const handleImageLoad = useCallback((url: string) => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(url);
      return newSet;
    });
  }, []);

  const allImagesLoaded = useMemo(() => {
    return loadedImages.size === sampleClothes.length;
  }, [loadedImages]);

  const resetAnimation = useCallback(() => {
    setKey((prev) => prev + 1);
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      if (!allImagesLoaded) return;
      timelineRef.current = gsap.timeline();
      const timeline = timelineRef.current;

      gsap.set(".image-card", {
        scale: 0.4,
        opacity: 0,
        filter: "blur(4px)",
        rotate: () => randomBetween(-80, -20),
      });

      timeline.to(".image-card", {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        rotate: () => randomBetween(-5, 8),
        ease: "elastic.out(0.4, 0.3, 0.1)",
        duration: 0.85,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: false,
          start: "top 60%",
          end: `+=${window.innerHeight / 1.2}`,
        },
      });
    },
    { dependencies: [key, allImagesLoaded], scope: containerRef },
  );

  return (
    <div
      className="@container/image-showcase relative inset-shadow-lg aspect-video min-h-[280px] w-full overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-200"
      ref={containerRef}
    >
      {sampleClothes.map((img, idx) => {
        return (
          <div
            className="image-card aspect-square h-[30vw] max-h-[250px] w-auto select-none bg-transparent sm:h-full"
            id={`image-card-${idx}`}
            key={img.url}
            style={{
              filter: "blur(4px)",
              transform: `translate(calc(-50% + ${img.translateX}), calc(-50% + ${img.translateY}))`,
              transformOrigin: "bottom center",
              position: "absolute",
              top: "50%",
              left: "50%",
              rotate: "0deg",
              opacity: 0,
            }}
          >
            <div className="size-full">
              <Image
                alt={img.alt}
                className="pointer-events-none h-full w-full object-contain drop-shadow-xl"
                height={img.height}
                loading="eager"
                src={img.url}
                style={{
                  scale: img.scale,
                }}
                onLoad={() => handleImageLoad(img.url)}
                width={img.width}
              />
            </div>
          </div>
        );
      })}
      <button
        aria-label="Reload animation"
        className="absolute bottom-0 left-0 mb-2 ml-2 flex cursor-pointer items-center justify-center gap-x-2 text-nowrap rounded-full bg-white/75 px-4 py-2 text-sm opacity-60 backdrop-blur-xl hover:bg-neutral-100 sm:mb-[20px] sm:ml-[20px] sm:px-2 sm:text-base dark:text-gray-900"
        id="reload-button"
        onClick={resetAnimation}
        type="button"
      >
        <RefreshCcwIcon className="size-4 sm:size-5" />
        <span className="sm:sr-only">Reload animation</span>
      </button>
    </div>
  );
};

export default ImageShowcase;
