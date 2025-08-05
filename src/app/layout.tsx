import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';

import {
  Amatic_SC,
  Crimson_Pro,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Kalam,
} from 'next/font/google';
import './globals.css';
import 'lenis/dist/lenis.css';
import Script from 'next/script';
import Footer from '@/components/footer';
// import LenisInit from '@/components/lenis-init';
import Header from '@/components/header';

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
  metadataBase: new URL('https://www.juliorafre.com'),
  title: {
    default: 'Julio Ramirez | Software Engineer focused on Frontend',
    template: '%s | Julio Ramirez',
  },
  description:
    'I am Julio Ramirez, a Frontend Engineer specialized in React, TypeScript, and modern web architectures. I design user-centered products with fluid interfaces and interactions. Currently, I explore motion design using GSAP and Three.js to take digital experiences to the next level.',
  keywords: [
    'frontend engineer',
    'react developer',
    'typescript',
    'nextjs',
    'motion design',
    'gsap',
    'three.js',
    'animations',
    'web interactions',
    'ui/ux',
    'software engineer',
    'javascript',
    'web development',
  ],
  authors: [{ name: 'Julio Ramirez', url: 'https://www.juliorafre.com' }],
  creator: 'Julio Ramirez',
  publisher: 'Julio Ramirez',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Julio Ramirez | Software Engineer focused on Frontend',
    description:
      'I am Julio Ramirez, a Frontend Engineer specialized in React, TypeScript, and modern web architectures. I design user-centered products with fluid interfaces and interactions. Currently, I explore motion design using GSAP and Three.js to take digital experiences to the next level.',
    url: 'https://www.juliorafre.com',
    siteName: 'Julio Ramirez | Software Engineer focused on Frontend',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://juliorafre.com/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FDFDFC' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1818' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${crimsonPro.variable} ${inter.variable} ${jetBrainsMono.variable} ${amaticSC.variable} ${kalam.variable} grid grid-rows-[auto_1fr_auto] overflow-y-scroll bg-[#F7F7F7] pb-15 font-inter antialiased md:pb-0 dark:bg-background-dark`}
      >
        {/*  <LenisInit /> */}
        <Header />
        <main className="relative min-h-dvh min-w-0 md:min-h-max">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && (
          <Script
            data-cf-beacon='{"token": "a01a229b64994eb891953c8b0dda26fd"}'
            id="cloudflare-analytics"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
          />
        )}
        <SpeedInsights />
      </body>
    </html>
  );
}
