'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const resumeOptions = [
  {
    url: '/files/Julio_Ramirez_CV_EN.pdf',
    label: 'En',
  },
  {
    url: '/files/Julio_Ramirez_CV_ES.pdf',
    label: 'Es',
  },
];

const ResumeLink = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="rounded-full bg-neutral-200/50 py-0.5 pr-2 pl-2.5 font-medium text-black transition-all duration-150 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-foreground dark:hover:bg-neutral-700"
          type="button"
        >
          Resume
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="h-auto w-auto overflow-hidden rounded-md p-0"
        side="top"
      >
        <div className="flex divide-x">
          {resumeOptions.map((resume) => {
            return (
              <a
                className="bg-white px-4 py-2 text-lg text-muted-foreground transition-all duration-100 hover:bg-neutral-200 hover:text-black focus-visible:bg-neutral-200 active:bg-neutral-200 md:px-2 md:py-1 md:text-base dark:bg-neutral-800 dark:text-white hover:dark:bg-neutral-700 hover:dark:text-white"
                download
                href={resume.url}
                key={resume.url}
              >
                {resume.label}
              </a>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ResumeLink;
