import React from "react";
import FormTemplate from "../templates/FormTemplate";
import Tree from "../../assets/images/Tree.svg";
import Tree3 from "../../assets/images/Tree2-1.svg";
import Mask from "../../assets/images/Mask.svg";
import FieldEmail from "../molecules/FieldEmail";
import FieldPassword from "../molecules/FieldPassword";
import Button from "../atoms/Button";

const LoginForm = () => {
  return (
    <FormTemplate
      title="Welcome to CMS Admin! 👋🏻"
      content="Please sign-in to your account and start the adventure"
      src={Tree3}
      image={Tree}
      background={Mask}
    >
      <FieldEmail />
      <FieldPassword />
      <div className="flex flex-row justify-between text-[14px] mx-10">
        <input type="checkbox" id="rember-me" />
        <label>Rember Me </label>
        <a href="/">Forgot Password</a>
      </div>
      <div className="mt-[50px] h-[42px] mx-8 text-base bg-[#9155FD] text-white py-2 px-2 text-center hover:bg-purple-600 rounded-[8px] hover:font-bold active:scale-95 cursor-pointer">
        <Button
          title="LOGIN"
          action={(e) => {
            alert("Triggered");
          }}
        />
      </div>
    </FormTemplate>
  );
};

export default LoginForm;
