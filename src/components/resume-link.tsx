"use client";
import { ArrowDownToLineIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const resumeOptions = [
  {
    url: "https://drive.google.com/file/d/1MFdShQdcZOn0yqZr2x5pZ-__PFxCbw5n/view?usp=drive_link",
    label: "En",
  },
  {
    url: "https://drive.google.com/file/d/1dd9eaHZ-8Ewf4JBcdG2AeqACflj7tQFL/view?usp=drive_link",
    label: "Es",
  },
];

const ResumeLink = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="flex items-center gap-1 rounded-full bg-neutral-200/50 py-0.5 pr-3 pl-2.5 font-medium text-black transition-all duration-150 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-foreground dark:hover:bg-neutral-700"
          type="button"
        >
          Resume
          <ArrowDownToLineIcon size={16} />
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
                className="flex items-center gap-1 bg-white px-4 py-2 text-lg text-muted-foreground transition-all duration-100 hover:bg-neutral-200 hover:text-black focus-visible:bg-neutral-200 active:bg-neutral-200 md:px-2 md:py-1 md:text-base dark:bg-neutral-800 dark:text-white hover:dark:bg-neutral-700 hover:dark:text-white"
                href={resume.url}
                key={resume.url}
                rel="noopener noreferrer"
                target="_blank"
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
