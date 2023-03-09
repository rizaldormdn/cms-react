import React from "react";
import FormTemplate from "../templates/FormTemplate";
import Tree from "../../assets/images/Tree.svg";
import Tree3 from "../../assets/images/Tree2-1.svg";
import Mask from "../../assets/images/Mask.svg";
import Button from "../atoms/Button";
import Anchor from "../atoms/Anchor";

const RegistrationForm = () => {
	return (
		<FormTemplate
			title="Adventure starts here 🚀"
			content="Make your app management easy and fun!"
			src={Tree3}
			image={Tree}
			background={Mask}
		>
			{/* <FieldUsername />
			<FieldEmail />
			<FieldPassword placeholder="Password" /> */}
			<div className="mx-10">
				<Button
					title="REGISTER"
					action={(e) => {
						alert("Triggered");
					}}
				/>
				<p className="text-base">
					Already have an account?
					<Anchor internal title=" Sign in instead" url="/login" />
				</p>
			</div>
			<div className="flex flex-row gap-3 items-center mx-auto mt-[28px]"></div>
		</FormTemplate>
	);
};

export default RegistrationForm;
