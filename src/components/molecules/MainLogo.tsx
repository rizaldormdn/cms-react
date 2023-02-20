import React from "react";

import Logo from "../atoms/Logo";
import LogoText from "../atoms/LogoText";

type Props = {};

const MainLogo = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Logo />
      <LogoText />
    </div>
  );
};

export default MainLogo;
