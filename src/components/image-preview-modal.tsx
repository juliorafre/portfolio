'use client';

import { XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { Dialog } from 'radix-ui';

interface ImagePreviewModalProps {
  isOpen: boolean;
  currentImage: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  } | null;
  closePreview: () => void;
  transition?: {
    duration?: number;
    bounce?: number;
  };
  overlayClassName?: string;
  modalClassName?: string;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  isOpen,
  currentImage,
  closePreview,
  transition = { duration: 0.34, bounce: 0.2 },
  overlayClassName = 'bg-black/60 backdrop-blur-xs',
  modalClassName = '',
}) => {
  if (!currentImage) {
    return null;
  }

  const layoutId = `image-preview-${currentImage.src.replace(/[^a-zA-Z0-9]/g, '-')}`;

  return (
    <Dialog.Root onOpenChange={closePreview} open={isOpen}>
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
                <motion.div className="fixed inset-0 z-10 flex h-full w-full items-center justify-center p-4">
                  <Dialog.Title className="sr-only">Image Preview</Dialog.Title>
                  <Dialog.Description className="sr-only">
                    {currentImage.alt}
                  </Dialog.Description>
                  <motion.div
                    className={`group relative aspect-[1.5/1] w-[90vw] overflow-hidden rounded-lg md:w-[80vw] lg:w-[70vw] ${modalClassName}`}
                    layoutId={layoutId}
                    onClick={(e) => e.stopPropagation()}
                    transition={{
                      type: 'spring',
                      duration: transition.duration,
                      bounce: transition.bounce,
                    }}
                  >
                    <Image
                      alt={currentImage.alt}
                      className="h-full w-full object-cover"
                      height={currentImage.height || 1000}
                      src={currentImage.src}
                      width={currentImage.width || 1000}
                    />
                    <Dialog.Close asChild>
                      <motion.button
                        className="absolute top-4 right-4 cursor-pointer rounded-full bg-white/50 p-2 shadow-md backdrop-blur-2xl"
                        onClick={closePreview}
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
  );
};

export default ImagePreviewModal;
