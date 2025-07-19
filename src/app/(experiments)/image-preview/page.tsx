'use client';

import ImageWrapper from '@/components/image-wrapper';

const ImagePreview = () => {
  return (
    <div className="main-container space-y-8">
      <div className="space-y-2">
        <h1 className="font-semibold text-lg">Image Preview</h1>
        <p className="text-muted-foreground">Interaction built using shared layout from motion and Radix dialog
          primitive. Inspired in the component of <a href="https://x.com/jakubkrehel" className="text-black underline" target="_blank" rel="noreferrer noopener">@jakubkrehel</a>
        </p>
        <p className="text-muted-foreground text-xs">For some reason the shared layout doesn&apos;t work well on mobile devices.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center md:gap-8 rounded-lg border bg-white dark:bg-neutral-800 p-4 md:p-10">
        <div className="bg-[#F5F0E4] rounded-lg shadow">
          <ImageWrapper
            alt="robot"
            className="rounded-lg"
            containerClassName="aspect-square w-full max-w-md rounded-lg bg-neutral-50"
            height={800}
            src="/images/components/image-preview/robot-pain.webp"
            width={800}
          />
          <div
            className="px-4 py-2 font-bold font-instrument-serif text-muted-foreground flex items-center justify-between">
            <h3>Claude - Employee of the month</h3>
            <span>#975</span>
          </div>
        </div>
        <div className="bg-[#F5F0E4] rounded-lg shadow">
          <ImageWrapper
            alt="me"
            className="rounded-lg"
            containerClassName="aspect-square w-full max-w-md rounded-lg bg-white "
            height={800}
            src="/images/components/image-preview/me.webp"
            width={800}
          />
          <div
            className="px-4 py-2 font-bold flex items-center text-muted-foreground font-instrument-serif justify-between">
            <h3>Me</h3>
            <span>#865</span>
          </div>
        </div>
      </div>
      {/* Example 1: Basic usage */}
      {/*  <div className="flex items-center justify-center rounded-lg border bg-white p-8">
        <ImageWrapper
          alt="Basic Image Preview"
          className="rounded-lg"
          containerClassName="aspect-[1.5/1] w-full max-w-md rounded-lg"
          modalClassName="aspect-wide"
          height={1800}
          src="/images/example2.webp"
          width={1200}
        />
      </div>*/}

      {/* Example 2: Gallery grid */}
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          '/images/example2.webp',
          '/images/example.png',
          '/images/home/image.webp',
        ].map((src, index) => (
          <ImageWrapper
            alt={`Gallery image ${index + 1}`}
            className="rounded-lg"
            containerClassName="aspect-square rounded-lg"
            height={300}
            key={src}
            src={src}
            transition={{ duration: 0.4, bounce: 0.1 }}
            width={400}
          />
        ))}
      </div>*/}

      {/* Example 3: Custom styling */}
      {/* <div className="flex justify-center">
        <ImageWrapper
          alt="Custom Styled Image"
          buttonClassName="bg-blue-500/80 hover:bg-blue-600/80"
          className="rounded-2xl"
          containerClassName="aspect-video w-full max-w-2xl rounded-2xl border-4 border-blue-500"
          height={600}
          modalClassName="border-4 border-blue-400"
          overlayClassName="bg-blue-900/50 backdrop-blur-md"
          src="/images/example2.webp"
          width={800}
          wrapperClassName="shadow-2xl"
        />
      </div>*/}

      {/* Example 4: Disabled preview (normal image) */}
      {/*<div className="flex justify-center">
        <ImageWrapper
          alt="Disabled Preview Image"
          className="rounded-lg"
          disablePreview
          height={200}
          src="/images/example2.webp"
          width={300}
          wrapperClassName="rounded-lg border p-4"
        />
      </div>*/}

      {/* Example 5: Blog/content images */}
      {/* <div className="prose max-w-4xl">
        <h2>Blog Post Example</h2>
        <p>
          Here&apos;s an example of how you can use the ImageWrapper component
          in blog posts or articles:
        </p>
        <ImageWrapper
          alt="Blog post featured image"
          className="rounded-lg"
          containerClassName="aspect-[2/1] w-full rounded-lg"
          height={400}
          src="/images/example2.webp"
          transition={{ duration: 0.5, bounce: 0 }}
          width={800}
        />
        <p>
          The image above demonstrates how seamlessly the preview functionality
          integrates with your content.
        </p>
      </div>*/}
    </div>
  );
};

export default ImagePreview;
