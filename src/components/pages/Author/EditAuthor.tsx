import { useState } from "react";
import FormProfileSection from "../../organisms/FormProfileSection";
import AdminTemplate from "../../templates/AdminTemplate";

const EditAuthorPage = () => {
	const [selected, setSelected] = useState<string>("");

	const dropdownSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelected(e.target.value)
	}

	return (
		<AdminTemplate pageTitle="Edit Author">
			<div className="flex flex-col w-full">
				<FormProfileSection
					dropdownList={["admin", "member"]}
					droptdownSelectedOption={selected}
					dropdownSelectHandler={dropdownSelectHandler}
				/>
			</div>
		</AdminTemplate>
	);
};

export default EditAuthorPage;
