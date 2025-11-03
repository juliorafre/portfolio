"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Observer from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefreshCcwIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { randomBetween } from "@/lib";
import { sampleClothes } from "@/modules/carousel/data/sample.data";

gsap.registerPlugin(Observer, useGSAP, ScrollTrigger);

const ImageShowcase = () => {
  const [key, setKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll(".image-card");
        gsap.fromTo(
          cards,
          {
            scale: 0,
            opacity: 1,
            filter: "blur(10px)",
            rotate: () => randomBetween(-80, -20),
          },
          {
            scale: 1,
            filter: "blur(0px)",
            rotate: () => randomBetween(-5, 8),
            ease: "elastic.out(0.4, 0.3, 0.1)", // spring-like
            duration: 0.85,
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              scrub: false,
              start: "top 60%",
              end: `+=${window.innerHeight / 1.2}`,
            },
          },
        );
      }
    },
    { dependencies: [key], scope: containerRef },
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
            <motion.div
              className="size-full"
              whileHover={{
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
            >
              <Image
                alt={img.alt}
                className="pointer-events-none h-full w-full object-contain drop-shadow-xl"
                height={img.height}
                loading="lazy"
                src={img.url}
                style={{
                  scale: img.scale,
                }}
                width={img.width}
              />
            </motion.div>
          </div>
        );
      })}
      {/* Dummy card for testing */}
      {/*       <div
        key={'example-key'}
        id={'example-id'}
        className="image-card absolute aspect-square h-[30vw] max-h-[250px] w-auto bg-transparent select-none sm:h-full"
        style={{
          filter: 'blur(4px)',
          transform: `translate(calc(-50% + 0), calc(-50% + 0))`,
          transformOrigin: 'bottom center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          rotate: '0deg',
        }}
      >
        <motion.div
          className="size-[100px] bg-red-400"
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 10,
          }}
        >
          <p>hi</p>
        </motion.div>
      </div> */}
      {/* End of dummy card */}
      <button
        aria-label="Reload animation"
        className="absolute bottom-0 left-0 mb-2 ml-2 flex cursor-pointer items-center justify-center gap-x-2 text-nowrap rounded-full bg-white/75 px-4 py-2 text-sm opacity-60 backdrop-blur-xl hover:bg-neutral-100 sm:mb-[20px] sm:ml-[20px] sm:px-2 sm:text-base dark:text-gray-900"
        id="reload-button"
        onClick={() => setKey((prev) => prev + 1)}
        type="button"
      >
        <RefreshCcwIcon className="size-4 sm:size-5" />
        <span className="sm:sr-only">Reload animation</span>
      </button>
    </div>
  );
};

export default ImageShowcase;
