"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import CarouselItem from "./carousel-item";

gsap.registerPlugin(Observer);

const listOfItems = [
  {
    id: 1,
    image: {
      src: "/images/samples/bakery.png",
      alt: "Image 1",
      width: 400,
      height: 400,
    },
    category: "bakery",
  },
  {
    id: 2,
    image: {
      src: "/images/samples/ramen.png",
      alt: "Image 1",
      width: 400,
      height: 400,
    },
    category: "ramen",
  },
  {
    id: 3,
    image: {
      src: "/images/samples/cafe.png",
      alt: "Image 1",
      width: 400,
      height: 400,
    },
    category: "cafe",
  },
  {
    id: 4,
    image: {
      src: "/images/samples/bar.png",
      alt: "Image 1",
      width: 400,
      height: 400,
    },
    category: "bar",
  },
  {
    id: 5,
    image: {
      src: "/images/samples/flower.png",
      alt: "Image 1",
      width: 400,
      height: 400,
    },
    category: "flower",
  },
  {
    id: 6,
    image: {
      src: "/images/samples/bakery-v3.png",
      alt: "Image 1",
      width: 400,
      height: 400,
    },
    category: "bakery",
  },
  /*  {
    id: 6,
    image: {
      src: '/images/samples/6.jpg',
      alt: 'Image 1',
      width: 400,
      height: 400,
    },
    category: 'nature',
  },
  {
    id: 7,
    image: {
      src: '/images/samples/kyo.png',
      alt: 'Image 1',
      width: 400,
      height: 400,
    },
    category: 'kyo',
  }, */
  {
    id: 8,
    image: {
      src: "/images/samples/flower-2.svg",
      alt: "Image 1",
      width: 400,
      height: 400,
    },
    category: "matcha",
  },
];

