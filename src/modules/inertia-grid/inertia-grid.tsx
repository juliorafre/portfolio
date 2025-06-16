'use client';

import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import InertiaPlugin from 'gsap/InertiaPlugin';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, InertiaPlugin);

const InertiaGrid = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!rootRef.current) return;
    let oldX = 0,
      oldY = 0,
      deltaX = 0,
      deltaY = 0;

    rootRef.current.addEventListener('mousemove', e => {
      deltaX = e.clientX - oldX;
      deltaY = e.clientY - oldY;

      oldX = e.clientX;
      oldY = e.clientY;
    });

    rootRef.current.querySelectorAll('.media').forEach(media => {
      media.addEventListener('mouseenter', () => {
        const tl = gsap.timeline({
          onComplete: () => {
            tl.kill();
          },
        });
        tl.timeScale(1.2);
        const mediaImg = media.querySelector('img');
        tl.to(mediaImg, {
          inertia: {
            x: {
              velocity: deltaX * 40,
              end: 0,
            },
            y: {
              velocity: deltaY * 40,
              end: 0,
            },
          },
        });
        tl.fromTo(
          mediaImg,
          {
            rotate: 0,
          },
          {
            duration: 0.4,
            rotate: (Math.random() - 0.5) * 30,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut',
          },
          '<'
        );
      });
    });
  });

  return (
    <div ref={rootRef} id="inertia-grid" className="mx-auto h-full w-full max-w-3xl">
      <div className="grid grid-cols-2 gap-6 p-10 md:grid-cols-4">
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
      </div>
    </div>
  );
};

export default InertiaGrid;
