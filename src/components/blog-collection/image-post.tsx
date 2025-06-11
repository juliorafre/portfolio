import Image, { ImageProps } from "next/image";

const ImagePost = (props: ImageProps) => {
  return  <section className="image-content wide relative aspect-[calc(3/2)/1] w-full overflow-hidden rounded-xl border border-black/10 shadow-xl">
  <div className="absolute top-0 left-0 h-full w-full">
    <Image
      {...props}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className="block h-full w-full object-cover object-center"
    />
  </div>
  <div
    style={{
      borderRadius: '12px',
      boxShadow: 'inset 0 0.5px 0 1.5px rgba(255, 255, 255, 0.4)',
      flex: 'none',
      height: '100%',
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      width: '100%',
      willChange: 'transform',
    }}
  ></div>
</section>;
};

export default ImagePost;