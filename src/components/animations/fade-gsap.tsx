"use client";

import gsap from "gsap";
import type React from "react";
import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeContainerGsapProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

interface FadeItemGsapProps {
  children: React.ReactNode;
  className?: string;
}

const containerInitialHidden = { opacity: 0, filter: "blur(4px)" };
const containerTargetShow = { opacity: 1, filter: "blur(0px)" };

const itemInitialHidden = { opacity: 0, y: 10, filter: "blur(4px)" };
const itemTargetShow = { opacity: 1, y: 0, filter: "blur(0px)" };
const itemTransitionConfig = { duration: 0.6, ease: "easeInOut" };

const DEFAULT_STAGGER_DELAY = 0.129;

/**
 * @file fade-gsap.tsx
 * @description GSAP-powered fade-in animation components.
 * `FadeContainerGsap` animates itself and its direct children.
 * `FadeItemGsap` is a wrapper for children items to be animated by `FadeContainerGsap`.
 */

/**
 * A container component that fades itself in and then staggers the fade-in animation
 * of its direct children (expected to be `FadeItemGsap` or similar simple wrappers).
 *
 * @param {FadeContainerGsapProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The child elements to animate.
 * @param {string} [props.className] - Optional CSS class name for the container.
 * @param {number} [props.staggerDelay=0.129] - The delay between each child's animation start.
 * @returns {JSX.Element} The rendered container with animations.
 */
const FadeContainerGsap: React.FC<FadeContainerGsapProps> = ({
  children,
  className,
  staggerDelay = DEFAULT_STAGGER_DELAY,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // GSAP context for animation cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate the container itself
      tl.fromTo(
        containerRef.current,
        { ...containerInitialHidden },
        {
          ...containerTargetShow,
          duration: 0.5, // Animation duration for the container itself
          ease: "power2.out",
        },
      );

      // Animate direct children of the container
      if (containerRef.current) {
        const childElements = gsap.utils.toArray<Element>(
          containerRef.current.children,
        );

        if (childElements.length > 0) {
          tl.fromTo(
            childElements,
            { ...itemInitialHidden },
            {
              ...itemTargetShow,
              duration: itemTransitionConfig.duration,
              ease: itemTransitionConfig.ease,
              stagger: staggerDelay,
            },
            "<0.2", // Start child animations 0.2s after the container animation begins
          );
        }
      }
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP animations on component unmount
  }, [staggerDelay]); // Rerun effect if staggerDelay changes

  // The container starts with initial styles (opacity 0), GSAP handles the full animation.
  return (
    <div
      className={cn(className)}
      ref={containerRef}
      style={{ opacity: 0 }} // Start with opacity 0; filter blur will be applied by GSAP
    >
      {children}
    </div>
  );
};

/**
 * An item component designed to be a child of `FadeContainerGsap`.
 * It serves as a simple wrapper for content that will be animated by the parent container.
 *
 * @param {FadeItemGsapProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The content of the item.
 * @param {string} [props.className] - Optional CSS class name for the item.
 * @returns {JSX.Element} The rendered item.
 */
const FadeItemGsap: React.FC<FadeItemGsapProps> = ({ children, className }) => {
  // This component is a "dumb" wrapper.
  // Its initial state (opacity 0, y-offset, blur) is set by FadeContainerGsap's `fromTo`.
  // We set opacity to 0 here to prevent a flash of unstyled content before GSAP takes over.
  return (
    <div
      className={cn(className)}
      style={{ opacity: 0 }} // Item starts transparent; GSAP handles animation from hidden state
    >
      {children}
    </div>
  );
};

export { FadeContainerGsap, FadeItemGsap };
