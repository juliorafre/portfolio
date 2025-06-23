import { formatDistanceToNow } from '@/lib/utils';

const JournalCard = ({
  title,
  abstract,
  publishedOn,
}: {
  title: string;
  abstract: string;
  publishedOn: string;
}) => {
  return (
    <div
      className={`my-2 md:-mr-4 md:-ml-4 w-full md:w-[calc(100%_+_1rem)] rounded-lg bg-neutral-100 px-4 py-3 inset-shadow-sm inset-shadow-neutral-200 dark:border dark:border-neutral-800 dark:bg-neutral-800 dark:inset-shadow-none`}
    >
      <div className="mb-1 grid grid-cols-[1fr_auto] items-baseline gap-2">
        <h2 className="text-base font-semibold md:text-sm">{title}</h2>
        <time
          dateTime={publishedOn}
          className="text-muted-foreground text-xs text-nowrap whitespace-nowrap"
        >
          {formatDistanceToNow(new Date(publishedOn), { addSuffix: true, locale: 'en' })}
        </time>
      </div>
      <p className="text-muted-foreground text-base md:text-sm">{abstract}</p>
    </div>
  );
};

export default JournalCard;
