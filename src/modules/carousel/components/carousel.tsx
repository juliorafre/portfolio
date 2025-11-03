"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Observer from "gsap/Observer";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { imagesList } from "@/modules/carousel/data/carousel.data";

gsap.registerPlugin(Observer, useGSAP);

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  // Function to update card scales based on their position relative to the center
  const updateCardScales = useCallback(() => {
    if (!(containerRef.current && carouselWrapperRef.current)) return;

    const cards = containerRef.current.querySelectorAll(".card");
    const wrapperRect = carouselWrapperRef.current.getBoundingClientRect();
    const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;

      // Calculate distance from wrapper center
      const distanceFromCenter = Math.abs(cardCenter - wrapperCenter);
      const cardWidth = cardRect.width;

      // Normalize distance (0 = center, 1 = edge of card width)
      const normalizedDistance = Math.min(
        distanceFromCenter / (cardWidth * 0.6),
        1,
      );

      // Calculate scale: 1.1 for focused (center), 0.9 for distant
      const targetScale = 1.1 - normalizedDistance * 0.2;
      const clampedScale = Math.max(0.9, Math.min(1.1, targetScale));

      // Apply smooth scaling with GSAP
      gsap.to(card, {
        scale: clampedScale,
        duration: 0.3,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    });
  }, []);

  useGSAP(
    () => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll(".card");
        const cardsLength = cards.length / 2;
        const contentHalf = containerRef.current.clientWidth / 2;

        const wrap = gsap.utils.wrap(-contentHalf, 0);

        const xTo = gsap.quickTo(containerRef.current, "x", {
          duration: 0.5,
          ease: "power3",
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
          rotate: (index) => itemValues[index % cardsLength],
          xPercent: (index) => itemValues[index % cardsLength],
          yPercent: (index) => itemValues[index % cardsLength],
          scale: 0.95,
          duration: 0.5,
          // cards will move with a slight rebound:
          ease: "back.inOut(3)",
        });

        // Initialize card scales
        gsap.set(cards, { scale: 0.9 });

        // Initial scale update
        setTimeout(updateCardScales, 100);

        let total = 0;

        const tick = (_time: number, deltaTime: number) => {
          total -= deltaTime / 20; // Adjust the speed of automatic scrolling
          xTo(total);
          // Update scales continuously during automatic scrolling
          updateCardScales();
        };

        gsap.ticker.add(tick);

        Observer.create({
          target: containerRef.current,
          type: "pointer,touch",
          onPress: () => {
            tl.play();
            gsap.ticker.remove(tick);
          },
          onDrag: (self) => {
            total += self.deltaX;
            xTo(total);
            // Update scales during drag
            updateCardScales();
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

        // Add resize listener to recalculate scales
        const handleResize = () => {
          setTimeout(updateCardScales, 100);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
          window.removeEventListener("resize", handleResize);
          gsap.ticker.remove(tick);
        };
      }
    },
    { scope: containerRef, dependencies: [updateCardScales] },
  );

  return (
    <div
      className="flex w-full items-center overflow-clip"
      ref={carouselWrapperRef}
    >
      <div
        className="flex w-max cursor-grab select-none gap-[1vw] whitespace-nowrap pt-0 pr-[1vw] pb-0 pl-0 active:cursor-grabbing"
        ref={containerRef}
      >
        {imagesList.map((img, index) => (
          <div
            className="card aspect-video w-[80vw] overflow-hidden bg-red-50 transition-transform lg:w-[672px]"
            // biome-ignore lint/suspicious/noArrayIndexKey: TODO fix later
            key={index}
          >
            <Image
              alt={img.alt}
              className="pointer-events-none size-full object-cover"
              height={1834}
              priority
              src={img.url}
              width={3600}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
