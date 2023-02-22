import React from "react";
import CorrectIcon from "../../assets/icons/correct-mark.svg";

type Props = {
	message: string;
	description: string;
};

const SuccessTemplate = (props: Props) => {
	return (
		<main className="flex flex-col-reverse w-full h-screen justify-center items-center">
			<div className="flex flex-col items-center">
				<h2 className="text-7xl font-bold">{props.message}</h2>
				<p>{props.description}</p>
			</div>
			<img src={CorrectIcon} width={300} alt="Success" />
		</main>
	);
};

export default SuccessTemplate;
