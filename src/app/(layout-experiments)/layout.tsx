import { ExternalLinkIcon, Undo2Icon } from 'lucide-react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="max-w-3xl mx-auto shrink-0 flex w-full items-center justify-between  py-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 transition-colors hover:text-slate-600"
        >
          <Undo2Icon size={16} />
          Back
        </Link>
        <a
          href="https://x.com/juliorafre"
          target="_blank"
          rel="noopener noreferrer"
          className="z-20 flex items-center gap-2 transition-colors hover:text-slate-600"
        >
          @juliorafre
          <ExternalLinkIcon size={16} />
        </a>
        {/* <div className="backdrop-glass"></div> */}
      </div>
      <main className="grow">{children}</main>
    </div>
  );
};

export default Layout;
