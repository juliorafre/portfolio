'use client';

import { XIcon } from 'lucide-react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import Image from 'next/image';
import { Dialog } from 'radix-ui';
import { useState } from 'react';

interface ImagePreviewProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const MotionImage = motion.create(Image);

const ImagePreview = ({ src, alt, width, height }: ImagePreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col rounded-xl">
      <MotionConfig
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 1,
          duration: 0.6,
        }}
      >
        <Dialog.Root onOpenChange={setIsOpen} open={isOpen}>
          <Dialog.Trigger asChild>
            <motion.div
              className="relative z-10 aspect-video w-full cursor-pointer rounded-lg"
              layoutId="image-preview-dialog"
            >
              <MotionImage
                alt={alt}
                className="rounded-lg object-cover"
                height={height}
                layoutId="image-preview"
                priority
                sizes="100%"
                src={src}
                width={width}
              />
            </motion.div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <AnimatePresence initial={false} mode="sync">
              {isOpen && (
                <>
                  <Dialog.Overlay>
                    <motion.div
                      animate={{ opacity: 1 }}
                      className="fixed inset-0 z-40 h-full w-full backdrop-blur-xs"
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                    />
                  </Dialog.Overlay>
                  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <Dialog.Content className="w-[720px]">
                      <Dialog.Title className="sr-only">
                        Image Preview
                      </Dialog.Title>
                      <Dialog.Description className="sr-only">
                        Interaction built using shared layout animations and
                        Radix dialog primitive.
                      </Dialog.Description>

                      <motion.div
                        className="relative aspect-video w-full overflow-hidden rounded-2xl"
                        layoutId="image-preview-dialog"
                      >
                        <MotionImage
                          alt={alt}
                          className="select-none rounded-2xl object-cover"
                          height={height}
                          layoutId="image-preview"
                          sizes="100%"
                          src={src}
                          width={width}
                        />
                        <Dialog.Close asChild>
                          <button
                            aria-label="Close dialog"
                            className="absolute top-3 right-3 z-10 h-fit w-fit rounded-full border border-white/20 bg-white/20 p-[6px] backdrop-blur hover:bg-white/50 focus-visible:outline-none"
                            type="button"
                          >
                            <XIcon color="white" size={20} />
                          </button>
                        </Dialog.Close>
                      </motion.div>
                    </Dialog.Content>
                  </div>
                </>
              )}
            </AnimatePresence>
          </Dialog.Portal>
        </Dialog.Root>
      </MotionConfig>
    </div>
  );
};

export default ImagePreview;

{
  /* <div>
      <MotionImage
        whileHover={{
          scale: 1.1,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 10,
          },
        }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={className}
        style={style}
      />
    </div> */
}
