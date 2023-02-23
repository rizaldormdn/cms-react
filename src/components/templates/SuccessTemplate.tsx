import React from "react";
import CorrectIcon from "../../assets/icons/correct-mark.svg";
import { useNavigate } from "react-router-dom";

type Props = {
	message: string;
	description: string;
	route: string;
  timeInMiliseconds?: number;
};

const SuccessTemplate = (props: Props) => {
	const navigate = useNavigate()

	setTimeout(() => {
		navigate(props.route, { replace: true });
  }, props.timeInMiliseconds! > 0 ? props.timeInMiliseconds : 3000)

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
