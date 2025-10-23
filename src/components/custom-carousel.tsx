"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const MotionImage = motion(Image);

const CustomCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const images = [
    "/images/about/3.png",
    "/images/about/1.png",
    "/images/about/2.png",
  ];

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentImage((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % images.length;
      }
      return (prev - 1 + images.length) % images.length;
    });
  }, []);

  const handleNext = useCallback(() => {
    paginate(1);
  }, [paginate]);

  const handlePrevious = useCallback(() => {
    paginate(-1);
  }, [paginate]);

  // Handle swipe gestures
  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipeThreshold = 50;
      const swipeVelocityThreshold = 500;

      // Check for swipe distance or velocity
      if (
        Math.abs(info.offset.x) > swipeThreshold ||
        Math.abs(info.velocity.x) > swipeVelocityThreshold
      ) {
        if (info.offset.x > 0 || info.velocity.x > 0) {
          // Swiped right - go to previous
          paginate(-1);
        } else {
          // Swiped left - go to next
          paginate(1);
        }
      }
    },
    [paginate],
  );

  // Animation variants with proper directional sliding
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.7,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.7,
    }),
  };

  return (
    <motion.div
      className="group relative mb-10 flex h-[200px] w-full overflow-hidden rounded-2xl"
      ref={constraintsRef}
      style={{ touchAction: "pan-y pinch-zoom" }}
      variants={{
        hover: {},
      }}
      whileHover="hover"
    >
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <MotionImage
          alt={`Experience picture ${currentImage + 1}`}
          animate="center"
          className="absolute inset-0 z-10 size-full cursor-grab object-cover active:cursor-grabbing"
          custom={direction}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          exit="exit"
          height={700}
          initial="enter"
          key={currentImage}
          onDragEnd={handleDragEnd}
          src={images[currentImage]}
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.45,
          }}
          variants={slideVariants}
          whileDrag={{
            scale: 1.02,
            transition: { duration: 0.1 },
          }}
          width={800}
        />
      </AnimatePresence>

      {/* Navigation controls */}
      <motion.div
        className="absolute bottom-0 left-0 z-30 flex w-full items-center justify-end px-2 py-2"
        initial={{ y: "110%" }}
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: 0.45,
        }}
        variants={{
          hover: {
            y: 0,
          },
        }}
      >
        <div className="flex w-content items-center justify-center overflow-hidden rounded-full bg-white/20 backdrop-blur-lg">
          <motion.button
            aria-label="Previous image"
            className="flex cursor-pointer items-center gap-2 px-2 py-1 transition-all hover:bg-gray-100/50"
            onClick={handlePrevious}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeftIcon className="size-5" />
            <span className="sr-only">Previous</span>
          </motion.button>
          <motion.button
            aria-label="Next image"
            className="flex cursor-pointer items-center gap-2 px-2 py-1 transition-all hover:bg-gray-100/50"
            onClick={handleNext}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="size-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Pagination dots */}
      <div className="-translate-x-1/2 absolute bottom-2 left-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <motion.button
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentImage ? "bg-white" : "bg-white/50"
            }`}
            // biome-ignore lint/suspicious/noArrayIndexKey: TODO resolve key
            key={index}
            onClick={() => {
              const newDirection = index > currentImage ? 1 : -1;
              setDirection(newDirection);
              setCurrentImage(index);
            }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CustomCarousel;
