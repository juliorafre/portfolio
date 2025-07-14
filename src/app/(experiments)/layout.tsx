// import { Undo2Icon } from 'lucide-react';
// import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col">
      {/* <div className="mx-auto flex w-full max-w-3xl shrink-0 items-center justify-between px-6 py-4">
        <Link
          className="flex items-center gap-2 transition-colors hover:text-slate-600"
          href="/"
        >
          <Undo2Icon size={16} />
          Back
        </Link>
      </div> */}
      <main className="grow">{children}</main>
    </div>
  );
};

export default Layout;
