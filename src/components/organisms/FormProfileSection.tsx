import ButtonDanger from "../atoms/Buttons/ButtonDanger";
import ButtonPrimary from "../atoms/Buttons/ButtonPrimary";
import Image from "../atoms/Image";
import Avatar from "../../assets/images/Avatar.svg";
import InputWithInfo from "../molecules/inputs/InputWithInfo";
import ButtonSecondary from "../atoms/Buttons/ButtonSecondary";
import CDropdown from "../atoms/CDropdown";
import axios from "axios";
import { useEffect, useState } from "react";
import { checkLogin } from "../pages/RequireAuth";
import { api } from "../../utils/api";

type Props = {
	uploadHandler?: (e: React.MouseEvent<Element, MouseEvent>) => void;
	resetHandler?: (e: React.MouseEvent<Element, MouseEvent>) => void;
	saveHandler?: (e: React.MouseEvent<Element, MouseEvent>) => void;
	cancelHandler?: (e: React.MouseEvent<Element, MouseEvent>) => void;
	avatarSource?: string;
	disableSelect?: boolean;
	dropdownList: string[];
	droptdownSelectedOption: string;
	dropdownSelectHandler?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	emailChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	userNameChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	firstNameChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	lastNameChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	passwordChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
type Profile = {
	email: string
	name: {
		first: string
		full: string
		last: string
	}
}

const FormProfileSection = ({
	uploadHandler,
	resetHandler,
	saveHandler,
	avatarSource,
	cancelHandler,
	disableSelect,
	emailChangeHandler,
	dropdownList,
	dropdownSelectHandler,
	droptdownSelectedOption,
	passwordChangeHandler,
	userNameChangeHandler,
	firstNameChangeHandler,
	lastNameChangeHandler
}: Props) => {
	const { localAccessToken } = checkLogin()

	const [profile, setProfile] = useState<Profile>()

	const handleProfile = async () => {
		await api.get("/v1/me", {
			headers: {
				Authorization: `Bearer ${localAccessToken}`
			}
		}).then((res) => {
			setProfile(res.data.data.user)
			console.log
				(res.data.data.user)
		}).catch((err) => {
			console.error(err);
		})
	}

	useEffect(() => {
		handleProfile()
	}, [])

	return (
		<>
			<section className="flex w-full gap-5">
				<figure className="bg-gray-500 rounded-md aspect-square">
					<Image
						className="aspect-square"
						src={avatarSource ? avatarSource : Avatar}
						alt="Profile Image"
						width={120}
						height={120}
					/>
				</figure>
				<div className="flex flex-col justify-center gap-2">
					<div className="flex gap-4">
						<ButtonPrimary action={uploadHandler!} title="upload new photo" />
						<ButtonDanger action={resetHandler!} title="reset" />
					</div>
					<span className="text-[#3A3541AD]">
						Allowed JPG, GIF or PNG. Max size of 800K
					</span>
				</div>
			</section>
			<form className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 items-end">
				<InputWithInfo
					infoText="Email"
					onChange={emailChangeHandler!}
					placeholder="john.doe@email.com"
					type="email"
					value={profile?.email}
				/>
				<InputWithInfo
					infoText="Username"
					onChange={userNameChangeHandler!}
					placeholder="john.doe"
					type="text"
					value={profile?.name.full}
				/>
				<InputWithInfo
					infoText="Firstname"
					onChange={firstNameChangeHandler!}
					placeholder="Johan"
					type="text"
					value={profile?.name.first}
				/>
				<InputWithInfo
					infoText="Lastname"
					onChange={lastNameChangeHandler!}
					placeholder="Doe"
					type="text"
					value={profile?.name.last}
				/>
				<InputWithInfo
					infoText="Password"
					onChange={passwordChangeHandler!}
					placeholder="******"
					type="password"
				/>
				<CDropdown
					selectedOption={droptdownSelectedOption}
					onSelectHandler={dropdownSelectHandler!}
					options={dropdownList}
					isDisabled={disableSelect && disableSelect}
				/>
			</form>
			<section className="flex gap-5 py-5">
				<ButtonPrimary title="save changes" action={saveHandler!} />
				<ButtonSecondary title="cancel" action={cancelHandler!} />
			</section>
		</>
	);
};

export default FormProfileSection;
