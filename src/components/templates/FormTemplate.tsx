import React from "react";
import MainLogo from "../molecules/MainLogo";
import TextMd from "../atoms/TextMd";
import TextSm from "../atoms/TextSm";
import TreeBackground from "../molecules/TreeBackground";

type Props = {
	children: React.ReactNode;
	fullsize?: boolean;
	src: string;
	image?: string;
	background?: string;
	title: string;
	content: string;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
};

const FormTemplate = (props: Props) => {
	return (
		<div className="flex lg:w-full  lg:flex-col justify-center items-center min-h-screen">
			<div className="flex flex-col h-fit lg:mx-auto justify-center items-center lg:w-[100%]">
				<div className="flex flex-col p-2 w-full h-full">
					<form onSubmit={props.onSubmit} className="flex flex-col w-[448px] bg-white mx-auto justify-center h-[587px] mt-0 rounded-md shadow-md  ">
						<div className="flex flex-col mb-[30px] items-center">
							<MainLogo />
						</div>
						<div className="mx-10">
							<TextMd title={props.title} />
							<TextSm title={props.content} />
						</div>
						{props.children}
					</form>
				</div>
			</div>
			<TreeBackground zIndex={100} />
		</div>
	);
};

export default FormTemplate;
