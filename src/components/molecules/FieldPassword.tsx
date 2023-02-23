import React, { useState } from "react";
import { InputPassword } from "../atoms/InputPassword";

type Props = {
  placeholder: any;
};

export default function FieldPassword(props: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <p className="my-5 mx-8">
      <InputPassword
        showPassword={showPassword}
        action={handleInput}
        placeholder={props.placeholder}
      />
    </p>
  );
}
