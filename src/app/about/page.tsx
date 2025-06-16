// import Hero from '@/components/hero';
import Image from 'next/image';

const About = () => {
  return (
    <div className="main-container">
      <div className="flex w-full items-center justify-center">
        <Image
          src="/images/home/image.webp"
          alt="Julio Ramirez"
          className="size-[30%] rounded-full shadow"
          width={100}
          height={100}
        />
      </div>

      {/* <div className="flex items-center justify-center">
        <div className="px-4 py-2  rounded-lg border border-dashed border-gray-300 bg-gray-100">
          <p className="font-medium text-lg text-gray-500"> Coming soon</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
