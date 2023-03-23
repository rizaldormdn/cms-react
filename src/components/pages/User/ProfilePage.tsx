import { useEffect, useState } from "react";
import AdminTemplate from "../../templates/AdminTemplate";
import FormProfileSection from "../../organisms/FormProfileSection";
import { api } from "../../../utils/api";

const ProfilePage = () => {
	const [selected, setSelected] = useState<string>("");
	const [userData, setUserData] = useState<Object>({})

	useEffect(() => {
		api.get('/v1/me', {
			headers: {
				Authorization: "Bearer"
			}
		})
	}, [])
	

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
