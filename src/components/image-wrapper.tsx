'use client';

import { Maximize2Icon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image, { type ImageProps } from 'next/image';
import { Dialog } from 'radix-ui';
import { useId, useState } from 'react';

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
  width,
  height,
  ...imageProps
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  // Generate unique layout ID based on src
  /*  const layoutId = `image-preview-${typeof src === 'string' ? src.replace(/[^a-zA-Z0-9]/g, '-') : 'image'}`; */
  const layoutId = useId();

  if (disablePreview) {
    return (
      <div className={wrapperClassName}>
        <Image
          alt={alt}
          className={className}
          height={height}
          src={src}
          width={width}
          {...imageProps}
        />
      </div>
    );
  }

  return (
    <>
      <div className={wrapperClassName}>
        <motion.div
          className={`group relative overflow-hidden ${containerClassName}`}
          layoutId={layoutId}
          transition={{
            type: 'spring',
            duration: transition.duration,
            bounce: transition.bounce,
          }}
        >
          <Image
            alt={alt}
            className={`h-full w-full object-cover ${className || ''}`}
            height={height}
            src={src}
            width={width}
            {...imageProps}
          />
          <motion.button
            className={`absolute top-4 right-4 cursor-pointer rounded-full bg-white/50 p-2 opacity-0 shadow-md backdrop-blur-2xl transition-opacity duration-[250ms] group-hover:opacity-100 ${buttonClassName}`}
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
          <AnimatePresence>
            {isOpen && (
              <>
                <Dialog.Overlay asChild>
                  <motion.div
                    animate={{ opacity: 1 }}
                    className={`fixed inset-0 ${overlayClassName}`}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div className="pointer-events-none fixed inset-0 z-10 flex h-full w-full items-center justify-center">
                    <Dialog.Title className="sr-only z-20">
                      Image Preview
                    </Dialog.Title>
                    <Dialog.Description className="sr-only z-20">
                      Image Preview
                    </Dialog.Description>
                    <motion.div
                      className={`group relative z-20 aspect-[1.5/1] w-[90vw] overflow-hidden rounded-lg md:w-[80vw] lg:w-[70vw] ${modalClassName}`}
                      layoutId={layoutId}
                      transition={{
                        type: 'spring',
                        duration: transition.duration,
                        bounce: transition.bounce,
                      }}
                    >
                      <Image
                        alt={alt}
                        className="z-30 h-full w-full object-cover"
                        height={height}
                        src={src}
                        width={width}
                        {...imageProps}
                      />
                      <Dialog.Close asChild>
                        <motion.button
                          className="absolute top-4 right-4 z-40 cursor-pointer rounded-full bg-white/50 p-2 shadow-md backdrop-blur-2xl"
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
              </>
            )}
          </AnimatePresence>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default ImageWrapper;
