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

const containerInitialHidden = { opacity: 0, filter: "blur(2px)" };
const containerTargetShow = { opacity: 1, filter: "blur(0px)" };

const itemInitialHidden = { opacity: 0, y: 8 };
const itemTargetShow = { opacity: 1, y: 0 };
const itemTransitionConfig = { duration: 0.28, ease: "power2.out" };

const DEFAULT_STAGGER_DELAY = 0.08;

const FadeContainerGsap: React.FC<FadeContainerGsapProps> = ({
  children,
  className,
  staggerDelay = DEFAULT_STAGGER_DELAY,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(containerRef.current, { opacity: 1, filter: "blur(0px)" });
      const childElements = gsap.utils.toArray<Element>(
        containerRef.current.children,
      );
      gsap.set(childElements, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(containerRef.current, containerInitialHidden, {
        ...containerTargetShow,
        duration: 0.2,
        ease: "power2.out",
      });

      const childElements = gsap.utils.toArray<Element>(
        containerRef.current?.children ?? [],
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
          "<0.1",
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [staggerDelay]);

  return (
    <div className={cn(className)} ref={containerRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

const FadeItemGsap: React.FC<FadeItemGsapProps> = ({ children, className }) => {
  return (
    <div className={cn(className)} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export { FadeContainerGsap, FadeItemGsap };
