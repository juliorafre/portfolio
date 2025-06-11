'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Observer } from 'gsap/Observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(Observer, ScrollTrigger);

const CarouselWowed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.carousel-card');

    // Create a continuous animation based on scroll position
    const updateCardScales = () => {
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;

        // Calculate distance from center (normalized)
        const distance = Math.abs(cardCenter - containerCenter);
        const maxDistance = containerRect.width / 2 + cardRect.width / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);

        // Calculate scale: 1.1 at center (distance = 0), 0.9 at maximum distance
        const scale = 1.1 - normalizedDistance * 0.2; // 1.1 -> 0.9
        const opacity = 1 - normalizedDistance * 0.3; // 1 -> 0.7

        // Apply the calculated values directly
        gsap.set(card, {
          scale: Math.max(scale, 0.9), // Ensure minimum scale of 0.9
          opacity: Math.max(opacity, 0.7), // Ensure minimum opacity of 0.7
        });
      });
    };

    // Initial calculation
    updateCardScales();

    // Use GSAP's ticker for smooth 60fps updates
    const ticker = gsap.ticker.add(updateCardScales);

    // Also listen to scroll events for immediate updates
    container.addEventListener('scroll', updateCardScales, { passive: true });

    return () => {
      gsap.ticker.remove(ticker);
      container.removeEventListener('scroll', updateCardScales);
    };
  }, []);

  return (
    <section id="carousel-wowed" className="full-wide my-0 md:hidden">
      <div
        ref={containerRef}
        id="carousel-wowed-container"
        className="scrollbar-hide md:scroll-pl-12.5vw md:scroll-pr-12.5vw flex h-[60vh] w-full snap-x snap-mandatory gap-x-4 overflow-x-auto overflow-y-clip scroll-smooth md:gap-x-10"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: '12.5vw',
          paddingRight: '12.5vw',
        }}
      >
        <div className="carousel-card flex h-full w-[65vw] shrink-0 snap-center items-center justify-center md:w-[20vw] md:snap-start">
          <div className="aspect-square h-auto w-full">
            <Image
              className="h-full w-full rounded-lg object-cover shadow"
              src="/images/samples/minis/mini-1.png"
              alt="Carousel Image 1"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>

        <div className="carousel-card flex h-full w-[65vw] shrink-0 snap-center items-center justify-center md:w-[20vw] md:snap-start">
          <div className="aspect-square h-auto w-full">
            <Image
              className="h-full w-full rounded-lg object-cover shadow"
              src="/images/samples/minis/mini-2.png"
              alt="Carousel Image 2"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="carousel-card flex h-full w-[65vw] shrink-0 snap-center items-center justify-center md:w-[20vw] md:snap-start">
          <div className="aspect-square h-auto w-full">
            <Image
              className="h-full w-full rounded-lg object-cover shadow"
              src="/images/samples/minis/mini-3.png"
              alt="Carousel Image 3"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="carousel-card flex h-full w-[65vw] shrink-0 snap-center items-center justify-center md:w-[20vw] md:snap-start">
          <div className="aspect-square h-auto w-full">
            <Image
              className="h-full w-full rounded-lg object-cover shadow"
              src="/images/samples/minis/mini-4.png"
              alt="Carousel Image 4"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="carousel-card flex h-full w-[65vw] shrink-0 snap-center items-center justify-center md:w-[20vw] md:snap-start">
          <div className="aspect-square h-auto w-full">
            <Image
              className="h-full w-full rounded-lg object-cover shadow"
              src="/images/samples/minis/mini-5.png"
              alt="Carousel Image 5"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="carousel-card flex h-full w-[65vw] shrink-0 snap-center items-center justify-center md:w-[20vw] md:snap-start">
          <div className="aspect-square h-auto w-full">
            <Image
              className="h-full w-full rounded-lg object-cover shadow"
              src="/images/samples/minis/mini-6.png"
              alt="Carousel Image 6"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="carousel-card flex h-full w-[65vw] shrink-0 snap-center items-center justify-center md:w-[20vw] md:snap-start">
          <div className="aspect-square h-auto w-full">
            <Image
              className="h-full w-full rounded-lg object-cover shadow"
              src="/images/samples/minis/mini-7.png"
              alt="Carousel Image 7"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselWowed;
