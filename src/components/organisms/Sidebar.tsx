import React from "react";
import ListItem from "../atoms/ListItem";
import Header from "../molecules/Header";

type Props = {};

const Sidebar = (props: Props) => {
	const listItems = [
		{ title: "Blogs", goTo: "/blogs" },
		{ title: "Pages", goTo: "/pages" },
		{ title: "Products", goTo: "/products" },
	];

	return (
		<aside className="flex flex-col min-h-screen">
			<Header siteTitle="Materio" />
			{listItems.map((value, index) => {
				return <ListItem key={index} goTo={value.goTo} title={value.title} />;
			})}
		</aside>
	);
};

export default Sidebar;
