import React from "react";
import { Link } from "react-router-dom";

type Props = {
	title: string;
	goTo: string;
};

const ListItem = (props: Props) => {
	return <Link to={props.goTo}>{props.title}</Link>;
};

export default ListItem;
