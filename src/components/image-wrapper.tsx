'use client';

import { Maximize2Icon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image, { type ImageProps } from 'next/image';
import { Dialog } from 'radix-ui';
import { useState } from 'react';
import { cn } from '@/lib'

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
   * Custom spring transition config
   */
  transition?: {
    duration?: number;
    bounce?: number;
  };
  /**
   * Custom overlay background
   */
  overlayClassName?: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  wrapperClassName = '',
  containerClassName = '',
  buttonClassName = '',
  modalClassName = '',
  overlayClassName = 'bg-black/60 backdrop-blur-xs',
  disablePreview = false,
  transition = { duration: 0.34, bounce: 0.2 },
  className,
  alt,
  src,
  ...imageProps
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  // Use a stable ID for layoutId that's consistent across renders
  // const layoutId = `image-modal-${src}-${alt}`.replace(/[^a-zA-Z0-9-]/g, '-');

  const imageRef = (
    <Image
      alt={alt}
      className={cn(className)}
      src={src}
      {...imageProps}
    />
  )

  if (disablePreview) {
    return (
      <div className={wrapperClassName}>
       {/* <Image
          alt={alt}
          className={className}
          src={src}
          {...imageProps}
        />*/}
        {imageRef}
      </div>
    );
  }

  return (
    <>
      <div className={wrapperClassName}>
        <motion.div
          className={cn('group relative overflow-hidden', containerClassName)}
          /*layoutId={layoutId}*/
          transition={{
            type: 'spring',
            duration: transition.duration,
            bounce: transition.bounce,
          }}
        >
          {imageRef}
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
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <Dialog.Overlay asChild>
                  <motion.div
                    className={cn('fixed z-10 inset-0', overlayClassName)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div 
                    className="fixed inset-0 z-20 flex h-full w-full items-center justify-center p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <Dialog.Title className="sr-only">
                      Image Preview
                    </Dialog.Title>
                    <Dialog.Description className="sr-only">
                      Image Preview
                    </Dialog.Description>
                    <motion.div
                      className={cn('group relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg', modalClassName)}
                      /*layoutId={layoutId}*/
                      transition={{
                        type: 'spring',
                        duration: transition.duration,
                        bounce: transition.bounce,
                      }}
                    >
                      {/*<Image
                        alt={alt}
                        className="h-full w-full object-cover"
                        src={src}
                        {...imageProps}
                      />*/}
                      {imageRef}
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
              </motion.div>
            )}
          </AnimatePresence>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default ImageWrapper;
