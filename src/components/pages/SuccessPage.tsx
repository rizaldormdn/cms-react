import React from "react";
import SuccessTemplate from "../templates/SuccessTemplate";

const SuccessPage = () => {

	return (
		<SuccessTemplate
			route="/"
			message="Success Create new Article!"
			description="Redirect to previous page"
		/>
	);
};

export default SuccessPage;
