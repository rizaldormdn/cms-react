import React from "react";

import Button from "../atoms/Button";

type Props = {
  statusCode: number;
  message: string;
  description: string;
  src: string;
  image?: string;
};

const ErrorTemplate = (props: Props) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F4F5FA]">
      <div className="flex flex-col h-full items-center justify-between">
        <h1 className="font-bold text-8xl font-inter text-gray-700">
          {props.statusCode}
        </h1>
        <h2 className="font-normal text-2xl font-inter  text-gray-700 text-center">
          {props.message}
        </h2>
        <p className="font-normal text-sm font-inter mt-4 text-gray-500">
          {props.description}
        </p>
        <img className="my-2" src={props.src} />
        <div className="mx-[642px] mt-[40px] w-[156px] h-[38px] text-base bg-[#9155FD] text-white py-2 px-2 text-center hover:bg-purple-600 rounded-[8px] active:scale-95">
          <Button
            title="BACK TO HOME"
            action={(e) => {
              alert("Triggered");
            }}
          />
        </div>
      </div>
      <div className="flex absolute ml-[90.07px] mt-[650px]">
        <img className="w-[88.04px] h-[190px]" src={props.image} />
      </div>
    </div>
  );
};

export default ErrorTemplate;
