import Button from "../atoms/Button";
import Tree from "../../assets/images/Tree.png";

type Props = {
	statusCode: number;
	message: string;
	description: string;
	src: string;
};

const PageNotFound = (props: Props) => {
	return (
		<div className="flex flex-col w-full min-h-screen bg-[#F4F5FA] items-center">
			<div className="flex flex-col h-full items-center justify-between">
				<h1 className="font-bold text-8xl font-inter text-gray-700">
					{props.statusCode}
				</h1>
				<h2 className="font-normal text-2xl font-inter  text-gray-700 text-center">
					{props.message}
				</h2>
				<p className="font-normal text-sm font-inter mt-4 text-gray-500">
					{props.description}
				</p>
				<img className="my-2" src={props.src} />
				<Button
					title="back to home"
					action={(e) => {
						alert("Triggered");
					}}
				/>
			</div>
		</div>
	);
};

export default PageNotFound;
