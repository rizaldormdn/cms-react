import React from "react";
import Image from "../atoms/Image";
import mainLogo from "../../assets/images/logo.svg";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image
      src={mainLogo}
      alt="Dinar Education"
      width={150}
    />
  );
};

export default Logo;
