import { useCallback, useState } from 'react';

interface UseImagePreviewOptions {
  /**
   * Custom spring transition config
   */
  transition?: {
    duration?: number;
    bounce?: number;
  };
  /**
   * Custom overlay background classes
   */
  overlayClassName?: string;
  /**
   * Custom modal classes
   */
  modalClassName?: string;
}

export const useImagePreview = (options: UseImagePreviewOptions = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  } | null>(null);

  const openPreview = useCallback(
    (imageData: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    }) => {
      setCurrentImage(imageData);
      setIsOpen(true);
    },
    []
  );

  const closePreview = useCallback(() => {
    setIsOpen(false);
    // Delay clearing current image to allow exit animation
    setTimeout(() => setCurrentImage(null), 300);
  }, []);

  const previewProps = {
    isOpen,
    currentImage,
    closePreview,
    transition: options.transition || { duration: 0.34, bounce: 0.2 },
    overlayClassName:
      options.overlayClassName || 'bg-black/60 backdrop-blur-xs',
    modalClassName: options.modalClassName || '',
  };

  return {
    openPreview,
    closePreview,
    previewProps,
    isOpen,
  };
};
