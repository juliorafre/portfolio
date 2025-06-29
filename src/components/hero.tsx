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
      className={cn('flex w-full flex-col items-start gap-2', className)}
      style={style}
    >
      <h1 className="block font-medium text-base text-primary leading-tight">
        Julio Ramirez
      </h1>
      <h2 className="block font-medium text-base text-muted-foreground leading-tight">
        Software Engineer focused on Frontend Web, based in Santiago, Chile
      </h2>
    </div>
  );
};

export default Hero;
