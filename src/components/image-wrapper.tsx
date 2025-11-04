"use client";

import { Maximize2Icon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image, { type ImageProps } from "next/image";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { cn } from "@/lib";

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
  wrapperClassName = "",
  containerClassName = "",
  buttonClassName = "",
  modalClassName = "",
  overlayClassName = "",
  disablePreview = false,
  ...imageProps
}: ImageWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageId = `image-${imageProps.alt}`;
  const containerId = `container-${imageProps.alt}`;

  /*const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };*/

  if (disablePreview) {
    return (
      <div className={wrapperClassName}>
        <Image
          className={cn("h-full w-full object-cover", imageProps.className)}
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
        />
      </div>
    );
  }

  /*useEffect(() => {
    console.group('image: ' + imageProps);
    console.log('Image: ', imageProps);
    console.log('imageID: ', imageId);
    console.log('containerID: ', containerId);
    console.groupEnd();
    console.log('imageID: ', imageId);
  });*/

  return (
    <>
      <div className={wrapperClassName}>
        <motion.div
          layoutId={containerId}
          className={cn("group relative overflow-hidden", containerClassName)}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.45,
          }}
        >
          <MotionImage
            layoutId={imageId}
            className={cn(
              "h-full w-full object-cover rounded-lg",
              imageProps.className,
            )}
            src={imageProps.src}
            alt={imageProps.alt}
            width={imageProps.width}
            height={imageProps.height}
            transition={{
              type: "spring",
              bounce: 0.3,
              duration: 0.3,
            }}
          />
          <motion.button
            className={cn(
              "absolute top-3 right-3 cursor-pointer rounded-full bg-white/50 p-2 md:p-2.5 opacity-100 scale-100 md:scale-50 md:opacity-0 shadow-md backdrop-blur-2xl transition-all duration-250 group-hover:opacity-100 group-hover:scale-100",
              buttonClassName,
            )}
            onClick={() => setIsOpen(true)}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Maximize2Icon className="size-4 text-black" />
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence initial={false} mode="popLayout">
        {isOpen && (
          <Dialog.Root>
            <Dialog.Portal forceMount>
              {/* Overlay */}
              <Dialog.Overlay key="overlay-wrapper">
                <motion.div
                  key="overlay"
                  className={cn(
                    "fixed inset-0 bg-black/65 backdrop-blur-xs",
                    overlayClassName,
                  )}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              </Dialog.Overlay>
              {/* Content */}
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[min(90vh,90vw)] sm:h-[min(80vh,80vw)] flex items-center justify-center">
                <Dialog.Title className="sr-only">Image Preview</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Image Preview
                </Dialog.Description>

                <motion.div
                  layoutId={containerId}
                  key="image-wrapper"
                  className={cn(
                    "relative w-full h-full rounded-lg overflow-hidden",
                    modalClassName,
                  )}
                  transition={{
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.45,
                  }}
                >
                  <Dialog.Close asChild>
                    <motion.button
                      className={cn(
                        "absolute top-4 right-4 cursor-pointer border border-white/15 rounded-full bg-white/50 p-2 shadow-md backdrop-blur-2xl active:scale-95 hover:scale-101 transition-all duration-200",
                      )}
                      onClick={() => setIsOpen(false)}
                      type="button"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: 0.45,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0 },
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <XIcon className="size-6 text-black" />
                    </motion.button>
                  </Dialog.Close>
                  <MotionImage
                    layoutId={imageId}
                    className={cn(
                      "object-contain size-full",
                      imageProps.className,
                    )}
                    src={imageProps.src}
                    alt={imageProps.alt}
                    width={imageProps.width}
                    height={imageProps.height}
                    transition={{
                      type: "spring",
                      bounce: 0.3,
                      duration: 0.45,
                    }}
                  />
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageWrapper;
