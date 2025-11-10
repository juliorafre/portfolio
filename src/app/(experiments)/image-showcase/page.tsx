/** biome-ignore-all lint/suspicious/noTemplateCurlyInString: i need those */
// import CodeBlock from "@/components/codeblock";
import CustomLink from "@/components/custom-link";
import ImageShowcase from "@/components/image-showcase/image-showcase";

const ImageShowcaseScreen = () => {
  /* const code =
    "'use client';\n\n" +
    "import { sampleClothes } from '@/modules/carousel/data/sample.data';\n" +
    "import Image from 'next/image';\n" +
    "import { useGSAP } from '@gsap/react';\n" +
    "import Observer from 'gsap/Observer';\n" +
    "import { ScrollTrigger } from 'gsap/ScrollTrigger';\n" +
    "import gsap from 'gsap';\n" +
    "import { useRef, useState } from 'react';\n" +
    "import { randomBetween } from '@/lib';\n" +
    "import { RefreshCcwIcon } from 'lucide-react';\n" +
    "import { motion } from 'motion/react';\n\n" +
    "gsap.registerPlugin(Observer, useGSAP, ScrollTrigger);\n\n" +
    "const ImageShowcase = () => {\n" +
    "  const [key, setKey] = useState(0);\n" +
    "  const containerRef = useRef<HTMLDivElement>(null);\n\n" +
    "  useGSAP(\n" +
    "    () => {\n" +
    "      if (containerRef.current) {\n" +
    "        const cards = containerRef.current.querySelectorAll('.image-card');\n" +
    "        gsap.fromTo(\n" +
    "          cards,\n" +
    "          {\n" +
    "            scale: 0,\n" +
    "            filter: 'blur(10px)',\n" +
    "            rotate: () => randomBetween(-80, -20),\n" +
    "          },\n" +
    "          {\n" +
    "            scale: 1,\n" +
    "            filter: 'blur(0px)',\n" +
    "            rotate: () => randomBetween(-5, 8),\n" +
    "            ease: 'elastic.out(0.4, 0.3, 0.1)', // spring-like\n" +
    "            duration: 0.85,\n" +
    "            stagger: 0.1,\n" +
    "            scrollTrigger: {\n" +
    "              trigger: containerRef.current,\n" +
    "              scrub: false,\n" +
    "              start: 'top 60%',\n" +
    "              end: '+=\\\\${ window.innerHeight / 1.2 }',\n" +
    "            },\n" +
    "          }\n" +
    "        );\n" +
    "      }\n" +
    "    },\n" +
    "    { dependencies: [key], scope: containerRef }\n" +
    "  );\n\n" +
    "  return (\n" +
    "    <div\n" +
    '      className="inset-shadow-lg @container/image-showcase relative aspect-video min-h-[280px] w-full overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-200"\n' +
    "      ref={containerRef}\n" +
    "    >\n" +
    "      {sampleClothes.map((img, idx) => {\n" +
    "        return (\n" +
    "          <div\n" +
    "            key={img.url}\n" +
    "            id={\\`image-card-\\${idx}\\`}\n" +
    '            className="image-card aspect-square h-[30vw] max-h-[250px] w-auto bg-transparent select-none sm:h-full"\n' +
    "            style={{\n" +
    "              filter: 'blur(4px)',\n" +
    "              transform: \\`translate(calc(-50% + \\${img.translateX}), calc(-50% + \\${img.translateY}))\\`,\n" +
    "              transformOrigin: 'bottom center',\n" +
    "              position: 'absolute',\n" +
    "              top: '50%',\n" +
    "              left: '50%',\n" +
    "              rotate: '0deg',\n" +
    "            }}\n" +
    "          >\n" +
    "            <motion.div\n" +
    '              className="size-full"\n' +
    "              whileHover={{\n" +
    "                scale: 1.1,\n" +
    "                transition: {\n" +
    "                  type: 'spring',\n" +
    "                  stiffness: 300,\n" +
    "                  damping: 10,\n" +
    "                },\n" +
    "              }}\n" +
    "            >\n" +
    "              <Image\n" +
    "                src={img.url}\n" +
    "                width={img.width}\n" +
    "                height={img.height}\n" +
    "                alt={img.alt}\n" +
    '                loading="lazy"\n' +
    '                className="pointer-events-none h-full w-full object-contain drop-shadow-xl"\n' +
    "                style={{\n" +
    "                  scale: img.scale,\n" +
    "                }}\n" +
    "              />\n" +
    "            </motion.div>\n" +
    "          </div>\n" +
    "        );\n" +
    "      })}\n" +
    "      <button\n" +
    '        id="reload-button"\n' +
    '        className="absolute bottom-0 left-0 mb-2 ml-2 flex cursor-pointer items-center justify-center gap-x-2 rounded-full bg-white/75 px-4 py-2 text-sm text-nowrap opacity-60 backdrop-blur-xl hover:bg-neutral-100 sm:mb-[20px] sm:ml-[20px] sm:px-2 sm:text-base"\n' +
    "        onClick={() => setKey(prev => prev + 1)}\n" +
    '        type="button"\n' +
    '        aria-label="Reload animation"\n' +
    "      >\n" +
    '        <RefreshCcwIcon className="size-4 sm:size-5" />\n' +
    '        <span className="sm:sr-only">Reload animation</span>\n' +
    "      </button>\n" +
    "    </div>\n" +
    "  );\n" +
    "};\n\n" +
    "export default ImageShowcase;\n"; */

  return (
    <div className="main-container h-full space-y-4">
      <div className="flex flex-col gap-y-1">
        <h1 className="text-lg md:text-xl">Image Showcase</h1>
        <p className="text-muted-foreground text-sm">09 Nov 2025</p>
      </div>
      <div className="w-full max-w-prose md:max-w-full space-y-2">
        <p>
          Small experiment replicating the sticker clothes reveal animation by{" "}
          <CustomLink href="https://x.com/bartek_marzec/status/1835432359815958530">
            @bartek_marzec
          </CustomLink>
        </p>
        <p>
          <CustomLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/juliorafre/pen/QwyeBbP"
          >
            Codepen
          </CustomLink>
        </p>
        <p className="text-muted-foreground text-sm">
          11/09/2025: I implemented a small update for this component. Now, the
          animation begins only after all images have loaded, and the timeline
          control follows GSAP best practices for improved reliability.
        </p>
      </div>

      <ImageShowcase />

      {/* <CodeBlock code={code} /> */}
    </div>
  );
};

export default ImageShowcaseScreen;
