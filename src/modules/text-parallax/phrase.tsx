import Image from "next/image";

interface PhraseProps {
  src: string;
}

const Phrase = ({ src }: PhraseProps) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw]">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image className="object-cover" src={src} alt="image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </span>
      {/* <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-red-500 rounded-full"></div>
      </span> */}
    </div>
  );
};

export default Phrase;
