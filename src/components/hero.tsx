// import ProfileImage from './profile-image';

import { cn } from '@/lib';

const Hero = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  return (
    <div className={cn('flex w-full flex-col items-start gap-2', className)} style={style}>
      {/* <ProfileImage size={80} /> */}
      <h1 className="text-primary block text-base leading-tight font-medium">Julio Ramirez</h1>
      <h2 className="text-muted-foreground block text-base leading-tight font-medium">
        Software Engineer focused on Frontend Web, based in Santiago, Chile
      </h2>
    </div>
  );
};

export default Hero;
