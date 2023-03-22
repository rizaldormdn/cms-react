type ButtonProps = {
	action: (e: React.MouseEvent) => void;
	title: string;
	buttonStyle?: string;
	type?: "PRIMARY" | "SECONDARY" | "WARNING" | "INFO" | "DANGER";
};

const Button = (props: ButtonProps) => {
	return (
		<button
			className={`${props.buttonStyle}`}
			onClick={(e) => {
				props.action(e);
			}}
		>
			{props.title}
		</button>
	);
};

export default Button;
