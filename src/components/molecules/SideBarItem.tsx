import { Link } from "react-router-dom";

type Props = {
	goTo: string;
	title: string;
	src: string | any;
};

const SideBarItem = ({ goTo, title, src }: Props) => {

	return (
		<Link
			className={`flex gap-2 py-2 px-6 bg-gray-300 rounded-r-3xl text-base uppercase text-white hover:bg-[#9155fd] focus:bg-[#9155fd]`}
			to={goTo}
		>
			{src}
			{title}
		</Link>
	);
};

export default SideBarItem;
