import React from "react";

type Props = {
  title: string;
};

const Text = ({ title }: Props) => {
  return <h3 className="text-[16px]">{title}</h3>;
};

export default Text;
