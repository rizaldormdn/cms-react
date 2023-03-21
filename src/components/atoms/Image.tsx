import ImagePlaceHolder from "../../assets/images/ImagePlaceHolder.svg";

type Props = {
	src?: string;
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
};

const Image = (props: Props) => {
	return (
		<img
			className={props.className}
			src={props.src ? props.src : ImagePlaceHolder}
			alt={props.alt ? props.alt : "placeholder"}
			width={props.width}
			height={props.height}
		/>
	);
};

export default Image;
