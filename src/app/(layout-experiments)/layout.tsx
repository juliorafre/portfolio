import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full overflow-hidden relative">
      <header className="fixed top-0 right-0 left-0 z-10">
        <div className="header border-b relative w-full flex items-center justify-between h-[60px] px-4">
          <Link href="/" className="hover:text-slate-600 transition-colors z-20">
            Back
          </Link>
          <a href="https://x.com/juliorafre" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors z-20 flex items-center gap-2">
            @juliorafre
            <ExternalLinkIcon size={16} />
          </a>
          <div className="backdrop-glass"></div>
        </div>
      </header>
      <main className="overflow-y-auto w-full pt-[60px]">{children}</main>
    </div>
  );
};

export default Layout;
