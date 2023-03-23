type Props = {
	action: (e: React.MouseEvent) => void;
	title: string;
	buttonStyle?: string;
};

const ButtonPrimary = (props: Props) => {
	return (
		<button
			className={`py-2 px-6 bg-[#9155fd] hover:bg-white rounded-md text-base uppercase text-white hover:text-[#9155fd] border-[#9155fd] border-2 duration-300 ${props.buttonStyle}`}
			onClick={(e) => {
				props.action(e);
			}}
		>
			{props.title}
		</button>
	);
};

export default ButtonPrimary;
