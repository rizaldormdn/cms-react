type Props = {
	action: (e: React.MouseEvent) => void;
	title: string;
	buttonStyle?: string;
};

const ButtonPrimary = (props: Props) => {
	return (
		<button
			className="py-2 px-6 bg-[#9155fd] rounded-md text-base uppercase text-white"
			onClick={(e) => {
				props.action(e);
			}}
		>
			{props.title}
		</button>
	);
};

export default ButtonPrimary;
