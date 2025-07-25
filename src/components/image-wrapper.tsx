'use client';

import { Maximize2Icon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image, { type ImageProps } from 'next/image';
import { Dialog } from 'radix-ui';
import { useState } from 'react';
import { cn } from '@/lib';

const MotionImage = motion.create(Image, { forwardMotionProps: false });

interface ImageWrapperProps extends ImageProps {
  /**
   * Custom class name for the wrapper container
   */
  wrapperClassName?: string;
  /**
   * Custom class name for the image container
   */
  containerClassName?: string;
  /**
   * Custom class name for the preview button
   */
  buttonClassName?: string;
  /**
   * Custom class name for the modal image container
   */
  modalClassName?: string;
  /**
   * Disable the preview functionality
   */
  disablePreview?: boolean;
  /**
   * Custom overlay background
   */
  overlayClassName?: string;
}

const ImageWrapper = ({
                        wrapperClassName = '',
                        containerClassName = '',
                        buttonClassName = '',
                        modalClassName = '',
                        overlayClassName = '',
                        disablePreview = false,
                        ...imageProps
                      }: ImageWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  //const imageId = 'image-' + imageProps.alt;
  const containerId = 'container-' + imageProps.alt;

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  if (disablePreview) {
    return (
      <div className={wrapperClassName}>
        <Image
          className={cn('h-full w-full object-cover', imageProps.className)}
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
        />
      </div>
    );
  }

 /* useEffect(() => {
    console.group('image: ' + imageProps);
    console.log('Image: ', imageProps);
    console.log('imageID: ', imageId);
    console.log('containerID: ', containerId);
    console.groupEnd();
  });*/

  return (
    <>
      <div className={wrapperClassName}>
        <motion.div
          layoutId={containerId}
          className={cn('group relative overflow-hidden', containerClassName)}
        >
          <MotionImage
           /* layoutId={imageId}*/
            className={cn('h-full w-full object-cover', imageProps.className)}
            src={imageProps.src}
            alt={imageProps.alt}
            width={imageProps.width}
            height={imageProps.height}
            transition={{
              ease: 'easeOut',
              duration: 0.05,
            }}
          />
          <motion.button
            className={cn('absolute top-3 right-3 cursor-pointer rounded-full bg-white/50 p-2 md:p-2.5 opacity-100 scale-100 md:scale-50 md:opacity-0 shadow-md backdrop-blur-2xl transition-all duration-[250ms] group-hover:opacity-100 group-hover:scale-100', buttonClassName)}
            onClick={() => setIsOpen(true)}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Maximize2Icon className="size-4 text-black" />
          </motion.button>
        </motion.div>
      </div>

      <Dialog.Root onOpenChange={handleOpenChange} open={isOpen}>
        <Dialog.Portal forceMount>
          {/* Overlay */}
          <AnimatePresence>
            {isOpen ? (
              <Dialog.Overlay asChild>
                <motion.div
                  className={cn('fixed z-10 inset-0 bg-black/60 backdrop-blur-xs', overlayClassName)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              </Dialog.Overlay>) : null}
          </AnimatePresence>
          {/* Content */}
          {isOpen ? (
            <Dialog.Content asChild>
              <motion.div
                layout
                className="fixed inset-0 z-50 flex size-full items-center justify-center p-4"
              >
                <Dialog.Title className="sr-only">
                  Image Preview
                </Dialog.Title>
                <Dialog.Description className="sr-only">
                  Image Preview
                </Dialog.Description>
                <motion.div
                  layoutId={containerId}
                  className={cn('group relative max-w-[90vw] max-h-[85vh] size-fit overflow-hidden rounded-lg', modalClassName)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <MotionImage
                   /* layoutId={imageId}*/
                    className={cn('h-full w-full object-contain', imageProps.className)}
                    src={imageProps.src}
                    alt={imageProps.alt}
                    width={imageProps.width}
                    height={imageProps.height}
                    transition={{
                      ease: 'easeOut',
                      duration: 0.05,
                    }}
                  />
                  <Dialog.Close asChild>
                    <motion.button
                      className="absolute top-4 right-4 cursor-pointer rounded-full bg-white/50 p-2 shadow-md backdrop-blur-2xl"
                      onClick={() => setIsOpen(false)}
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <XIcon className="size-6 text-black" />
                    </motion.button>
                  </Dialog.Close>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          ) : null}
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default ImageWrapper;
