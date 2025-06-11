import { CopyrightIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mx-auto mt-10 mb-6 block w-full md:mb-0">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-y-1 px-6 py-3.5 md:px-4">
        <p className="font-jetbrains-mono text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#ee5c43] via-[#1248d0] dark:via-[#8dff42] to-[#f12ef1] ">
          &quot;Like biological morph and motion&quot;
        </p>
        <p className="text-muted-foreground font-jetbrains-mono flex items-center gap-1 text-sm">
          <CopyrightIcon size={14} />
          2025 Julio R. All Rights Reserved.
        </p>
        <p className="text-muted-foreground font-jetbrains-mono text-sm">
          www.juliorafre.com v.2025.04
        </p>
      </div>
    </footer>
  );
};

export default Footer;
