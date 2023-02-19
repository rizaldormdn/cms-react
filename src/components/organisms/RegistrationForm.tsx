import React from "react";
import FormTemplate from "../templates/FormTemplate";
import Tree from "../../assets/images/Tree.svg";
import Tree3 from "../../assets/images/Tree2-1.svg";
import Mask from "../../assets/images/Mask.svg";
import FieldUsername from "../molecules/FieldUserName";
import FieldEmail from "../molecules/FieldEmail";
import FieldPassword from "../molecules/FieldPassword";
import Button from "../atoms/Button";

const RegistrationForm = () => {
  return (
    <FormTemplate
      title="Adventure starts here 🚀"
      content="Make your app management easy and fun!"
      src={Tree3}
      image={Tree}
      background={Mask}
    >
      <FieldUsername />
      <FieldEmail />
      <FieldPassword />
      <div className="mt-[50px] h-[42px] lg:mx-8 md:mx-8 text-base bg-[#9155FD] text-white py-2 px-2 text-center lg:hover:bg-purple-600 rounded-[8px] lg:hover:font-bold active:scale-95 cursor-pointer">
        <Button
          title="REGISTER"
          action={(e) => {
            alert("Triggered");
          }}
        />
      </div>
      <div className="flex flex-row gap-3 items-center mx-auto mt-[28px]">
        <p className="text-[16px]">
          Already have an account?
          <a href="/"> Sign in instead</a>
        </p>
      </div>
    </FormTemplate>
  );
};

export default RegistrationForm;
