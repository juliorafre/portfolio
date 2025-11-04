import Image from "next/image";

interface ProductProps {
  imageSrc: string;
}

const Product = ({ imageSrc }: ProductProps) => {
  return (
    <div className="product relative w-[30vw] md:w-[18.5vw] aspect-square opacity-0">
      <div className="w-[30vw] md:w-[18.5vw] aspect-square">
        <Image
          className="absolute size-full object-contain"
          src={imageSrc}
          width={600}
          height={600}
          alt="tetera"
        />
      </div>
    </div>
  );
};

export default Product;
