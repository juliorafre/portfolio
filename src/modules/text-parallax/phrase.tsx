import Image from "next/image";

interface PhraseProps {
  src: string;
}

const Phrase = ({ src }: PhraseProps) => {
  return (
    <div className="flex items-center gap-5 px-5">
      <p className="text-[7.5vw] whitespace-nowrap">Frontend Developer</p>
      <span className="relative aspect-4/2 h-[7.5vw] overflow-hidden rounded-full">
        <Image
          alt="image"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={src}
        />
      </span>
    </div>
  );
};

export default Phrase;
