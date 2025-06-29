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
      className={
        'md:-mr-4 md:-ml-4 inset-shadow-neutral-200 inset-shadow-sm my-2 w-full rounded-lg bg-neutral-100 px-4 py-3 md:w-[calc(100%_+_1rem)] dark:inset-shadow-none dark:border dark:border-neutral-800 dark:bg-neutral-800'
      }
    >
      <div className="mb-1 grid grid-cols-[1fr_auto] items-baseline gap-2">
        <h2 className="font-semibold text-base md:text-sm">{title}</h2>
        <time
          className="whitespace-nowrap text-nowrap text-muted-foreground text-xs"
          dateTime={publishedOn}
        >
          {formatDistanceToNow(new Date(publishedOn), {
            addSuffix: true,
            locale: 'en',
          })}
        </time>
      </div>
      <p className="text-base text-muted-foreground md:text-sm">{abstract}</p>
    </div>
  );
};

export default JournalCard;
