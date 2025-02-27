import Link from 'next/link';
import { siteConfig } from './siteConfig';

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto">
        <p>Home</p>
        <div className="flex flex-col mt-2">
          <Link href="/text-parallax">Text Parallax</Link>
          <Link href="/text-gradient-on-scroll">Text Gradient On Scroll</Link>
          <Link href="/map-interaction">Map Interaction</Link>
          <Link href="/draggable-curved">Draggable Curved</Link>
        </div>
      </div>
    </div>
  );
}
