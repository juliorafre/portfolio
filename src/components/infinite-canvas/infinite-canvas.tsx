'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Observer } from 'gsap/Observer';
import { useRef, useState } from 'react';
import CustomEase from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InfiniteVeil from './infinite-veil';
import MemoryGrid from './memory-grid';
import MemoryCard from './memory-card';

gsap.registerPlugin(useGSAP, Observer, CustomEase, ScrollTrigger);

interface MemoryCardProps {
  id: number;
  layoutIdPrefix: number;
}

const InfiniteCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedMemory, setSelectedMemory] = useState<MemoryCardProps | null>(null);

  const handleMemoryClick = ({ id, layoutIdPrefix }: MemoryCardProps) => {
    setSelectedMemory({ id, layoutIdPrefix });
  };

  const resetSelectedMemory = () => {
    setSelectedMemory(null);
  };

  useGSAP(
    () => {
      const container = document.querySelector('.infinite-wrapper');
      const wrapper = document.querySelector('#infinite-canvas');
      const images = document.querySelectorAll('.image-wrapper');

      let ObserverInstance = null;

      if (container && wrapper && images) {
        gsap.to(images, {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: 'elastic.out(1,1.5)',
          delay: 1,
          stagger: {
            each: 0.1,
            grid: [5, 6],
            from: 'start',
          },
        });

        // Add mouseover to images
        images.forEach(image => {
          const onMouseOver = () => gsap.to(image, { scale: 1.2, duration: 0.3, ease: 'power4' });
          const onMouseOut = () => gsap.to(image, { scale: 1, duration: 0.3, ease: 'power4' });
          image.addEventListener('mouseover', onMouseOver);
          image.addEventListener('mouseout', onMouseOut);
        });

        // X axis
        const halfX = container.clientWidth / 2; // Half of the container width
        const wrapX = gsap.utils.wrap(-halfX, 0); // Wrap the container width
        const xTo = gsap.quickTo(container, 'x', {
          duration: 2, // Will change over 1.5s
          ease: 'power4', // Non-linear
          modifiers: {
            x: gsap.utils.unitize(wrapX),
          },
        });

        // Y axis
        const halfY = container.clientHeight / 2;
        const wrapY = gsap.utils.wrap(-halfY, 0);
        const yTo = gsap.quickTo(container, 'y', {
          duration: 2, // Will change over 1.5s
          ease: 'power4', // Non-linear
          modifiers: {
            y: gsap.utils.unitize(wrapY),
          },
        });

        wrapper.addEventListener(
          'wheel',
          e => {
            e.preventDefault();
          },
          {
            passive: false,
          }
        );

        wrapper.addEventListener(
          'touchmove',
          e => {
            e.preventDefault();
          },
          {
            passive: false,
          }
        );

        wrapper.addEventListener(
          'pointermove',
          e => {
            e.preventDefault();
          },
          {
            passive: false,
          }
        );

        let incrX = 0,
          incrY = 0;

        // Observer to handle wheel and drag events
        ObserverInstance = Observer.create({
          target: container,
          type: 'wheel,touch,pointer', // Handles wheel, touch, and drag
          dragMinimum: 5,
          onChangeX: self => {
            if (self.event.type === 'wheel') incrX -= self.deltaX;
            else incrX += self.deltaX * 2;

            xTo(incrX); // smoothly animate to the new x position
          },
          onChangeY: self => {
            if (self.event.type === 'wheel')
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
    }
  );

  return (
    <div className="smooth-infinite-wrapper">
      <div className="smooth-infinite-content">
        <div
          id="infinite-canvas"
          className="inset-shadow-lg @container/wrapper relative aspect-video w-full overflow-hidden overscroll-contain rounded-2xl border border-neutral-200 bg-neutral-200"
        >
          {/* Memory Card Item */}
          <MemoryCard selectedMemory={selectedMemory} resetSelectedMemory={resetSelectedMemory} />

          {/* Veil - Title */}
          <InfiniteVeil />

          {/* Infinite Canvas */}
          <div
            ref={containerRef}
            className="infinite-wrapper grid grid-cols-2 will-change-transform"
            style={{
              width: 'max-content',
            }}
          >
            {[1, 2, 3, 4].map(index => {
              const isAriaHidden = index === 1 ? false : true;
              return (
                <MemoryGrid
                  key={index}
                  idPrefix={index}
                  isAriaHidden={isAriaHidden}
                  handleMemoryClick={handleMemoryClick}
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
