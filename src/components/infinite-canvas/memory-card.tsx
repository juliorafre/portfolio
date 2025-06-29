'use client';

import { XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { memoriesData } from '@/modules/infinite-canvas/data';

interface MemoryCardProps {
  selectedMemory: { id: number; layoutIdPrefix: number } | null;
  resetSelectedMemory: () => void;
}

const MemoryCard = ({
  selectedMemory,
  resetSelectedMemory,
}: MemoryCardProps) => {
  const layoutId = selectedMemory
    ? `${selectedMemory.layoutIdPrefix}-memory-item-${selectedMemory.id}`
    : 'memory-item';
  const memory = selectedMemory
    ? memoriesData.find((memory) => memory.id === selectedMemory.id)
    : null;

  return (
    <AnimatePresence initial={false} mode="popLayout">
      {selectedMemory && (
        <motion.div
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
              duration: 0.7,
            },
          }}
          className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-200/50 backdrop-blur-sm"
          exit={{
            opacity: 0,
            filter: 'blur(10px)',
          }}
          id="memory-item"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
        >
          <div className="perspective-distant relative flex h-full w-full flex-row items-center justify-center">
            <button
              className="absolute top-0 right-0 m-2 cursor-pointer rounded-full bg-gray-100 p-1 md:m-2 md:p-2"
              onClick={resetSelectedMemory}
            >
              <XIcon className="size-4 text-gray-500" size={20} />
              <p className="sr-only">Close</p>
            </button>

            <motion.img
              alt="Infinite canvas"
              className="absolute bottom-0 left-0 z-50 mb-4 ml-4 block w-[25%] select-none object-contain drop-shadow-xl"
              height={300}
              layoutId={layoutId}
              src={`/images/postcards/${selectedMemory.id}/${selectedMemory.id}.png`}
              transition={{
                type: 'spring',
                bounce: 0.2,
              }}
              width={300}
            />

            <motion.div
              animate={{
                transform: 'rotateZ(3deg) rotateX(0deg) translateY(0%)',
                scale: 1,
              }}
              className="relative z-20 grid aspect-video h-[80%] w-[80%] grid-cols-[50%_1fr] overflow-hidden rounded-xs bg-white p-3 shadow-lg"
              exit={{
                transform: 'rotateZ(0deg) rotateX(-50deg) translateY(200%)',
                scale: 0.5,
              }}
              id="memory-item-card"
              initial={{
                transform: 'rotateZ(0deg) rotateX(50deg) translateY(-200%)',
                scale: 0.5,
              }}
              style={{
                transformOrigin: 'center',
              }}
              transition={{
                duration: 0.65,
                type: 'spring',
                bounce: 0.2,
              }}
            >
              {/* Background Noise Image */}
              <div className="-z-10 absolute inset-0">
                <div
                  className="background-grid absolute inset-0 overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(250, 241, 225, 1)',
                    backgroundPosition: '50%',
                    mixBlendMode: 'overlay',
                    opacity: 0.4,
                  }}
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    backgroundImage: "url('images/fx/noise.avif')",
                    backgroundPosition: '50%',
                    mixBlendMode: 'overlay',
                    opacity: 0.1,
                  }}
                />
              </div>
              {/* Stamp */}
              <Image
                alt="stamp"
                className="absolute top-0 right-0 z-50 m-4 block w-[14%] rotate-z-[4deg] select-none object-contain drop-shadow-xl"
                height={500}
                src={`/images/postcards/${selectedMemory.id}/stamp.png`}
                width={500}
              />

              {/* Lines */}
              <Image
                alt="lines"
                className="absolute top-0 right-0 z-50 m-2 block w-[12%] translate-x-[-65%] translate-y-[20%] select-none object-contain drop-shadow-xl"
                height={500}
                src={'/images/postcards/common/lines.png'}
                width={500}
              />

              {/* Image */}
              <div className="size-full select-none overflow-hidden rounded">
                <Image
                  alt={`${memory?.subject}`}
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                  className="size-full object-cover object-center"
                  height={1000}
                  placeholder="blur"
                  src={`/images/postcards/${selectedMemory.id}/image.jpeg`}
                  width={1000}
                />
              </div>
              <div className="z-90 grid grid-cols-[70%_1fr] grid-rows-[40%_1fr] overflow-hidden px-4 pb-4">
                <div className="w-full font-bold font-kalam text-stone-800">
                  <div className="flex flex-row justify-between text-[9px] md:text-base">
                    <p>Nr° {selectedMemory.id}</p>
                  </div>
                  <div className="flex flex-row justify-between border-black border-t text-[9px] md:text-base">
                    <p>{memory?.place}</p>
                    <p>{memory?.month}</p>
                  </div>
                  <div className="whitespace-nowrap border-black border-t text-[9px] last:border-b md:text-base">
                    <p>{memory?.subtitle}</p>
                  </div>
                </div>
                <div className="relative col-span-2 col-start-1 row-start-2">
                  <Image
                    alt="lines-2"
                    className="absolute top-0 right-0 z-50 m-2 block w-full select-none object-contain drop-shadow-xl"
                    height={600}
                    src={'/images/postcards/common/lines-2.png'}
                    width={600}
                  />
                  <p className="mt-1 max-w-[78ch] overflow-ellipsis font-kalam text-[10px] leading-[1.2rem] md:text-lg md:leading-[2.8rem]">
                    {memory?.comment}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MemoryCard;
