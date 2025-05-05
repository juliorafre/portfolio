'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { RRSSLink } from '@/components/rrss-link';
import ExternalLink from '@/components/external-link';
import NavLink from '@/components/nav-link';
import Carousel from '@/modules/carousel/components/carousel';
import ImageShowcase from '@/modules/carousel/components/image-showcase';
import Hero from '@/components/hero';

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
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container mx-auto max-w-3xl space-y-10 px-6 py-10"
    >
      {/* Hero */}
      <motion.div variants={item} className="mb-10">
        <Hero />
      </motion.div>

      {/* About */}
      <motion.section id="about" variants={item}>
        <h3 className="text-base">About me</h3>
        <p className="text-base text-balance text-[#666]">
          I craft impactful, user-centric products, focusing on seamless interactions and interface
          design. Passionate about collaboration, I thrive in multidisciplinary teams, always
          learning and innovating. Specializing in React, TypeScript, and modern web architectures,
          I build high-performance, scalable applications with real-time data and interactive UIs.
          Currently exploring motion design, GSAP, and Three.js to push digital experiences further.
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

      {/* Currently */}
      <motion.section id="currently" variants={item}>
        <h3 className="text-muted-foreground text-base">Currently</h3>
        <p className="text-base text-balance">
          Listening to <ExternalLink href="https://frontend.fm/">Frontend.FM</ExternalLink> by Maxi
          Ferreira <br /> Reading{' '}
          <ExternalLink href="https://largeapps.dev/">Building Large Scale Web Apps</ExternalLink>{' '}
          by Addy Osmani & Hassan Djirdeh.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section variants={item}>
        <p className="font-medium">Latest crafts</p>
        <div className="mb-10 flex w-full flex-col pt-2 text-balance">
          <div className="order-1 mb-2">
            <ImageShowcase />
          </div>
          <div className="order-2 mb-1 flex flex-col">
            <p className="text-muted-foreground text-base">April 2025</p>
            <p className="text-base">Showcase sticker clothes.</p>
          </div>
          <p className="text-muted-foreground order-3 mb-1 text-base text-balance">
            Small experiment replicating the sticker clothes reveal animation by{' '}
            <ExternalLink href="https://x.com/bartek_marzec/status/1835432359815958530">
              @bartek_marzec
            </ExternalLink>
            .
          </p>
          {/*  <div className="order-4 flex flex-row gap-x-2 text-base">
              <NavLink href="/map-interaction" showIcon>
                Code
              </NavLink>
            </div> */}
        </div>
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
            <p className="text-muted-foreground text-base">March 2025</p>
            <p className="text-base">Map interaction exploration.</p>
          </div>
          <p className="text-muted-foreground order-3 mb-1 text-base text-balance">
            Inspired by the work of @nitishkmrk and built with motion-react and mapbox.
          </p>
          <div className="order-4 flex flex-row gap-x-2 text-base">
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
              <p className="text-muted-foreground text-base">2022-2024</p>
              <p className="text-base">
                madi™ an AI-powered web platform for protein engineering.
              </p>
            </div>
            <p className="text-muted-foreground order-3 mb-1 text-base text-balance">
              Developed interactive UI components and data visualizations to streamline analysis and
              optimization. Collaborated with AI researchers and biochemists to enhance workflows,
              improving efficiency and scalability. Led frontend development, ensuring performance
              and maintainability.
            </p>
            <div className="order-4 flex flex-row gap-x-2 text-base">
              <ExternalLink href="https://www.madi.bio/">Website</ExternalLink>
            </div>
          </div> */}
        <div className="mb-10 flex w-full flex-col pt-2 text-balance">
          <div className="order-1 mb-2 rounded-lg border bg-gray-100 p-6">
            <Carousel />
          </div>
          <div className="order-2 mb-1 flex flex-col">
            <p className="text-muted-foreground text-base">2022-2024</p>
            <p className="text-base">madi™ an AI-powered web platform for protein engineering.</p>
          </div>
          <p className="text-muted-foreground order-3 mb-1 text-base text-balance">
            Developed interactive UI components and data visualizations to streamline analysis and
            optimization. Collaborated with AI researchers and biochemists to enhance workflows,
            improving efficiency and scalability. Led frontend development, ensuring performance and
            maintainability.
          </p>
          <div className="order-4 flex flex-row gap-x-2 text-base">
            <ExternalLink href="https://www.madi.bio/">Read about it</ExternalLink>
            <ExternalLink href="https://www.madi.bio/">Website</ExternalLink>
          </div>
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
          <Link href="/button-categorization">Button Categorization</Link>
          <Link href="/streaming-text">Streaming Text</Link>
        </div>
      </section>
    </motion.div>
  );
}
