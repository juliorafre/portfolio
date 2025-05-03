import ProfileImage from './profile-image';

const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
      <ProfileImage size={70} />
      <div className="flex flex-col leading-tight">
        <p className="">Julio Ramirez</p>
        <p className="text-muted-foreground">Frontend Developer based in Santiago, Chile</p>
      </div>
    </div>
  );
};

export default Hero;
