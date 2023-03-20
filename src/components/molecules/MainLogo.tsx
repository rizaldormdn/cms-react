import React from "react";
import Logo from "../atoms/Logos/Logo";
import LogoText from "../atoms/Logos/LogoText";

const MainLogo = ({withText}: {withText?: boolean}) => {
  return (
    <div className="flex items-center gap-2">
      <Logo />
      {withText && <LogoText />}
    </div>
  );
};

export default MainLogo;
