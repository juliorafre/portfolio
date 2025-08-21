import { CopyrightIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mx-auto mt-10 mb-6 block w-full md:mb-0">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-y-1 px-6 py-3.5 md:px-0">
       {/* <p className="bg-gradient-to-r from-[#ee5c43] via-[#1248d0] to-[#f12ef1] bg-clip-text font-jetbrains-mono text-sm text-transparent dark:via-[#8dff42] ">
          &quot;Like biological morph and motion&quot;
        </p>*/}
        <p className="text-sm text-muted-foreground">
        Like biological morph and motion.
        </p>
        <p className="flex items-center font-light gap-1 text-muted-foreground text-sm">
          <CopyrightIcon size={14} />
          2025 Julio R. All Rights Reserved.
        </p>
      {/*  <p className="font-jetbrains-mono text-muted-foreground text-sm">
          www.juliorafre.com v.2025.04
        </p>*/}
      </div>
    </footer>
  );
};

export default Footer;
