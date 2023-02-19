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
    <div className="flex lg:w-full  lg:flex-col justify-center items-center h-screen -mt-20">
      <div className="flex flex-col h-fit lg:mx-auto justify-center items-center lg:w-[100%]">
        <div className="flex flex-col p-2 w-full h-full">
          <form
            method="submit"
            className="flex flex-col w-[448px] bg-white mx-auto justify-center h-[587px] mt-0 rounded-md shadow-md  "
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
      <div className="absolute bottom-0 md:bottom-0 w-[100%]">
        <div className="absolute ">
          {" "}
          <img
            className="lg:w-[245.83px] lg:h-[184.53px] md:w-[125px] md:h-[95px]"
            src={props.src}
          />
        </div>
        <div className="absolute lg:right-20 lg:bottom-32 md:bottom-12 md:right-20">
          <img
            className="lg:w-[88.04px] lg:h-[190px] md:w-[50px] md:h-[100px]"
            src={props.image}
          />
        </div>
        <div className="-z-50 mx-auto bg-cover lg:w-full">
          <img className="lg:w-[100%] md:w-[100%]" src={props.background} />
        </div>
      </div>
    </div>
  );
};

export default FormTemplate;
