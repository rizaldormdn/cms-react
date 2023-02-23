import React from "react";

type Props = {
  action: (e: React.MouseEvent) => void;
  title: string;
};

const Button = (props: Props) => {
  return (
    <button
      className="w-full h-[42px] text-base bg-[#9155FD] text-white py-2 px-2 text-center hover:bg-purple-600 rounded-[8px] hover:font-bold active:scale-95 cursor-pointer"
      onClick={(e) => {
        props.action(e);
      }}
    >
      {props.title}
    </button>
  );
};

export default Button;
