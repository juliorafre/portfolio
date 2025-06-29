'use client';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="main-container">
      <h1 className="mb-4 font-semibold text-2xl">Page not found</h1>
      <p className="text-muted-foreground">
        The page you are looking for has moved or doesn&apos;t exist. Try
        finding it through the{' '}
        <Link className="text-black underline" href="/">
          homepage
        </Link>
        ?
      </p>
    </div>
  );
};

export default NotFound;
