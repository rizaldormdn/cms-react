import React from "react";
import Image from "../atoms/Image";
<<<<<<< Updated upstream
import mainLogo from "../../assets/images/mainlogo.svg";
=======
import mainLogo from "../../assets/static/svgs/mainlogo.svg";
>>>>>>> Stashed changes

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image
      src={mainLogo}
      alt="Dinar Education"
      width="w-[40px]"
      height="h-[40px]"
    />
  );
};

export default Logo;
