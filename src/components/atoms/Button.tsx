import React from "react";

type Props = {
  action: (e: React.MouseEvent) => void;
  title: string;
  buttonStyle?:string;
  css?: string;
};

const Button = (props: Props) => {
  return (
    <button
      className={`${props.buttonStyle}`}
      onClick={(e) => {
        props.action(e);
      }}
    >
      {props.title}
    </button>
  );
};

export default Button;
