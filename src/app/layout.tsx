import type { Metadata } from 'next';
import { Instrument_Serif, Crimson_Pro, Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

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

export const metadata: Metadata = {
  title: 'Julio Ramirez - Ingeniero Frontend en Santiago, Chile',
  description: 'Soy Julio Ramirez, un Ingeniero Frontend especializado en React, TypeScript y arquitecturas web modernas. Diseño productos centrados en el usuario con interfaces e interacciones fluidas. Actualmente, exploro el diseño de movimiento utilizando GSAP y Three.js para llevar las experiencias digitales al siguiente nivel.',
  openGraph: {
    title: 'Julio Ramirez - Ingeniero Frontend en Santiago, Chile',
    description: 'Soy Julio Ramirez, un Ingeniero Frontend especializado en React, TypeScript y arquitecturas web modernas. Diseño productos centrados en el usuario con interfaces e interacciones fluidas. Actualmente, exploro el diseño de movimiento utilizando GSAP y Three.js para llevar las experiencias digitales al siguiente nivel.',
    url: 'https://juliorafre.com',
    siteName: 'Julio Ramirez - Ingeniero Frontend en Santiago, Chile',
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
      <body className={`${instrumentSerif.variable} ${crimsonPro.variable} ${inter.variable} font-inter antialiased`}>
        <main className="relative flex flex-col min-h-dvh md:min-h-screen min-w-0">
          {/* <Navbar /> */}
          <div className="grow-1">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
