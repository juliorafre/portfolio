import { cn } from '@/lib';

const Hero = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn('flex w-full flex-col items-start', className)}
      style={style}
    >
      <h1 className="block font-semibold text-lg text-primary leading-tight">
        Julio Ramirez
      </h1>
      <h2 className="block mt-1 font-medium text-lg text-muted-foreground leading-tight">
        Software Engineer focused on Frontend Web, based in Santiago, Chile
      </h2>
      <p className="text-base text-muted-foreground mt-2">
        {/* I craft impactful, user-centric products, focusing on seamless interactions and interface
          design. Passionate about collaboration, I thrive in multidisciplinary teams, always
          learning and innovating. Specializing in React, TypeScript, and modern web architectures,
          I build high-performance, scalable applications with real-time data and interactive UIs.
          Currently exploring motion design, GSAP, and Motion (prev framer-motion) to push digital experiences further. */}
        Passionate about crafting performant, interactive experiences — blending
        design precision, scalable architecture, and dynamic motion into
        seamless digital products.
      </p>
    </div>
  );
};

export default Hero;
