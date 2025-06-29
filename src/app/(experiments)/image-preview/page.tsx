'use client';

import ImageWrapper from '@/components/image-wrapper';

const ImagePreview = () => {
  return (
    <div className="main-container space-y-8">
      {/* Example 1: Basic usage */}
      <div className="flex items-center justify-center rounded-lg border bg-white p-8">
        <ImageWrapper
          alt="Basic Image Preview"
          className="rounded-lg"
          containerClassName="aspect-[1.5/1] w-full max-w-md rounded-lg"
          height={1000}
          src="/images/example2.webp"
          width={1000}
        />
      </div>

      {/* Example 2: Gallery grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
      </div>

      {/* Example 3: Custom styling */}
      <div className="flex justify-center">
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
      </div>

      {/* Example 4: Disabled preview (normal image) */}
      <div className="flex justify-center">
        <ImageWrapper
          alt="Disabled Preview Image"
          className="rounded-lg"
          disablePreview
          height={200}
          src="/images/example2.webp"
          width={300}
          wrapperClassName="rounded-lg border p-4"
        />
      </div>

      {/* Example 5: Blog/content images */}
      <div className="prose max-w-4xl">
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
      </div>
    </div>
  );
};

export default ImagePreview;
