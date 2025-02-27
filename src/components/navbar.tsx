import { siteConfig } from '@/app/siteConfig';
import Link from 'next/link';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
