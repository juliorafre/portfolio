import type { Metadata } from 'next';
import {
  Instrument_Serif,
  Crimson_Pro,
  Inter,
  JetBrains_Mono,
  Amatic_SC,
  Kalam,
} from 'next/font/google';
import './globals.css';
import 'lenis/dist/lenis.css';
import Footer from '@/components/footer';
// import LenisInit from '@/components/lenis-init';
import Header from '@/components/header';
import Script from 'next/script';

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const crimsonPro = Crimson_Pro({
  variable: '--font-crimson-pro',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const amaticSC = Amatic_SC({
  variable: '--font-amatic-sc',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const kalam = Kalam({
  variable: '--font-kalam',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Julio Ramirez | Software Engineer focused on Frontend',
  description:
    'I am Julio Ramirez, a Frontend Engineer specialized in React, TypeScript, and modern web architectures. I design user-centered products with fluid interfaces and interactions. Currently, I explore motion design using GSAP and Three.js to take digital experiences to the next level.',
  openGraph: {
    title: 'Julio Ramirez | Software Engineer focused on Frontend',
    description:
      'I am Julio Ramirez, a Frontend Engineer specialized in React, TypeScript, and modern web architectures. I design user-centered products with fluid interfaces and interactions. Currently, I explore motion design using GSAP and Three.js to take digital experiences to the next level.',
    url: 'https://juliorafre.com',
    siteName: 'Julio Ramirez | Software Engineer focused on Frontend',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://juliorafre.com/opengraph-image.png',
        width: 1200,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${crimsonPro.variable} ${inter.variable} ${jetBrainsMono.variable} ${amaticSC.variable} ${kalam.variable} font-inter grid grid-rows-[auto_1fr_auto] pb-15 antialiased md:pb-0`}
      >
        {/*  <LenisInit /> */}
        <Header />
        <main className="relative min-h-dvh min-w-0 md:min-h-max">{children}</main>
        <Footer />
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a01a229b64994eb891953c8b0dda26fd"}'
          id="cloudflare-analytics"
        ></Script>
      </body>
    </html>
  );
}
