import React from "react";
import { Link } from "react-router-dom";

type Props = {
	internal: boolean;
	url: string;
	title: string;
};

const Anchor = (props: Props) => {
	return props.internal ? (
		<Link className="hyperlink" to={props.url}>{props.title}</Link>
	) : (
		<a className="hyperlink" href={props.url} rel="noreferrer" target="_blank">{props.title}</a>
	);
};

export default Anchor;
