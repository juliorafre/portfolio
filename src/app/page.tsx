'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import ProfileImage from '@/components/profile-image';
import Image from 'next/image';
import { motion } from 'motion/react';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.129,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    // Setup Lenis RAF
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);
      requestAnimationFrame(update);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto max-w-3xl space-y-10 px-6 pt-10 text-balance"
      >
        {/* Hero */}
        <motion.div variants={item} className="mb-10 flex flex-row items-center gap-4">
          <ProfileImage size={70} />
          <div className="flex flex-col leading-tight">
            <p className="">Julio Ramirez</p>
            <p className="text-muted-foreground">Frontend Engineer based in Santiago, Chile</p>
          </div>
        </motion.div>

        {/* About */}
        <motion.section id="about" variants={item}>
          <h3 className="text-muted-foreground text-base">About me</h3>
          <p className="max-w-prose">
            I am a Creative Developer, focused on creating interactive projects, from large scale
            experiences to small, playful landing pages. With a background in digital design I try
            to add a unique motion language for every project.
          </p>
          <div className="text-muted-foreground mt-4 flex gap-x-2 text-sm font-light uppercase">
            <a
              href="mailto:juliorafre@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center hover:underline"
            >
              Email
            </a>
            /
            <a
              href="https://github.com/juliorafre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center hover:underline"
            >
              GitHub
            </a>
            /
            <a
              href="https://x.com/juliorafre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center hover:underline"
            >
              X
            </a>
            /
            <a
              href="https://www.linkedin.com/in/juliorafre/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section variants={item}>
          <div className="mb-10 flex w-full flex-col pt-2 text-balance">
            <div className="order-1 mb-2 overflow-hidden rounded-lg border bg-gray-100 p-6">
              {/* <Image
              src="/images/projects/map-interaction.gif"
              width={3600}
              height={1834}
              alt="map interaction"
              className="w-full"
            /> */}
              <video
                src="https://res.cloudinary.com/juliorafrecloud/video/upload/v1740954577/hpsdmhwpeau1xz7jyrmx.mp4"
                playsInline
                autoPlay
                muted
                loop
                className="aspect-video w-full"
              ></video>
            </div>
            <p className="order-2 mb-2">
              <span className="text-muted-foreground text-base">2024</span> - Playground: Map interaction
              exploration.
            </p>
            <p className="order-3 max-w-prose">
              Inspired by the work of @nitishkmrk and built with motion-react and mapbox.
            </p>
          </div>
          <div className="mb-10 flex w-full flex-col pt-2 text-balance">
            <div className="order-1 mb-2 overflow-hidden rounded-lg border bg-gray-100 p-6">
              <Image
                src="/images/discovery-2.png"
                width={3600}
                height={1834}
                alt="Project 1"
                className="w-full"
              />
            </div>
            <p className="order-2 mb-2">
              <span className="text-muted-foreground text-base">2022-2024</span> - madi™ an
              AI-powered web platform for protein engineering.
            </p>
            <p className="order-3 max-w-prose">
              Developed interactive UI components and data visualizations to streamline analysis and
              optimization. Collaborated with AI researchers and biochemists to enhance workflows,
              improving efficiency and scalability. Led frontend development, ensuring performance
              and maintainability.
            </p>
          </div>
        </motion.section>

        {/* Playgrounds */}
        <section>
          <h2 className="mb-2 text-lg">Playgrounds</h2>
          <div className="flex flex-col">
            <Link href="/text-parallax">Text Parallax</Link>
            <Link href="/text-gradient-on-scroll">Text Gradient On Scroll</Link>
            <Link href="/map-interaction">Map Interaction</Link>
            <Link href="/draggable-curved">Draggable Curved</Link>
          </div>
        </section>
      </motion.div>
    </ReactLenis>
  );
}
