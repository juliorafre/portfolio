'use client';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import { useScroll } from 'motion/react';
import 'lenis/dist/lenis.css';
import Slide from './slide';

function  TextParallax() {
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
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <div className="overflow-hidden font-[Regular]">
        <div className="h-[70vh] w-screen flex items-center justify-center">
          <p className='text-xl font-bold font-sans text-black'>Scroll down</p>
        </div>
        <div ref={container}>
          <Slide left="-10%" src="/images/1.jpg" direction="left" progress={scrollYProgress} />
          <Slide left="-5%" src="/images/2.jpg" direction="right" progress={scrollYProgress} />
          <Slide left="-8%" src="/images/3.jpg" direction="left" progress={scrollYProgress} />
        </div>
        <div className="h-[70vh] w-screen flex items-center justify-center">
          <p className='text-xl font-bold font-sans text-black'>Scroll down</p>
        </div>
      </div>
    </ReactLenis>
  );
}

export default TextParallax;
