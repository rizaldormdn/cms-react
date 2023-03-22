type Props = {
	action: (e: React.MouseEvent) => void;
	title: string;
	buttonStyle?: string;
};

const ButtonSecondary = (props: Props) => {
	return (
		<button
			className="py-2 px-6 border-2 border-[#9155fd] rounded-md text-base uppercase text-[#9155fd]"
			onClick={(e) => {
				props.action(e);
			}}
		>
			{props.title}
		</button>
	);
};

export default ButtonSecondary;
