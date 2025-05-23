'use client';

import { XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { memoriesData } from '@/modules/infinite-canvas/data';

interface MemoryCardProps {
  selectedMemory: { id: number; layoutIdPrefix: number } | null;
  resetSelectedMemory: () => void;
}

const MemoryCard = ({ selectedMemory, resetSelectedMemory }: MemoryCardProps) => {
  const layoutId = selectedMemory
    ? `${selectedMemory.layoutIdPrefix}-memory-item-${selectedMemory.id}`
    : 'memory-item';
  const memory = selectedMemory
    ? memoriesData.find(memory => memory.id === selectedMemory.id)
    : null;

  return (
    <AnimatePresence initial={false} mode="popLayout">
      {selectedMemory && (
        <motion.div
          id="memory-item"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
              duration: 0.7,
            },
          }}
          exit={{
            opacity: 0,
            filter: 'blur(10px)',
          }}
          className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-200/50 backdrop-blur-sm"
        >
          <div className="relative flex h-full w-full flex-row items-center justify-center perspective-distant">
            <button
              className="absolute top-0 right-0 m-2 cursor-pointer rounded-full bg-gray-100 p-1 md:m-2 md:p-2"
              onClick={resetSelectedMemory}
            >
              <XIcon className="size-4 text-gray-500" size={20} />
              <p className="sr-only">Close</p>
            </button>

            <motion.img
              layoutId={layoutId}
              className="absolute bottom-0 left-0 z-50 mb-4 ml-4 block w-[20%] object-contain drop-shadow-xl select-none"
              src={`/images/postcards/${selectedMemory.id}/${selectedMemory.id}.png`}
              alt="Infinite canvas"
              width={300}
              height={300}
            />

            <motion.div
              id="memory-item-card"
              initial={{
                transform: 'rotateZ(0deg) rotateX(50deg) translateY(-200%)',
                scale: 0.5,
              }}
              animate={{
                transform: 'rotateZ(3deg) rotateX(0deg) translateY(0%)',
                scale: 1,
              }}
              exit={{
                transform: 'rotateZ(0deg) rotateX(-50deg) translateY(200%)',
                scale: 0.5,
              }}
              transition={{
                duration: 0.65,
                type: 'spring',
                bounce: 0.2,
              }}
              className="relative z-20 grid aspect-video h-[80%] w-[80%] grid-cols-[50%_1fr] overflow-hidden rounded-xs bg-white p-3 shadow-lg"
              style={{
                transformOrigin: 'center',
              }}
            >
              {/* Background Noise Image */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="background-grid absolute inset-0 overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(250, 241, 225, 1)',
                    backgroundPosition: '50%',
                    mixBlendMode: 'overlay',
                    opacity: 0.4,
                  }}
                ></div>
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    backgroundImage: "url('images/fx/noise.avif')",
                    backgroundPosition: '50%',
                    mixBlendMode: 'overlay',
                    opacity: 0.1,
                  }}
                ></div>
              </div>
              {/* Stamp */}
              <Image
                src={`/images/postcards/${selectedMemory.id}/stamp.png`}
                alt="stamp"
                width={500}
                height={500}
                className="absolute top-0 right-0 z-50 m-4 block w-[14%] rotate-z-[4deg] object-contain drop-shadow-xl select-none"
              />

              {/* Lines */}
              <Image
                src={`/images/postcards/common/lines.png`}
                alt="lines"
                width={500}
                height={500}
                className="absolute top-0 right-0 z-50 m-2 block w-[12%] translate-x-[-65%] translate-y-[20%] object-contain drop-shadow-xl select-none"
              />

              {/* Image */}
              <div className="size-full overflow-hidden rounded select-none">
                <Image
                  src={`/images/postcards/${selectedMemory.id}/image.jpeg`}
                  alt={`${memory?.subject}`}
                  width={1000}
                  height={1000}
                  className="size-full object-cover object-center"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="z-90 grid grid-cols-[70%_1fr] grid-rows-[40%_1fr] overflow-hidden px-4 pb-4">
                <div className="font-kalam w-full font-bold text-stone-800">
                  <div className="flex flex-row justify-between text-[9px] md:text-base">
                    <p>Nr° {selectedMemory.id}</p>
                  </div>
                  <div className="flex flex-row justify-between border-t border-black text-[9px] md:text-base">
                    <p>{memory?.place}</p>
                    <p>{memory?.month}</p>
                  </div>
                  <div className="border-t border-black text-[9px] whitespace-nowrap last:border-b md:text-base">
                    <p>{memory?.subtitle}</p>
                  </div>
                </div>
                <div className="relative col-span-2 col-start-1 row-start-2">
                  <Image
                    src={`/images/postcards/common/lines-2.png`}
                    alt="lines-2"
                    width={600}
                    height={600}
                    className="absolute top-0 right-0 z-50 m-2 block w-full object-contain drop-shadow-xl select-none"
                  />
                  <p className="font-kalam max-w-[78ch] text-[10px] mt-1 leading-[1.2rem] md:leading-[2.8rem] overflow-ellipsis md:text-lg">
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
