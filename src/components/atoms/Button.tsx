import React from "react";

type Props = {
	action: (e: React.MouseEvent) => void;
  title: string;
};

const Button = (props: Props) => {
	return (
		<button
			className="flex items-center justify-between gap-1 font-semibold bg-[#9155FD] p-3 uppercase hover:bg-[#854EE8] rounded-md"
			onClick={(e) => {
				props.action(e);
			}}
		>
			{props.title}
		</button>
	);
};

export default Button;
