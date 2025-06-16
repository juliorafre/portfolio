import { formatDistanceToNow } from '@/lib/utils';

const JournalCard = ({
  title,
  abstract,
  publishedOn,
  index,
}: {
  title: string;
  abstract: string;
  publishedOn: string;
  index: number;
}) => {
  return (
    <li
      className={`orchestration-element stagger-${index + 1} w-full rounded-lg my-2 bg-neutral-100 px-4 py-3 inset-shadow-sm inset-shadow-neutral-200 dark:bg-neutral-800 dark:inset-shadow-none dark:border dark:border-neutral-800`}
    >
      <div className="grid grid-cols-[1fr_auto] gap-2 items-baseline mb-1">
        <h2 className="text-base md:text-sm font-semibold">{title}</h2>
        <time
          dateTime={publishedOn}
          className="text-muted-foreground text-xs text-nowrap whitespace-nowrap"
        >
          {formatDistanceToNow(new Date(publishedOn), { addSuffix: true, locale: 'en' })}
        </time>
      </div>
      <p className="text-muted-foreground text-base md:text-sm ">{abstract}</p>
    </li>
  );
};

export default JournalCard;
