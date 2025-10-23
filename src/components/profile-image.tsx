"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const MotionImage = motion(Image);

interface ProfileImageProps {
  size?: number;
}

const ProfileImage = ({ size = 100 }: ProfileImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      id="profile-image-interaction"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <motion.div
        className="absolute top-0 left-0 overflow-clip bg-white"
        layout
        layoutId="shape"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: isHovered
            ? "var(--shadow-elevation-high)"
            : "var(--shadow-elevation-low)",
          borderRadius: `${size}px`,
        }}
        transition={{ type: "spring", duration: 0.45, bounce: 0.4 }}
        whileHover={{
          height: size * 1.62,
          scale: 1.1,
          rotateZ: -4,
          borderRadius: "12px",
        }}
      >
        <motion.div
          className={`relative w-[${size}px] top-0 left-0 bg-white`}
          layout
          layoutId="image"
          style={{
            height: isHovered ? size * 1.72 : size,
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {!isHovered && (
              <MotionImage
                alt="Me"
                animate={{ opacity: 1, filter: "blur(0px)" }}
                className="absolute inset-0 aspect-square h-full w-full object-cover object-center"
                exit={{ opacity: 0, filter: "blur(4px)", scale: 1.5 }}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                layout
                src="/images/home/image.webp"
                width={300}
                height={300}
              />
            )}
          </AnimatePresence>
          <AnimatePresence initial={false} mode="popLayout">
            {isHovered && (
              <MotionImage
                alt="Me"
                animate={{ opacity: 1, filter: "blur(0px)" }}
                className="absolute inset-0 h-full w-full object-cover object-center"
                exit={{ opacity: 0, filter: "blur(4px)" }}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                layout
                src="/images/home/image-gif.gif"
                width={300}
                height={300}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileImage;

/* 
<motion.img
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(4px)', scale: 1.5 }}
              transition={{ duration: 0.250 }}
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/images/image-gif-2.gif"
              alt="Profile video"
            />
             */

/*  <motion.video
              layoutId="video"
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.359 }}
              width="100"
              height="177"
              autoPlay
              loop
              muted
              preload="auto"
            >
              <source src="/images/video.mp4" type="video/mp4" /> Your browser does not support the video tag.
            </motion.video>
             */
