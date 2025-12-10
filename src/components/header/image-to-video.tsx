"use client";

import Image from "next/image";

const ImageToVideo = () => {
  return (
    <div className="relative group inline-block size-[1.5em] overflow-visible translate-y-[5px]">
      <div className="absolute inset-0 size-[1.5em] rounded-full bg-white overflow-hidden ">
        <Image
          alt="portrait"
          className="object-cover rounded-full size-full"
          height={150}
          src="/images/home/me-ditter.png"
          width={150}
        />
      </div>
    </div>
  );
};

export default ImageToVideo;
