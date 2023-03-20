import React from "react";

type props = {
  value?: string
  placeHolder?: string
  type?:
		| "button"
		| "checkbox"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "radio"
		| "range"
		| "reset"
		| "search"
		| "submit"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week"
  style?: string
  onchange(e: React.ChangeEvent<HTMLInputElement>): void
	disabled?: boolean
}

export default function Input({ value, placeHolder, type, onchange, style, disabled }: props) {
  return (
    <input
			disabled={disabled && disabled}
      defaultValue={value}
      type={type}
      placeholder={placeHolder}
      onChange={onchange}
      className={`px-2 py-2 border-2 border-gray-400 focus:outline-none focus:border-[#9155FD] lg:w-full md:w-full rounded-md disabled:bg-gray-200 ${style}`}
    />
  );
}
