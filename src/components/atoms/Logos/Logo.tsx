import Image from "../Image";
import mainLogo from "../../../assets/images/mainlogo.svg";
import { SiteInfo } from "../../../data/SiteInfo";

const Logo = () => {
  return (
    <Image
      src={mainLogo}
      alt={SiteInfo.siteTitle}
      width={40}
      height={40}
    />
  );
};

export default Logo;
