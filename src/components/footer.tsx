import { CopyrightIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mx-auto mt-10 hidden w-full md:block">
      <div className="font-jetbrains-mono mx-auto flex w-full max-w-3xl flex-row items-center justify-between px-4 py-3.5 md:px-10">
        <p className="text-muted-foreground flex items-center gap-x-1 text-sm font-light">
          <CopyrightIcon size={14} />
          2025 Julio R. All Rights Reserved.
        </p>

        <p className="text-muted-foreground font-instrument-serif font-s flex items-center gap-x-1 text-right text-base font-light">
          &quot;Like biological morph and motion&quot;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
