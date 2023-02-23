import React from "react";
import Tree from "../../assets/images/Tree.svg";
import Tree3 from "../../assets/images/Tree2-1.svg";
import Mask from "../../assets/images/Mask.svg";

const TreeBackground = ({zIndex}: {zIndex?: number}) => {
	return (
		<div className={`absolute bottom-0 md:bottom-0 w-[100%] -z-10`}>
			<div className="absolute ">
				<img
					className="lg:w-[245.83px] lg:h-[184.53px] md:w-[125px] md:h-[95px]"
					src={Tree3}
					alt=""
				/>
			</div>
			<div className="absolute lg:right-20 lg:bottom-32 md:bottom-12 md:right-20">
				<img
					className="lg:w-[88.04px] lg:h-[190px] md:w-[50px] md:h-[100px]"
					src={Tree}
				/>
			</div>
			<div className="mx-auto bg-cover lg:w-full">
				<img className="lg:w-[100%] md:w-[100%]" src={Mask} />
			</div>
		</div>
	);
};

export default TreeBackground;
