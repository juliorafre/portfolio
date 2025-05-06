'use client';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useScroll, useMotionValueEvent, motion, useReducedMotion } from 'motion/react';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import Spacer from '@/modules/share/spacer';

const text = `We don't do bosses or bureaucracy. Yeah, we've read Laloux and dig the whole teal organization thing, but we're not here to preach about it - we just know that treating people like actual
humans who can manage their own work gets better results than playing corporate politics. Everyone here has the freedom to speak their mind, and bring their whole self to work (crazy ideas and
weird jokes included). We evolve as we go because that's what smart teams do.`;

const TextGradientOnScrollWithMotion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<LenisRef>(null);

  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ['start 55%', 'end 80%'],
  });

  // Use a single state for all word visibility instead of individual states
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());

  // Memoize the words array to prevent unnecessary re-splitting
  const words = useMemo(() => text.split(' '), []);

  // Optimize RAF with useCallback to prevent recreation on each render
  const updateScroll = useCallback((time: number) => {
    lenisRef.current?.lenis?.raf(time);
    requestAnimationFrame(updateScroll);
  }, []);

  useEffect(() => {
    const rafId = requestAnimationFrame(updateScroll);
    return () => cancelAnimationFrame(rafId);
  }, [updateScroll]);

  // Use a single event handler for all words
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    // Only process animations if user doesn't prefer reduced motion
    if (!prefersReducedMotion) {
      const newVisibleIndices = new Set<number>();

      words.forEach((_, index) => {
        const triggerPoint = (index + 1) / words.length;
        if (latest >= triggerPoint) {
          newVisibleIndices.add(index);
        }
      });

      // Only update state if the visible indices have changed
      if (
        ![...newVisibleIndices].every(i => visibleIndices.has(i)) ||
        [...visibleIndices].length !== newVisibleIndices.size
      ) {
        setVisibleIndices(newVisibleIndices);
      }
    }
  });

  // Prepare text elements with visibility based on the single state
  const textSplitted = useMemo(() => {
    return words.map((word, index) => {
      const isVisible = visibleIndices.has(index) || prefersReducedMotion;
      const triggerPoint = (index + 1) / words.length;

      return (
        <motion.span
          data-trigger={triggerPoint}
          initial={{ opacity: prefersReducedMotion ? 1 : 0.33 }}
          animate={{ opacity: isVisible ? 1 : 0.33 }}
          style={{
            display: 'inline-block',
            marginRight: '0.25em',
          }}
          className="leading-snug"
          transition={{
            duration: prefersReducedMotion ? 0 : 1.2,
            ease: [0.24, 0.86, 0.29, 0.9],
          }}
          key={word + '_' + index}
        >
          {word}
        </motion.span>
      );
    });
  }, [words, visibleIndices, prefersReducedMotion]);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <div className="bg-white">
        <Spacer title="Darkrrom-Engineering" url="https://darkroom.engineering/about" vHSize={35} />
        <div
          ref={containerRef}
          className="grid grid-cols-12 bg-black py-[20vh]"
          role="region"
          aria-label="Our philosophy text with scroll animation"
        >
          <div ref={bodyRef} className="col-start-2 col-end-[-1] md:col-start-4">
            <h2 className="w-[30vw] font-sans text-[32px] font-extrabold text-balance text-[#E30614] md:w-[22vw] md:text-6xl">
              OUR PHILOSOPHY
            </h2>
            <p className="w-[85vw] font-[Helvetica] text-[16px] leading-snug font-black text-[#b4b4b4] uppercase transition-opacity md:w-[72vw] md:text-4xl">
              {textSplitted}
            </p>
          </div>
        </div>
        <Spacer title="Darkrrom-Engineering" url="https://darkroom.engineering/about" vHSize={70} />
      </div>
    </ReactLenis>
  );
};

export default TextGradientOnScrollWithMotion;
