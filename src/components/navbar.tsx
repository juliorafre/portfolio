'use client';
import { siteConfig } from '@/app/siteConfig';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="relative w-fit flex flex-col items-center">
      <nav className="relative flex w-full justify-center gap-x-8 ">
        <Link href={siteConfig.baseLinks.home}>Home</Link>
        <Link href={siteConfig.baseLinks.playground.home}>About</Link>
        <Link href={siteConfig.baseLinks.playground.home}>Pics</Link>
        <Link href={siteConfig.baseLinks.playground.home}>Playground</Link>
      </nav>
      <div aria-hidden className="clip-path-container">
        <nav className="relative top-0 right-[50%] z-20 mt-4 flex translate-x-1/2 transform items-center justify-between gap-x-4 rounded-full bg-fuchsia-300 px-4 py-2 shadow">
          <Link href={siteConfig.baseLinks.home}>Home</Link>
          <Link href={siteConfig.baseLinks.playground.home}>About</Link>
          <Link href={siteConfig.baseLinks.playground.home}>Pics</Link>
          <Link href={siteConfig.baseLinks.playground.home}>Playground</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

/* 
<nav className="flex justify-between items-center p-4 py-4 bg-red-50">
      <div className="w-full flex max-w-6xl mx-auto gap-x-4 items-center">
        <div className="flex flex-col leading-tight">
          <p className='font-bold font-display'>Julio Ramirez</p>
          <p>✦ Front End Engineer </p>
        </div>
        <Link href={siteConfig.baseLinks.playground.home}>About</Link>
        <Link href={siteConfig.baseLinks.playground.home}>Pics</Link>
        <Link href={siteConfig.baseLinks.playground.home}>Playground</Link>
      </div>
    </nav>
     */
