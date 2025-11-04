"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import InfiniteVeil from "./infinite-veil";
import MemoryCard from "./memory-card";
import MemoryGrid from "./memory-grid";

gsap.registerPlugin(useGSAP, Observer, CustomEase, ScrollTrigger);

interface MemoryCardProps {
  id: number;
  layoutIdPrefix: number;
}

const InfiniteCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedMemory, setSelectedMemory] = useState<MemoryCardProps | null>(
    null,
  );

  const handleMemoryClick = ({ id, layoutIdPrefix }: MemoryCardProps) => {
    setSelectedMemory({ id, layoutIdPrefix });
  };

  const resetSelectedMemory = () => {
    setSelectedMemory(null);
  };

  /* ----------------------------------------------------------------------------- */
  /* GSAP IMPLEMENTATION */
  /* ----------------------------------------------------------------------------- */
  useGSAP(
    () => {
      const container = document.querySelector(".infinite-wrapper");
      const wrapper = document.querySelector("#infinite-canvas");
      const images = document.querySelectorAll(".image-wrapper");

      let ObserverInstance = null;

      if (container && wrapper && images) {
        gsap.fromTo(
          images,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            duration: 1,
            opacity: 1,
            scale: 1,
            ease: "elastic.out(1,1.5)",
            delay: 1,
            stagger: {
              each: 0.1,
              grid: [5, 6],
              from: "start",
            },
          },
        );

        // Add mouseover to images
        images.forEach((image) => {
          const onMouseOver = () =>
            gsap.to(image, {
              scale: 1.2,
              duration: 0.65,
              ease: "elastic.out(1, 0.75)",
            });
          const onMouseOut = () =>
            gsap.to(image, {
              scale: 1,
              duration: 0.65,
              ease: "elastic.out(1, 0.75)",
            });
          image.addEventListener("mouseover", onMouseOver);
          image.addEventListener("mouseout", onMouseOut);
        });

        // X axis
        const halfX = container.clientWidth / 2; // Half of the container width
        const wrapX = gsap.utils.wrap(-halfX, 0); // Wrap the container width
        const xTo = gsap.quickTo(container, "x", {
          duration: 2, // Will change over 1.5s
          ease: "power4", // Non-linear
          modifiers: {
            x: gsap.utils.unitize(wrapX),
          },
        });

        // Y axis
        const halfY = container.clientHeight / 2;
        const wrapY = gsap.utils.wrap(-halfY, 0);
        const yTo = gsap.quickTo(container, "y", {
          duration: 2, // Will change over 1.5s
          ease: "power4", // Non-linear
          modifiers: {
            y: gsap.utils.unitize(wrapY),
          },
        });

        wrapper.addEventListener(
          "wheel",
          (e) => {
            e.preventDefault();
          },
          {
            passive: false,
          },
        );

        wrapper.addEventListener(
          "touchmove",
          (e) => {
            e.preventDefault();
          },
          {
            passive: false,
          },
        );

        wrapper.addEventListener(
          "pointermove",
          (e) => {
            e.preventDefault();
          },
          {
            passive: false,
          },
        );

        let incrX = 0,
          incrY = 0;

        // Observer to handle wheel and drag events
        ObserverInstance = Observer.create({
          target: container,
          type: "wheel,touch,pointer", // Handles wheel, touch, and drag
          dragMinimum: 5,
          onChangeX: (self) => {
            if (self.event.type === "wheel") incrX -= self.deltaX;
            else incrX += self.deltaX * 2;

            xTo(incrX); // smoothly animate to the new x position
          },
          onChangeY: (self) => {
            if (self.event.type === "wheel")
              incrY -= self.deltaY; // Update incrY based on the vertical movement
            else incrY += self.deltaY * 2;

            yTo(incrY); // Smoothly animate to the new y position
          },
        });
      }
      return () => {
        if (ObserverInstance) {
          ObserverInstance.kill();
        }
      };
    },
    {
      scope: containerRef,
      revertOnUpdate: true,
    },
  );

  return (
    <div className="smooth-infinite-wrapper">
      <div className="smooth-infinite-content">
        <div
          className="@container/wrapper relative inset-shadow-2xl aspect-video w-full overflow-hidden overscroll-contain rounded-2xl border border-neutral-300 bg-neutral-200"
          id="infinite-canvas"
        >
          {/* Memory Card Item */}
          <MemoryCard
            resetSelectedMemory={resetSelectedMemory}
            selectedMemory={selectedMemory}
          />

          {/* Veil - Title */}
          <InfiniteVeil />

          {/* Infinite Canvas */}
          <div
            className="infinite-wrapper grid grid-cols-2 will-change-transform"
            ref={containerRef}
            style={{
              width: "max-content",
            }}
          >
            {[1, 2, 3, 4].map((index) => {
              const isAriaHidden = index !== 1;
              return (
                <MemoryGrid
                  handleMemoryClick={handleMemoryClick}
                  idPrefix={index}
                  isAriaHidden={isAriaHidden}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCanvas;
