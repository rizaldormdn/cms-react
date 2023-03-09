import React from "react";

type props = {
  value: string
  placeHolder: string
  type: string
  style?: string
  onchange(e: React.ChangeEvent<HTMLInputElement>): void
}

export default function Input({ value, placeHolder, type, onchange, style }: props) {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeHolder}
      onChange={onchange}
      className={`px-2 py-2 border border-gray-800 focus:border-gray-400 lg:w-full md:w-full rounded-md ${style}`}
    />
  );
}
