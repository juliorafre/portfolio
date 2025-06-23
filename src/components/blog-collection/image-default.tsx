import Image, { ImageProps } from 'next/image';

interface ImageDefaultProps extends ImageProps {
  alt: string;
}

const ImageDefault = ({ alt = '', ...props }: ImageDefaultProps) => {
  return <Image alt={alt} {...props} />;
};

export default ImageDefault;