const CarouselDragable = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const tl = gsap.timeline();
      const tl2 = gsap.timeline();

      if (!containerRef.current) {
        return;
      }
      const container = document.getElementById("cards-wrapper");
      if (!container) {
        return;
      }

      //const containerHeight = containerRef.current.getBoundingClientRect();
      //const cardsWrapperHeight = container.getBoundingClientRect();

      // I need the distance between container bottom and cardsWrapper bottom
      //const distanceToMove = containerHeight.bottom - cardsWrapperHeight.bottom;

      /* Specific animations */
      const flowerImage = document.getElementById("flower-image");
      const flowerRotation = document.querySelector("#flower-rotate");
      const flowerCenter = document.querySelector("#flower-center");

      const half = container.clientWidth / 2;
      const wrap = gsap.utils.wrap(-half, 0);
      const W = window.innerWidth;

      /* flower infinite animation */

      if (flowerImage) {
        gsap.to(flowerImage, {
          rotation: 360 / 4,
          duration: 4,
          ease: "elastic.inOut(1, 0.3)",
          repeat: -1,
          repeatDelay: 1,
        });
      }

      if (flowerRotation && flowerCenter) {
        tl2
          .to(flowerRotation, {
            rotation: 90,
            duration: 2,
            transformOrigin: "center center",
            ease: "elastic.inOut(1, 0.9)",
            repeat: -1,
            repeatDelay: 1,
          })
          .to(
            flowerCenter,
            {
              fill: "#631809",
              duration: 1,
              ease: "power1.inOut",
              repeat: -1,
              repeatDelay: 2,
              yoyo: true,
            },
            "<0.5",
          );
      }

      /* intro animation */

      tl.fromTo(
        ".card",
        { filter: "blur(10px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, stagger: 0.1 },
      ).fromTo(
        container,
        {
          scale: 1.5,
          transformOrigin: "left center",
        },
        {
          scale: 1,
          // y: distanceToMove,
          duration: 1,
          transformOrigin: "left center",
          ease: "elastic.out(1, 0.9)",
        },
        "-=1",
      );

      /* Desktop animation */
      mm.add("(min-width: 800px)", () => {
        const xTo = gsap.quickTo(container, "x", {
          duration: 1,
          ease: "power3",
          modifiers: {
            x: gsap.utils.unitize(wrap),
          },
        });

        const rotateTo = gsap.quickTo(".card", "rotation", {
          duration: 1,
          ease: "power3",
        });

        let total = 0;

        Observer.create({
          target: container,
          type: "wheel,touch,pointer",
          dragMinimum: 3,
          tolerance: 10,
          preventDefault: true,
          onWheel: (self) => {
            total -= self.deltaX;
            xTo(total);
            const sensitivity = 300;
            const normalizedDelta = (self.deltaX / W) * sensitivity;
            rotateTo(normalizedDelta);
          },
          onDrag: (self) => {
            total += self.deltaX;
            xTo(total);

            const sensitivity = 300;
            const normalizedDelta = (self.deltaX / W) * sensitivity;
            rotateTo(-normalizedDelta);
          },
          onRelease: () => {
            rotateTo(0);
          },
          onStop: () => {
            rotateTo(0);
          },
        });

        return () => {
          /* cleanup automático por matchMedia */
        };
      });

      /* Mobile animation */
      mm.add("(max-width: 799px)", () => {
        const xTo = gsap.quickTo(container, "x", {
          duration: 0.02,
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize(wrap),
          },
        });

        const rotateTo = gsap.quickTo(".card", "rotation", {
          duration: 0.4,
          ease: "power3",
        });
        let total = 0;
        Observer.create({
          target: container,
          type: "wheel,touch,pointer",
          dragMinimum: 1,
          tolerance: 5,
          preventDefault: true,
          onWheel: (self) => {
            total += self.deltaX;
            xTo(-total);
            const sensitivity = 200;
            const normalizedDelta = (self.deltaX / W) * sensitivity;
            rotateTo(-normalizedDelta);
          },
          onDrag: (self) => {
            total += self.deltaX;
            xTo(total);

            const sensitivity = 200;
            const normalizedDelta = (self.deltaX / W) * sensitivity;
            rotateTo(-normalizedDelta);
          },
          onRelease: () => {
            rotateTo(0);
          },
          onStop: () => {
            rotateTo(0);
          },
        });

        return () => {
          /* cleanup automático por matchMedia */
        };
      });

      return () => {
        mm.revert();
        tl.kill();
        tl2.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      className="flex size-full items-center overflow-hidden "
      ref={containerRef}
    >
      <div
        className="flex w-max origin-left scale-150 gap-[2vw] whitespace-nowrap py-0 pr-[2vw] pl-0"
        id="cards-wrapper"
        /* style={{ touchAction: 'pan-y' }} */
      >
        {
          /* Original set of items */
          listOfItems.map((item) => {
            return (
              <button
                className="card size-[30vw] cursor-pointer select-none opacity-0 md:size-[10vw]"
                key={item.id}
                style={{ transformOrigin: "50% 100%" }}
                type="button"
              >
                <Image
                  alt="Image 1"
                  className="pointer-events-none size-full object-cover"
                  height={item.image.height}
                  id={`${item.category}-image`}
                  src={item.image.src}
                  width={item.image.width}
                />
              </button>
            );
          })
        }
        <div
          className="card size-[30vw] cursor-pointer select-none opacity-0 md:size-[10vw]"
          style={{ transformOrigin: "50% 100%" }}
        >
          <CarouselItem />
        </div>

        {
          /* Copy set of items */
          listOfItems.map((item) => {
            return (
              <div
                className="card size-[30vw] cursor-pointer select-none opacity-0 md:size-[10vw]"
                key={item.id + 10}
                style={{ transformOrigin: "50% 100%" }}
              >
                <Image
                  alt="Image 1"
                  className="pointer-events-none size-full object-cover"
                  height={item.image.height}
                  id={`${item.category}-image`}
                  src={item.image.src}
                  width={item.image.width}
                />
              </div>
            );
          })
        }

        <div
          className="card size-[30vw] cursor-pointer select-none opacity-0 md:size-[10vw]"
          style={{ transformOrigin: "50% 100%" }}
        >
          <CarouselItem />
        </div>
      </div>
    </div>
  );
};

export default CarouselDragable;
