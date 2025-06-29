'use client';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import 'lenis/dist/lenis.css';
import Spacer from '@/modules/share/spacer';

const text = `We don't do bosses or bureaucracy. Yeah, we've read Laloux and dig the whole teal organization thing, but we're not here to preach about it - we just know that treating people like actual
humans who can manage their own work gets better results than playing corporate politics. Everyone here has the freedom to speak their mind, and bring their whole self to work (crazy ideas and
weird jokes included). We evolve as we go because that's what smart teams do.`;

const TextGradientOnScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();

    // Setup Lenis RAF
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);
      requestAnimationFrame(update);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const textSplitted = text.split(' ').map((word, index) => (
    <span
      key={word + '_' + index}
      ref={(el) => {
        wordsRef.current[index] = el;
      }}
      style={{ opacity: 0.2, lineHeight: '40px' }}
    >
      {word}{' '}
    </span>
  ));

  const createAnimation = () => {
    gsap.to(wordsRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: 'top 40%',
        end: `+=${window.innerHeight / 1.2}`,
      },
      opacity: 1,
      ease: CustomEase.create('custom', '0.24, 0.86, 0.29, 0.9'),
      delay: 0.1,
      stagger: 0.02,
    });
  };

  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
      <div className="bg-white">
        <Spacer
          title="Darkrrom-Engineering"
          url="https://darkroom.engineering/about"
          vHSize={35}
        />
        <div
          className="grid grid-cols-12 bg-black py-[20vh]"
          ref={containerRef}
        >
          <div className="col-start-2 col-end-[-1] mb-[1vw] md:col-start-4">
            <p className="w-[30vw] font-extrabold font-sans text-[#E30614] text-[67px] md:w-[22vw] md:text-6xl">
              OUR PHILOSOPHY
            </p>
          </div>
          <div
            className="col-start-2 col-end-[-1] md:col-start-4"
            ref={bodyRef}
          >
            <p className="w-[80vw] font-[Helvetica] font-black text-[#b7b7b7] text-[44px] uppercase leading-snug transition-opacity md:w-[72vw] md:text-4xl">
              {textSplitted}
            </p>
          </div>
        </div>
        <Spacer
          title="Darkrrom-Engineering"
          url="https://darkroom.engineering/about"
          vHSize={70}
        />
      </div>
    </ReactLenis>
  );
};

export default TextGradientOnScroll;
