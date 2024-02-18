import logoImg from "./../../../../public/logo.svg";

const Logo = () => {
  return (
    <div className="relative">
      <h3 className="text-2xl font-medium text-white">Eventify</h3>
      <span className="absolute top-[-20%] right-[-15%] h-5 w-5">
        <img src={logoImg} alt="logo-image" />
      </span>
    </div>
  );
};

export default Logo;
