'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import ProfileImage from '@/components/profile-image';
import { motion } from 'motion/react';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import { RRSSLink } from '@/components/rrss-link';
import 'lenis/dist/lenis.css';
import ExternalLink from '@/components/external-link';
import NavLink from '@/components/nav-link';
import Carousel from '@/components/carousel';

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
          <h3 className="text-muted-foreground text-base lg:text-sm">About me</h3>
          <p className="text-base text-balance lg:text-sm">
            I craft impactful, user-centric products, focusing on seamless interactions and
            interface design. Passionate about collaboration, I thrive in multidisciplinary teams,
            always learning and innovating. Specializing in React, TypeScript, and modern web
            architectures, I build high-performance, scalable applications with real-time data and
            interactive UIs. Currently exploring motion design, GSAP, and Three.js to push digital
            experiences further.
          </p>
          <div className="text-muted-foreground mt-4 flex items-center gap-x-2 text-sm font-light uppercase">
            <RRSSLink platform="email" href="mailto:juliorafre@gmail.com" />
            <span className="text-xs text-gray-300">✦</span>
            <RRSSLink platform="github" href="https://github.com/juliorafre" />
            <span className="text-xs text-gray-300">✦</span>
            <RRSSLink platform="x" href="https://x.com/juliorafre" />
            <span className="text-xs text-gray-300">✦</span>
            <RRSSLink platform="linkedin" href="https://www.linkedin.com/in/juliorafre/" />
          </div>
        </motion.section>

        {/* About */}
        <motion.section id="currently" variants={item}>
          <h3 className="text-muted-foreground text-base lg:text-sm">Currently</h3>
          <p className="text-base text-balance lg:text-sm">
            Listening to <ExternalLink href="https://frontend.fm/">Frontend.FM</ExternalLink> by
            Maxi Ferreira <br /> Reading
            <ExternalLink href="https://largeapps.dev/">
              Building Large Scale Web Apps
            </ExternalLink>{' '}
            by Addy Osmani & Hassan Djirdeh.
          </p>
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
            <div className="order-2 mb-1 flex flex-col">
              <p className="text-muted-foreground text-base lg:text-sm">2025</p>
              <p className="text-base lg:text-sm">Playground: Map interaction exploration.</p>
            </div>
            <p className="text-muted-foreground order-3 mb-1 text-base text-balance lg:text-sm">
              Inspired by the work of @nitishkmrk and built with motion-react and mapbox.
            </p>
            <div className="order-4 flex flex-row gap-x-2 text-base lg:text-sm">
              <NavLink href="/map-interaction" showIcon>
                Demo
              </NavLink>
            </div>
          </div>
          {/* <div className="mb-10 flex w-full flex-col pt-2 text-balance">
            <div className="order-1 mb-2 overflow-hidden rounded-lg border bg-gray-100 p-6">
              <Image
                src="/images/discovery-2.png"
                width={3600}
                height={1834}
                alt="Project 1"
                className="w-full"
              />
            </div>
            <div className="order-2 mb-1 flex flex-col">
              <p className="text-muted-foreground text-base lg:text-sm">2022-2024</p>
              <p className="text-base lg:text-sm">
                madi™ an AI-powered web platform for protein engineering.
              </p>
            </div>
            <p className="text-muted-foreground order-3 mb-1 text-base text-balance lg:text-sm">
              Developed interactive UI components and data visualizations to streamline analysis and
              optimization. Collaborated with AI researchers and biochemists to enhance workflows,
              improving efficiency and scalability. Led frontend development, ensuring performance
              and maintainability.
            </p>
            <div className="order-4 flex flex-row gap-x-2 text-base lg:text-sm">
              <ExternalLink href="https://www.madi.bio/">Website</ExternalLink>
            </div>
          </div> */}
          <div className="mb-10 flex w-full flex-col pt-2 text-balance">
            <div className="order-1 mb-2 rounded-lg border bg-gray-100 p-6">
              <Carousel />
            </div>
            <div className="order-2 mb-1 flex flex-col">
              <p className="text-muted-foreground text-base lg:text-sm">2022-2024</p>
              <p className="text-base lg:text-sm">
                madi™ an AI-powered web platform for protein engineering.
              </p>
            </div>
            <p className="text-muted-foreground order-3 mb-1 text-base text-balance lg:text-sm">
              Developed interactive UI components and data visualizations to streamline analysis and
              optimization. Collaborated with AI researchers and biochemists to enhance workflows,
              improving efficiency and scalability. Led frontend development, ensuring performance
              and maintainability.
            </p>
            <div className="order-4 flex flex-row gap-x-2 text-base lg:text-sm">
              <ExternalLink href="https://www.madi.bio/">Website</ExternalLink>
            </div>
          </div>
        </motion.section>

       {/*  <Carousel /> */}

        {/* Playgrounds */}
        <section>
          <h2 className="mb-2 text-lg">Playgrounds</h2>
          <div className="flex flex-col">
            <Link href="/text-parallax">Text Parallax</Link>
            <Link href="/text-gradient-on-scroll">Text Gradient On Scroll</Link>
            <Link href="/map-interaction">Map Interaction</Link>
            <Link href="/draggable-curved">Draggable Curved</Link>
            <Link href="/button-categorization">Button Categorization</Link>
            <Link href="/streaming-text">Streaming Text</Link>
          </div>
        </section>
      </motion.div>
    </ReactLenis>
  );
}
