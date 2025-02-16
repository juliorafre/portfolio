'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, useTransform, useMotionValue } from 'motion/react';
import { motion } from 'motion/react';
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

  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ['start 55%', 'end 80%'],
  });

  useEffect(() => {
    // Setup Lenis RAF
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);
      requestAnimationFrame(update);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const words = text.split(' ');
  const textSplitted = words.map((word, index) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerPoint = (index + 1) / words.length;

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      if (latest >= triggerPoint && !isVisible) {
        setIsVisible(true);
      } else if (latest < triggerPoint && isVisible) {
        setIsVisible(false);
      }
    });

    return (
      <motion.span
        data-trigger={triggerPoint}
        initial={{ opacity: 0.33 }}
        animate={{ opacity: isVisible ? 1 : 0.33 }}
        style={{
          lineHeight: '40px',
          display: 'inline-block',
          marginRight: '0.25em',
        }}
        transition={{ duration: 1.2, ease: [0.24, 0.86, 0.29, 0.9] }}
        key={word + '_' + index}
      >
        {word}
      </motion.span>
    );
  });

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <div className="bg-white">
        <Spacer title="Darkrrom-Engineering" url="https://darkroom.engineering/about" vHSize={35} />
        <div ref={containerRef} className="grid grid-cols-12 py-[20vh] bg-black">
          <div ref={bodyRef} className="col-start-2 md:col-start-4 col-end-[-1]">
            <p className="font-extrabold text-[67px] md:text-6xl w-[30vw] md:w-[22vw] font-sans text-balance text-[#E30614]">OUR PHILOSOPHY</p>
            <div className="font-black text-[44px] md:text-4xl w-[80vw] md:w-[72vw] font-[Helvetica] text-balance text-[#b4b4b4] uppercase transition-opacity leading-snug">{textSplitted}</div>
          </div>
        </div>
        <Spacer title="Darkrrom-Engineering" url="https://darkroom.engineering/about" vHSize={70} />
      </div>
    </ReactLenis>
  );
};

export default TextGradientOnScrollWithMotion;
