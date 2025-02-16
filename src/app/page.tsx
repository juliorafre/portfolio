'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <p>Home</p>
      <div className="flex flex-col mt-2">
        <Link href="/text-parallax">Text Parallax</Link>
        <Link href="/text-gradient-on-scroll">Text Gradient On Scroll</Link>
        <Link href="/map-interaction">Map Interaction</Link>
      </div>
    </div>
  );
}
