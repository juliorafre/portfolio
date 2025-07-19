'use client'

import Image from 'next/image';
import { AnimationOrchestrator } from '@/components/animations/animation-orchestrator';
import CustomLink from '@/components/custom-link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils';

import { experiences } from '@/modules/about/data';

const images = [
  '/images/about/1.png',
  '/images/about/2.png',
  '/images/about/3.png',
];

const About = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <AnimationOrchestrator
      className="main-container"
      sessionKey="aboutPageAnimation"
    >
      <Carousel
        setApi={setApi}
        className="relative orchestration-element stagger-0 mb-10 overflow-hidden rounded-xl"
        opts={{
          loop: true,
        }}
      >
        <div className="absolute top-0 left-0 inset-0 z-90  pointer-events-none flex items-end justify-center">
          <div className="flex gap-x-2 py-2">
            {Array.from({length: count}, (_, i) => i + 1).map(pic => {
              return (
                <span key={pic} className={cn("size-2 md:size-3 rounded-full", current === pic ? 'bg-white/80': 'bg-white/40')} />
              )
            })}
          </div>
        </div>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              className="h-[200px] basis-full pr-0 pl-0 md:h-[250px]"
              key={index}
            >
              <div className="relative h-full w-full">
                <Image
                  alt={`Experience picture ${index + 1}`}
                  className="absolute inset-0 size-full object-cover"
                  height={700}
                  src={image}
                  width={800}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Content sections */}
      <div className="orchestration-element stagger-1 mb-10 space-y-4 text-pretty leading-relaxed">
        <p>
          Born on the 16th of May, in Venezuela, I was part of the first
          generation getting adults in the age of computers, mobile phones, and
          advanced technology.
        </p>
        <p>
          I craft impactful, user-centric products, focusing on seamless
          interactions and interface design. Passionate about collaboration, I
          thrive in multidisciplinary teams, always learning and innovating.
          Specializing in React, TypeScript, and modern web architectures, I
          build high-performance, scalable applications with real-time data and
          interactive UIs. Currently exploring motion design, GSAP, and Motion
          (prev framer-motion) to push digital experiences further.
        </p>
      </div>

      {/* <section className="orchestration-element stagger-2 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Tech Stack</h2>
        </div>
      </section>*/}

      <section className="orchestration-element stagger-3 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Work experience</h2>
          <CustomLink href="https://www.linkedin.com/in/juliorafre/" showIcon>
            Find more on Linkedin
          </CustomLink>
        </div>

        <ul className="space-y-4">
          <p className="bg-white p-4 md:-mx-4 md:w-[calc(100%_+_2rem)] rounded-lg dark:bg-neutral-800">
            <strong>Currently</strong> contributing building a <strong>Turney asset management platform</strong> used by
            financial institutions, building responsive UIs for investment analysis, portfolio reporting, and client suitability tools.
          </p>
          {experiences.map((experience) => {
            const hasLink = Object.hasOwn(experience, 'link');
            return (
              <li
                className="md:-mx-4 md:w-[calc(100%_+_2rem)] space-y-2 rounded-lg bg-white px-4 pt-3 pb-4 dark:bg-neutral-800"
                key={experience.company}
              >
                <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-3">
                  <p className="font-semibold">
                    {experience.role}{' '}
                    <span className="text-muted-foreground font-normal">at</span>{' '}
                    {experience.company}
                  </p>
                  <p className="whitespace-nowrap font-mono text-muted-foreground">
                    {experience.yearRange}
                  </p>
                </div>
                <p>{experience.description}</p>
                {hasLink && (
                  <div className="mt-4">
                    <CustomLink
                      href={experience.link!}
                      showIcon
                    >
                      Read about it
                    </CustomLink>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </AnimationOrchestrator>
  );
};

export default About;
