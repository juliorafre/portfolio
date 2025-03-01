import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <nav className="fixed top-0 right-0 left-0 z-10">
        <div className="header relative flex h-[60px] w-full items-center justify-between border-b px-4">
          <Link href="/" className="z-20 transition-colors hover:text-slate-600">
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
          <div className="backdrop-glass"></div>
        </div>
      </nav>
      <main className="w-full overflow-y-auto pt-[60px]">{children}</main>
    </div>
  );
};

export default Layout;
