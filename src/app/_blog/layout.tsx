import Link from 'next/link';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-3xl py-10">
      <header className="flex items-center gap-2">
        <Link href="/">Back</Link>
        <h1>This is a title</h1>
      </header>
      {children}
    </div>
  );
};

export default BlogLayout;
