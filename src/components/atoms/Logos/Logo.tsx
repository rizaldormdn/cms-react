import Image from "../Image";
import mainLogo from "../../../assets/images/mainlogo.svg";

const Logo = () => {
  return (
    <Image
      src={mainLogo}
      alt="Dinar Education"
      width={40}
      height={40}
    />
  );
};

export default Logo;
