"use client";

import { Maximize2Icon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image, { type ImageProps } from "next/image";
import { Dialog } from "radix-ui";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib";

const MotionImage = motion.create(Image, { forwardMotionProps: false });

const sharedTransition = {
  type: "spring",
  bounce: 0.15,
  duration: 0.4,
} as const;

type ImageWrapperProps = Readonly<
  ImageProps & {
    wrapperClassName?: string;
    containerClassName?: string;
    buttonClassName?: string;
    modalClassName?: string;
    disablePreview?: boolean;
    overlayClassName?: string;
  }
>;

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

  const imageAspectRatio = useMemo(() => {
    const widthVal = Number(imageProps.width);
    const heightVal = Number(imageProps.height);
    return !Number.isNaN(widthVal) &&
      !Number.isNaN(heightVal) &&
      widthVal > 0 &&
      heightVal > 0
      ? widthVal / heightVal
      : 1;
  }, [imageProps.width, imageProps.height]);

  const modalContainerStyle = useMemo(() => {
    return {
      aspectRatio: imageAspectRatio,
      width: "90vw",
      height: "auto",
      maxWidth: `min(90vw, calc(85vh * ${imageAspectRatio}))`,
      maxHeight: `min(85vh, calc(90vw / ${imageAspectRatio}))`,
    } as const;
  }, [imageAspectRatio]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const imageSizes = imageProps.sizes || "(max-width: 768px) 100vw, 800px";

  const nextImageProps = useMemo(() => {
    return {
      src: imageProps.src,
      alt: imageProps.alt,
      width: imageProps.width,
      height: imageProps.height,
      priority: imageProps.priority,
      placeholder: imageProps.placeholder,
      blurDataURL: imageProps.blurDataURL,
      fill: imageProps.fill,
      quality: imageProps.quality,
      loading: imageProps.loading,
      unoptimized: imageProps.unoptimized,
    };
  }, [
    imageProps.src,
    imageProps.alt,
    imageProps.width,
    imageProps.height,
    imageProps.priority,
    imageProps.placeholder,
    imageProps.blurDataURL,
    imageProps.fill,
    imageProps.quality,
    imageProps.loading,
    imageProps.unoptimized,
  ]);

  if (disablePreview) {
    return (
      <div className={wrapperClassName}>
        <Image
          {...nextImageProps}
          className={cn("h-full w-full object-cover", imageProps.className)}
          sizes={imageSizes}
        />
      </div>
    );
  }

  return (
    <>
      <div className={wrapperClassName}>
        <motion.div
          layoutId={containerId}
          className={cn("group relative overflow-hidden", containerClassName)}
          transition={sharedTransition}
        >
          <MotionImage
            layoutId={imageId}
            {...nextImageProps}
            className={cn(
              "h-full w-full object-cover rounded-lg",
              imageProps.className,
            )}
            sizes={imageSizes}
            transition={sharedTransition}
          />
          <motion.button
            className={cn(
              "absolute top-3 right-3 cursor-pointer rounded-full bg-white/50 p-2 md:p-2.5 opacity-100 scale-100 md:scale-50 md:opacity-0 shadow-md backdrop-blur-2xl transition-all duration-250 group-hover:opacity-100 group-hover:scale-100",
              buttonClassName,
            )}
            onClick={handleOpen}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Maximize2Icon className="size-4 text-black" />
          </motion.button>
        </motion.div>
      </div>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <AnimatePresence>
          {isOpen && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  key="overlay"
                  className={cn(
                    "fixed inset-0 bg-black/65 backdrop-blur-xs z-50",
                    overlayClassName,
                  )}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </Dialog.Overlay>
              <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none outline-none">
                <Dialog.Title className="sr-only">Image Preview</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Image Preview
                </Dialog.Description>

                <motion.div
                  layoutId={containerId}
                  key="modal-container"
                  className={cn(
                    "relative pointer-events-auto bg-neutral-900 rounded-lg overflow-hidden shadow-2xl",
                    modalClassName,
                  )}
                  style={modalContainerStyle}
                  transition={sharedTransition}
                >
                  <Dialog.Close asChild>
                    <motion.button
                      className="absolute top-4 right-4 cursor-pointer border border-white/15 rounded-full bg-white/50 p-2 shadow-md backdrop-blur-2xl z-10"
                      onClick={handleClose}
                      type="button"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.3 } }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <XIcon className="size-6 text-black" />
                    </motion.button>
                  </Dialog.Close>
                  <MotionImage
                    layoutId={imageId}
                    {...nextImageProps}
                    className={cn(
                      "w-full h-full object-cover rounded-lg",
                      imageProps.className,
                    )}
                    sizes={imageSizes}
                    priority
                    transition={sharedTransition}
                  />
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
};

export default ImageWrapper;
