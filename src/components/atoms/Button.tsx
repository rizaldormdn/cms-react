import React from "react";

type Props = {
  action: (e: React.MouseEvent) => void;
  title: string;
};

const Button = (props: Props) => {
  return (
    <button
      onClick={(e) => {
        props.action(e);
      }}
    >
      {props.title}
    </button>
  );
};

export default Button;
