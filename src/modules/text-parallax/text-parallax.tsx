'use client';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import { useScroll } from 'motion/react';
import { useEffect, useRef } from 'react';
import 'lenis/dist/lenis.css';
import Slide from './slide';

function TextParallax() {
  const lenisRef = useRef<LenisRef>(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);
      requestAnimationFrame(update);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
      <div className="overflow-hidden font-[Regular]">
        <div className="flex h-[70vh] w-screen items-center justify-center">
          <p className="font-bold font-sans text-black text-xl">Scroll down</p>
        </div>
        <div ref={container}>
          <Slide
            direction="left"
            left="-10%"
            progress={scrollYProgress}
            src="/images/1.jpg"
          />
          <Slide
            direction="right"
            left="-5%"
            progress={scrollYProgress}
            src="/images/2.jpg"
          />
          <Slide
            direction="left"
            left="-8%"
            progress={scrollYProgress}
            src="/images/3.jpg"
          />
        </div>
        <div className="flex h-[70vh] w-screen items-center justify-center">
          <p className="font-bold font-sans text-black text-xl">Scroll down</p>
        </div>
      </div>
    </ReactLenis>
  );
}

export default TextParallax;
