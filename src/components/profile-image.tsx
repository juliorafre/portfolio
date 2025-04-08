'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProfileImageProps {
  size?: number;
}

const ProfileImage = ({ size = 100 }: ProfileImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="profile-image-interaction"
      className="relative"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <motion.div
        layout
        layoutId="shape"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          height: size * 1.62,
          scale: 1.1,
          rotateZ: -4,
          borderRadius: '12px',
        }}
        transition={{ type: 'spring', duration: 0.45, bounce: 0.4 }}
        className="absolute top-0 left-0 overflow-clip bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: isHovered ? 'var(--shadow-elevation-high)' : 'var(--shadow-elevation-low)',
          borderRadius: `${size}px`,
        }}
      >
        <motion.div
          layout
          layoutId="image"
          className={`relative w-[${size}px] top-0 left-0 bg-white`}
          style={{
            height: isHovered ? size * 1.72 : size,
          }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {!isHovered && (
              <motion.img
                layout
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)', scale: 1.5 }}
                className="absolute inset-0 aspect-square h-full w-full object-cover object-center"
                src="/images/home/image.webp"
                alt="Me"
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="popLayout" initial={false}>
            {isHovered && (
              <motion.img
                layout
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                className="absolute inset-0 h-full w-full object-cover object-center"
                src="/images/home/image-gif.gif"
                alt="Me"
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
