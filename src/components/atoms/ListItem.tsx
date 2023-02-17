import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type Props = {
	src: ReactElement,
	title: string,
	goTo: string
};

const ListItem = (props: Props) => {
	return (
	<div className={`flex items-center mt-[15px] mr-[50px] rounded-full p-[8px 14px 8px 21px] cursor-pointer bg-slate-300 hover:bg-white  px-12 py-2 ml-[-40px] text-black text-sm  w-[100%] h-[42px]  gap-x-4 duration-300`}>
		<Link to={props.goTo}><span className={`mr-2 text-black`}>{props.src}</span><span className={`text-black responsive-1`}>{props.title}</span></Link>
	</div>
	)
};

export default ListItem;
