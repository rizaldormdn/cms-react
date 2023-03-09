import React from "react";

type Props = {
	placeHolder: string;
	inputStyle?: string;
	style?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: Props) => {
	return (
		<div className={`${props.style}`}>
			<input
				className={`px-2 py-2 border border-gray-400 focus:border-gray-500 lg:w-full md:w-full rounded-md ${props.style}`}
				placeholder={`${props.placeHolder}`}
        onChange={(e) => {props.onChange(e)}}
			/>
		</div>
	);
};

export default Input;
