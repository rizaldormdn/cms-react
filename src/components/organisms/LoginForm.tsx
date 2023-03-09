import React from "react";
import FormTemplate from "../templates/FormTemplate";
import Tree from "../../assets/images/Tree.svg";
import Tree3 from "../../assets/images/Tree2-1.svg";
import Mask from "../../assets/images/Mask.svg";
import FieldEmail from "../molecules/FieldEmail";
import FieldPassword from "../molecules/FieldPassword";
import Button from "../atoms/Button";
import Anchor from "../atoms/Anchor";

type LoginFormProps = {
  action: (e: React.MouseEvent) => void,
}

const LoginForm = (props: LoginFormProps) => {
  return (
    <FormTemplate
      title="Welcome to CMS Admin! 👋🏻"
      content="Please sign-in to your account and start the adventure"
      src={Tree3}
      image={Tree}
      background={Mask}
    >
      <FieldEmail />
      <FieldPassword placeholder={'Password'} />
      <div className="flex flex-row justify-between text-[14px] mx-10">
        <input type="checkbox" id="rember-me" />
        <label>Rember Me </label>
        <a href="/">Forgot Password</a>
      </div>
      <div className="mx-10">
        <Button
          title="LOGIN"
          action={(e) => props.action(e)}
        />
        <p className="text-base">New on out Platform? <Anchor internal title="Signup" url="/register" /></p>
      </div>
    </FormTemplate>
  );
};

export default LoginForm;
