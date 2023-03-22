import { useState } from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import FormProfileSection from "../../organisms/FormProfileSection";

const ProfilePage = () => {
	const [selected, setSelected] = useState<string>("");

	const dropdownSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelected(e.target.value)
	}

	return (
		<AdminTemplate pageTitle="Profile">
			<FormProfileSection
				dropdownList={["admin", "member"]}
				droptdownSelectedOption={selected}
				dropdownSelectHandler={dropdownSelectHandler}
				disableSelect
			/>
		</AdminTemplate>
	);
};

export default ProfilePage;
