type Props = {
	action: (e: React.MouseEvent) => void;
	title: string;
	buttonStyle?: string;
};

const ButtonDanger = (props: Props) => {
	return (
		<button
			className="py-2 px-6 border-[#FF4C51] border-2 rounded-md text-base uppercase text-[#FF4C51]"
			onClick={(e) => {
				props.action(e);
			}}
		>
			{props.title}
		</button>
	);
};

export default ButtonDanger;
