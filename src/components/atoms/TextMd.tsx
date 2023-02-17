import React from "react";

type Props = {
  title: string;
};

const Text = ({ title }: Props) => {
  return <h1 className="text-[24px] font-bold">{title}</h1>;
};

export default Text;
