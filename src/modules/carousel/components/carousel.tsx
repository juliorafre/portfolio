'use client';
import gsap from 'gsap';
import Observer from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Image from 'next/image';
import { imagesList } from '@/modules/carousel/data/carousel.data';

gsap.registerPlugin(Observer, useGSAP);

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll('.card');
        const cardsLength = cards.length / 2;
        const contentHalf = containerRef.current.clientWidth / 2;

        const wrap = gsap.utils.wrap(-contentHalf, 0);

        const xTo = gsap.quickTo(containerRef.current, 'x', {
          duration: 0.5,
          ease: 'power3',
          modifiers: {
            x: gsap.utils.unitize(wrap),
          },
        });

        const itemValues: number[] = [];

        for (let i = 0; i < cardsLength; i++) {
          itemValues.push((Math.random() - 0.5) * 2);
        }

        const tl = gsap.timeline({ paused: true });

        tl.to(cards, {
          rotate: index => itemValues[index % cardsLength],
          xPercent: index => itemValues[index % cardsLength],
          yPercent: index => itemValues[index % cardsLength],
          scale: 0.95,
          duration: 0.5,
          // cards will move with a slight rebound:
          ease: 'back.inOut(3)',
        });

        let total = 0;

        const tick = (time: number, deltaTime: number) => {
          total -= deltaTime / 20; // Adjust the speed of automatic scrolling
          xTo(total);
        };

        gsap.ticker.add(tick);

        Observer.create({
          target: containerRef.current,
          type: 'pointer,touch',
          onPress: () => {
            tl.play();
            gsap.ticker.remove(tick);
          },
          onDrag: self => {
            total += self.deltaX;
            xTo(total);
          },
          onRelease: () => {
            tl.reverse();
            gsap.ticker.add(tick);
          },
          onStop: () => {
            tl.reverse();
            gsap.ticker.add(tick);
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div className="flex w-full items-center overflow-clip">
      <div
        className="flex w-max cursor-grab gap-[1vw] pt-0 pr-[1vw] pb-0 pl-0 whitespace-nowrap select-none active:cursor-grabbing"
        ref={containerRef}
      >
        {imagesList.map((img, index) => (
          <div
            className="card aspect-video w-[80vw] overflow-hidden bg-red-50 lg:w-[672px]"
            key={index}
          >
            <Image
              src={img.url}
              width={3600}
              height={1834}
              alt={img.alt}
              priority
              className="pointer-events-none size-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
