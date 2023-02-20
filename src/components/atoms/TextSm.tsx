import React from "react";

type Props = {
  title: string;
};

const Text = ({ title }: Props) => {
  return <h4 className="text-[14px]">{title}</h4>;
};

export default Text;
