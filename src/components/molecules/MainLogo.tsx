import React from "react";
import Logo from "../atoms/Logos/Logo";
import LogoText from "../atoms/Logos/LogoText";

const MainLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Logo />
      <LogoText />
    </div>
  );
};

export default MainLogo;
