import React from "react";

type Props = {
  src: any;
  alt?: string;
  width?: any;
  height?: any;
};

const Image = (props: Props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};

export default Image;
