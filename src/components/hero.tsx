// import ProfileImage from './profile-image';

const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
      {/* <ProfileImage size={80} /> */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-base font-medium text-primary">Julio Ramirez</h1>
        <h2 className="text-base font-medium text-muted-foreground">
          Software Engineer focused on Frontend Web, based in Santiago, Chile
        </h2>
      </div>
    </div>
  );
};

export default Hero;
