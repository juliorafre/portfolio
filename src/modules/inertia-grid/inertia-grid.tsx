"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import CustomBounce from "gsap/CustomBounce";
import CustomEase from "gsap/CustomEase";
import InertiaPlugin from "gsap/InertiaPlugin";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, InertiaPlugin, CustomEase, CustomBounce);

const InertiaGrid = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!rootRef.current) return;
    let oldX = 0,
      oldY = 0,
      deltaX = 0,
      deltaY = 0;

    rootRef.current.addEventListener("mousemove", (e) => {
      deltaX = e.clientX - oldX;
      deltaY = e.clientY - oldY;

      oldX = e.clientX;
      oldY = e.clientY;
    });

    // Store initial positions for each element
    const initialPositions = new Map();

    rootRef.current.querySelectorAll(".media").forEach((media) => {
      //const mediaImg = media.querySelector('img') as HTMLImageElement;
      const computedStyle = window.getComputedStyle(media);
      const matrix = new DOMMatrix(computedStyle.transform);

      // Extract rotation from the matrix
      const rotationRadians = Math.atan2(matrix.b, matrix.a);
      const rotationDegrees = rotationRadians * (180 / Math.PI);

      initialPositions.set(media, {
        x: matrix.m41,
        y: matrix.m42,
        rotate: rotationDegrees,
      });

      media.addEventListener("mouseenter", () => {
        const initialPos = initialPositions.get(media);

        const tl = gsap.timeline({
          onComplete: () => {
            tl.kill();
          },
        });
        tl.timeScale(1.2);
        // const mediaImg = media.querySelector('img');

        const bounceEase = CustomBounce.create("myBounce", {
          strength: 0.7,
          endAtStart: false,
        });

        tl.to(media, {
          inertia: {
            x: {
              velocity: deltaX * 40,
              end: initialPos.x,
            },
            y: {
              velocity: deltaY * 40,
              end: initialPos.y,
            },
          },
          ease: bounceEase,
        });
        tl.fromTo(
          media,
          {
            rotate: initialPos.rotate,
          },
          {
            duration: 1,
            rotate: (Math.random() - 0.5) * 20,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
          "<",
        );
      });
    });
  });

  return (
    <div
      className="mx-auto h-full w-full max-w-3xl"
      id="inertia-grid"
      ref={rootRef}
    >
      {/* <div className="grid grid-cols-2 gap-6 p-10 md:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="media rounded-lg will-change-transform" key={index}>
            <Image
              src={`/images/samples/minis/mini-${index + 1}.png`}
              alt="mini-1"
              width={800}
              height={800}
              className="pointer-events-none size-[11vw] h-full w-full rounded-lg object-contain will-change-transform"
            />
          </div>
        ))}
      </div> */}
      <div className="flex w-full items-center justify-center gap-x-1">
        <div
          className="media rounded-lg will-change-transform"
          style={{
            transform: "rotate(4deg) translateX(100px)",
          }}
        >
          <Image
            alt="mini-1"
            className="pointer-events-none size-[11vw] h-full w-full rounded-lg object-contain will-change-transform"
            height={800}
            src={"/images/samples/minis/mini-1.png"}
            width={800}
          />
        </div>
        <div
          className="media rounded-lg will-change-transform"
          style={{
            transform: "translateY(-20px) rotate(-8deg) translateX(30px)",
          }}
        >
          <Image
            alt="mini-1"
            className="pointer-events-none size-[11vw] h-full w-full rounded-lg object-contain will-change-transform"
            height={800}
            src={"/images/samples/minis/mini-2.png"}
            width={800}
          />
        </div>
        <div
          className="media rounded-lg will-change-transform"
          style={{
            transform: "rotate(8deg) translateX(-30px)",
          }}
        >
          <Image
            alt="mini-1"
            className="pointer-events-none size-[11vw] h-full w-full rounded-lg object-contain will-change-transform"
            height={800}
            src={"/images/samples/minis/mini-3.png"}
            width={800}
          />
        </div>
        <div
          className="media rounded-lg will-change-transform"
          style={{
            transform: "translateX(-100px) translateY(-0px) rotate(-6deg)",
          }}
        >
          <Image
            alt="mini-1"
            className="pointer-events-none size-[11vw] h-full w-full rounded-lg object-contain will-change-transform"
            height={800}
            src={"/images/samples/minis/mini-4.png"}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default InertiaGrid;
