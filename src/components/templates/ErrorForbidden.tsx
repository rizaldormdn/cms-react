import React from "react";
import Button from "../atoms/Button";
import Tree2 from "../../assets/images/Tree2.png";
import Forb from "../../assets/images/pose9.png";

type Props = {
  statusCode?: number;
};

const Forbidden = (props?: Props) => {
  return (
    <div className="flex flex-col w-[1440px] h-[1024px] bg-[#F4F5FA]">
      <div className="flex flex-col mx-[627.5px] w-4/12 h-full items-center">
        <h1 className="font-[500px] text-[96px] font-inter leading-[96%]  text-gray-700 text-center mt-[91px]">
          401
        </h1>
        <h2 className="font-[400px] text-[24px] font-inter  text-gray-700 text-center mt-[10px]">
          You are not authorized! 🔐
        </h2>
        <p className="font-[400px] text-[14px] font-inter mt-[10px] leading-[118%] text-gray-500">
          You don’t have permission to access this page. Go Home!
        </p>
        <div className="h-[526px] w-[196.12px] mt-[40px] mx-[621.94px]">
          <img src={Forb} />
        </div>
        <div className="mx-[642px] mt-[40px] w-[156px] h-[38px] text-base bg-[#9155FD] text-white py-2 px-2 text-center hover:bg-[#F3A200] hover:rounded-[8px] active:scale-95">
          <Button
            title="BACK TO HOME"
            action={(e) => {
              alert("Triggered");
            }}
          />
        </div>
      </div>
      <div className="flex absolute ml-[90.07px] mt-[718.92px]">
        <img className="w-[88.04px] h-[190px]" src={Tree2} />
      </div>
    </div>
  );
};

export default Forbidden;
