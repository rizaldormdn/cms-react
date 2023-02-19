import React from "react";
import Image from "../atoms/Image";
import mainLogo from "../../assets/static/svgs/mainlogo.svg";

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
