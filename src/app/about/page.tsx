'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AnimationOrchestrator } from '@/components/animations/animation-orchestrator';
import { experiences } from '@/modules/about/data';
import CustomLink from '@/components/custom-link';

const images = ['/images/about/3.png', '/images/about/1.png', '/images/about/2.png'];

const About = () => {
  return (
    <AnimationOrchestrator className="main-container" sessionKey="aboutPageAnimation">
      <Carousel
        className="orchestration-element stagger-0 mb-10 overflow-hidden rounded-xl"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-[200px] basis-full pr-0 pl-0 md:h-[250px]">
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`Experience picture ${index + 1}`}
                  width={800}
                  height={700}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Content sections */}
      <div className="orchestration-element stagger-1 mb-10 space-y-4 leading-relaxed text-pretty">
        <p>
          Born on the 16th of May, in Venezuela, I was part of the first generation getting adults
          in the age of computers, mobile phones, and advanced technology.
        </p>
        <p>
          I craft impactful, user-centric products, focusing on seamless interactions and interface
          design. Passionate about collaboration, I thrive in multidisciplinary teams, always
          learning and innovating. Specializing in React, TypeScript, and modern web architectures,
          I build high-performance, scalable applications with real-time data and interactive UIs.
          Currently exploring motion design, GSAP, and Motion (prev framer-motion) to push digital
          experiences further.
        </p>

        <h2 className="mt-8 font-bold">Currently</h2>

        <p>
          Currently contributing to a <strong>fintech platform</strong> used by financial
          institutions, building responsive UIs for investment analysis, portfolio reporting, and
          client suitability tools.
        </p>
      </div>

      <section className="orchestration-element stagger-2 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Experience</h2>
          <CustomLink href="https://www.linkedin.com/in/juliorafre/" showIcon>
            Find more on Linkedin
          </CustomLink>
        </div>

        <ul className="space-y-4">
          {experiences.map(experience => {
            const hasLink = Object.hasOwn(experience, 'link');
            return (
              <li
                key={experience.company}
                className="-mx-4 w-[calc(100%_+_2rem)] space-y-2 rounded-lg bg-neutral-100 px-4 pt-3 pb-4 dark:bg-neutral-800"
              >
                <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-3">
                  <p className="font-semibold">
                    {experience.role} <span className="text-muted-foreground">at</span>{' '}
                    {experience.company}
                  </p>
                  <p className="text-muted-foreground font-mono whitespace-nowrap">{experience.yearRange}</p>
                </div>
                <p>{experience.description}</p>
                {hasLink && (
                  <div className="mt-4">
                    <CustomLink style="protera" href={experience.link!} showIcon>
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
