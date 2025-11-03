import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Julio Ramirez, Frontend Engineer specialized in React, TypeScript, and modern web architectures. Discover my background, experience, and passion for creating impactful user-centric products.",
  keywords: [
    "julio ramirez",
    "frontend engineer",
    "react developer",
    "typescript",
    "gsap developer",
    "three.js",
    "motion design",
    "venezuela developer",
    "web developer biography",
    "frontend engineer experience",
  ],
  alternates: {
    canonical: "./about",
  },
  openGraph: {
    title: "About me - Julio Ramirez",
    description:
      "Learn about Julio Ramirez, Frontend Engineer specialized in React, TypeScript, and modern web architectures. Discover my background, experience, and passion for creating impactful user-centric products.",
    type: "profile",
    url: "./about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const About = () => {
  return <AboutClient />;
};

export default About;
