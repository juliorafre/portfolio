"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "../ui/button";
import Product from "./product";

gsap.registerPlugin(Draggable, InertiaPlugin);

const columns = Array.from({ length: 12 }, (_, i) => ({ id: `col-${i}` }));

const images = [
  {
    id: "img-1",
    src: "/images/crafts/palmer-canvas/img-1.png",
  },
  {
    id: "img-2",
    src: "/images/crafts/palmer-canvas/img-2.png",
  },
  {
    id: "img-3",
    src: "/images/crafts/palmer-canvas/img-3.png",
  },
  {
    id: "img-4",
    src: "/images/crafts/palmer-canvas/img-4.png",
  },
  {
    id: "img-5",
    src: "/images/crafts/palmer-canvas/img-5.png",
  },
  {
    id: "img-6",
    src: "/images/crafts/palmer-canvas/img-6.png",
  },
  {
    id: "img-7",
    src: "/images/crafts/palmer-canvas/img-7.png",
  },
];

const FiniteCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const grid = gridRef.current;
      const products = grid.querySelectorAll(".product");
      let draggableInstance: Draggable | null = null;
      let observerGridInstance: IntersectionObserver | null = null;

      const centerGrid = () => {
        const gridWidth = grid.offsetWidth;
        const gridHeight = grid.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const centerX = (windowWidth - gridWidth) / 2;
        const centerY = (windowHeight - gridHeight) / 2;

        gsap.set(grid, { x: centerX, y: centerY });
      };

      const setDraggable = () => {
        return Draggable.create(grid, {
          type: "x,y",
          bounds: {
            minX: -(grid.offsetWidth - window.innerWidth) - 200,
            maxX: 200,
            minY: -(grid.offsetHeight - window.innerHeight) - 100,
            maxY: 100,
          },
          inertia: true,
          allowEventDefault: false,
          edgeResistance: 0.9,
        })[0];
      };

      const eventWheel = (e: WheelEvent) => {
        e.preventDefault();

        const deltaX = -e.deltaX * 7;
        const deltaY = -e.deltaY * 7;

        const currentX = gsap.getProperty(grid, "x") as number;
        const currentY = gsap.getProperty(grid, "y") as number;

        const newX = (currentX + deltaX) as number;
        const newY = (currentY + deltaY) as number;

        type Bounds = {
          minX: number;
          maxX: number;
          minY: number;
          maxY: number;
        };
        const bounds = draggableInstance?.vars.bounds as Bounds | undefined;
        if (!bounds) return;
        const clampedX = Math.max(bounds.minX, Math.min(bounds.maxX, newX));
        const clampedY = Math.max(bounds.minY, Math.min(bounds.maxY, newY));

        gsap.to(grid, {
          x: clampedX,
          y: clampedY,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      const observerGrid = () => {
        return new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                gsap.to(entry.target, {
                  scale: 1,
                  opacity: 1,
                  duration: 0.5,
                  ease: "power2.out",
                });
              } else {
                gsap.to(entry.target, {
                  opacity: 0,
                  scale: 0.5,
                  duration: 0.5,
                  ease: "power2.in",
                });
              }
            });
          },
          { root: null, threshold: 0.1 },
        );
      };

      const intro = () => {
        centerGrid();
        const timeline = gsap.timeline();
        timeline.set(grid, { scale: 0.7 });
        timeline.set(".product", {
          scale: 0.5,
          opacity: 0,
        });
        timeline.to(".product", {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: {
            amount: 1.2,
            from: "random",
          },
        });
        timeline.to(grid, {
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: () => {
            draggableInstance = setDraggable();
            window.addEventListener("wheel", eventWheel, {
              passive: false,
            });
            observerGridInstance = observerGrid();
            products.forEach((product) => {
              if (observerGridInstance) observerGridInstance.observe(product);
            });
          },
        });
      };

      intro();

      return () => {
        window.removeEventListener("wheel", eventWheel);
        if (observerGridInstance) {
          observerGridInstance.disconnect();
        }
      };
    },
    {
      scope: containerRef,
      dependencies: [gridRef],
    },
  );

  return (
    <div
      ref={containerRef}
      id="container"
      className="fixed h-full w-full top-0 left-0 bg-white z-90"
    >
      <div className="absolute z-20 bottom-0 left-0 w-full h-[100px] md:block hidden">
        <div className="container mx-auto size-full flex justify-center items-center px-4 md:px-0">
          <Link href="/crafts" className="text-black">
            <Button variant="outline" className="cursor-pointer">
              Back to Crafts
            </Button>
          </Link>
        </div>
      </div>

      <div
        ref={gridRef}
        id="grid"
        className="absolute scale-70 z-10 flex gap-[10vw] md:gap-[5vw] cursor-grab bg-white"
      >
        {columns.map((column) => {
          return (
            <div
              key={column.id}
              id="column"
              className="flex flex-col gap-[10vw] md:gap-[5vw] even:mt-[10vw]"
            >
              {images.map((image) => (
                <Product key={image.id} imageSrc={image.src} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiniteCanvas;
