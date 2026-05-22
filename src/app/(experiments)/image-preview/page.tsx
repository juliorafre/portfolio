"use client";

import ImageWrapper from "@/components/image-wrapper";

const ImagePreview = () => {
  return (
    <div className="main-container space-y-8">
      <div className="space-y-2">
        <h1 className="font-semibold text-lg">Image Preview</h1>
        <p className="text-muted-foreground">
          Interaction built using shared layout from motion and Radix dialog
          primitive. Inspired in the component of{" "}
          <a
            href="https://x.com/jakubkrehel"
            className="text-black underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            @jakubkrehel
          </a>
        </p>
        <p className="text-muted-foreground text-xs">
          For some reason the shared layout doesn&apos;t work well on mobile
          devices. Fixing it is on my to-do list.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center md:gap-8 rounded-lg border bg-white dark:bg-neutral-800 p-4 md:p-10">
        <div className="bg-[#F5F0E4] rounded-lg overflow-hidden md:block hidden">
          <ImageWrapper
            key="robot"
            alt="robot"
            containerClassName="aspect-square w-full max-w-md bg-neutral-50"
            src="/images/components/image-preview/robot-pain.webp"
            width={500}
            height={500}
          />
          <div className="px-4 py-2 font-bold font-instrument-serif text-muted-foreground flex items-center justify-between">
            <h3>Claude - Employee of the month</h3>
            <span>#975</span>
          </div>
        </div>
        <div className="bg-[#F5F0E4] rounded-lg shadow">
          <ImageWrapper
            key="me"
            alt="me"
            containerClassName="aspect-square w-full max-w-md bg-neutral-50"
            src="/images/components/image-preview/me.webp"
            width={500}
            height={500}
          />
          <div className="px-4 py-2 font-bold flex items-center text-muted-foreground font-instrument-serif justify-between">
            <h3>Me</h3>
            <span>#865</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
