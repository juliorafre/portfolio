'use client';
import { PanInfo, motion, useAnimation, useMotionValue, useMotionValueEvent, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import React from 'react';

const menuItems = [
  'Eero Aarnio Ball Chair',
  'Verner Panton Chair',
  'Eero Saarinen Tulip Table',
  'Arne Jacobsen Egg Chair',
  'Joe Colombo Elda Chair',
  'Olivier Mourgue Djinn Chairs',
  'Pierre Paulin Orange Slice Chair',
  'George Nelson Coconut Chair',
  'Isamu Noguchi Coffee Table',
  'Warren Platner Coffee Table',
  'Marc Newson Lockheed Lounge',
  'Vitra Eames Lounge Chair',
  'Mario Bellini Camaleonda Sofa',
  'Eero Aarnio Pastil Chair',
  'Pierre Cardin Dining Table',
  'Marcel Breuer Wassily Chair',
  'Alvar Aalto Savoy Vase',
  'Le Corbusier LC4 Chaise Longue',
  'Eileen Gray Bibendum Chair',
  'Charles and Ray Eames Molded Plastic Chair',
  'Olivetti Synthesis Office Chair',
  'Giancarlo Piretti Plia Chair',
  'Rodolfo Bonetto Boomerang Desk',
  'Richard Sapper Tizio Lamp',
  'Vico Magistretti Maralunga Sofa',
  'Peter Ghyczy Garden Egg Chair',
  'Paulin Globe Chair',
  'Luigi Colani Rotor Table',
  'Ross Lovegrove Go Chair',
  'Ron Arad Well Tempered Chair',
];

const angleIncrement = 360 / menuItems.length;
const dragFactor = 0.01;

export default function DraggableCurvedMenu() {
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [middleItem, setMiddleItem] = useState(menuItems[0]);

  useMotionValueEvent(rotation, 'change', (value) => {
    const adjustedRotation = ((value % 360) + 360) % 360;
    const middleIndex = Math.round(adjustedRotation / angleIncrement) % menuItems.length;
    const actualMiddleItem = menuItems[(menuItems.length - middleIndex) % menuItems.length];
    setMiddleItem(actualMiddleItem);
  });

  // Fix: Use a type that the compiler won't complain about
  type DragEvent = MouseEvent | TouchEvent | PointerEvent;
  
  const onDrag = (_: DragEvent, info: PanInfo) => {
    const currentRotation = rotation.get() + info.offset.y * dragFactor;
    rotation.set(currentRotation);
  };

  const onDragEnd = (_: DragEvent, info: PanInfo) => {
    const endRotation = rotation.get() + info.velocity.y * dragFactor;
    controls.start({
      rotate: endRotation,
      transition: { type: 'spring', mass: 0.1 },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate(${value}deg)`;
  });

  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden" ref={containerRef}>
      <div className="pointer-events-none absolute left-0 top-0 z-50 h-32 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-900"></div>
      <motion.div
        className="relative -ml-[800px] flex h-[1000px] w-[1000px]  cursor-grab items-center justify-center active:cursor-grabbing"
        animate={controls}
        style={{
          transformOrigin: 'center center',
          transform,
          rotate: rotation,
        }}
        drag="y"
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      >
        {menuItems.map((item, index) => {
          const rotate = angleIncrement * index;

          return (
            <motion.div
              key={`${item}-${index}`}
              className={`absolute ${item === middleItem ? 'text-primary-light-12 dark:text-primary-dark-12' : 'text-primary-light-12/30 dark:text-primary-dark-12/30'} transition-colors duration-150`}
              style={{
                left: '50%',
                transform: `rotate(${rotate}deg) translateX(300px)`,
                transformOrigin: 'left center',
              }}
            >
              {item}
            </motion.div>
          );
        })}
      </motion.div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-50 h-32 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-neutral-900"></div>
    </div>
  );
}
