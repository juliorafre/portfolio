'use client';

import { siteConfig } from '@/app/siteConfig';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 right-0 mx-auto w-full max-w-3xl flex justify-center py-[22px] px-[40px]">
      <nav className="relative flex w-fit gap-x-8">
        <Link href={siteConfig.baseLinks.home}>Home</Link>
        <Link href={siteConfig.baseLinks.playground.home}>About</Link>
        <Link href={siteConfig.baseLinks.playground.home}>Pics</Link>
        <Link href={siteConfig.baseLinks.playground.home}>Playground</Link>
      </nav>
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
