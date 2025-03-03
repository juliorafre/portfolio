import { CopyrightIcon } from 'lucide-react';

const Footer = () => {
  return (
    <div className="mx-auto mt-10 w-full border-t">
      <div className="mx-auto flex w-full max-w-3xl flex-row items-center justify-between px-4 py-3.5 md:px-10">
        <p className="text-muted-foreground flex items-center gap-x-1 text-sm font-light">
          <CopyrightIcon size={14} />
          2025
        </p>

        <p className="text-muted-foreground flex items-center gap-x-1 text-sm font-light font-instrument-serif font-s">
          Like biological morph and motion
        </p>
      </div>
    </div>
  );
};

export default Footer;
