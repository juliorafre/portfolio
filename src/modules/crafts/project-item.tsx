import Image from 'next/image';
import Link from 'next/link';
import ProjectBadge from './project-badge';

export interface ProjectItemProps {
  href: string;
  title: string;
  year: number;
  description: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  mediaAlt?: string;
}

const ProjectItem = ({
  href,
  title,
  year,
  description,
  mediaType,
  mediaSrc,
  mediaAlt,
}: ProjectItemProps) => {
  const customAlt = mediaAlt || `Project ${title}`;

  return (
    <Link
      className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-3xl p-3 bg-white md:bg-transparent"
      href={href}
    >
      <div
        aria-hidden
        className="absolute inset-0 top-0 left-0 z-10 scale-95 transform rounded-3xl bg-white dark:bg-neutral-800 opacity-0 transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100"
      />
      <div className="relative z-20 order-1 aspect-wide overflow-hidden rounded-2xl border bg-neutral-100">
        <div className="absolute inset-0 top-0 left-0 z-30 flex h-1/4 w-full items-start justify-end bg-transparent px-3 py-3">
          <ProjectBadge type="demo" />
        </div>
        {mediaType === 'image' ? (
          <Image
            alt={customAlt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src={mediaSrc}
          />
        ) : (
          <video
            autoPlay
            className="overflow size-full object-cover object-center"
            loop
            muted
            playsInline
            src={mediaSrc}
          />
        )}

      </div>
      <div className="z-20 order-2 px-2 pt-2">
        <div className="order-2 grid grid-cols-[1fr_auto] items-center gap-x-3">
          <p className="font-medium text-base">{title}</p>
          <p className="text-muted-foreground">{year}</p>
        </div>
        <p className="order-3 mb-1 text-muted-foreground text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectItem;
