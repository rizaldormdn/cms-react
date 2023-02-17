import React from "react";
import MainLogo from "../molecules/MainLogo";
import TextMd from "../atoms/TextMd";
import TextSm from "../atoms/TextSm";

type Props = {
  children: React.ReactNode;
  fullsize?: boolean;
  src: string;
  image?: string;
  background?: string;
  title: string;
  content: string;
};

const FormTemplate = (props: Props) => {
  return (
    <div className="w-full flex bg-[#F4F5FA] relative h-fit">
      <div className="flex flex-col h-fit mx-auto my-auto justify-center items-center">
        <div className="flex flex-col bg-white p-2 w-full h-full">
          <form
            method="submit"
            className="flex flex-col w-[448px] mx-auto justify-center h-[587px] mt-0 rounded-md shadow-md  "
          >
            <div className="flex flex-col mb-[30px] items-center">
              <MainLogo />
            </div>
            <div className="ml-10">
              <TextMd title={props.title} />
              <TextSm title={props.content} />
            </div>
            {props.children}
          </form>
        </div>
      </div>
      <div className="flex absolute ml-[30px] mt-[700px]">
        <img className="w-[245.83px] h-[184.53px]" src={props.src} />
      </div>
      <div className="flex absolute ml-[1250px] mt-[635px]">
        <img className="w-[88.04px] h-[190px]" src={props.image} />
      </div>
      <div className="flex absolute mt-[751px] -z-50 mx-auto">
        <img className="w-full h-[172px]" src={props.background} />
      </div>
    </div>
  );
};

export default FormTemplate;
