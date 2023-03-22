import ButtonDanger from "../atoms/Buttons/ButtonDanger";
import ButtonPrimary from "../atoms/Buttons/ButtonPrimary";
import Image from "../atoms/Image";
import Avatar from "../../assets/images/Avatar.svg";
import InputWithInfo from "../molecules/inputs/InputWithInfo";
import ButtonSecondary from "../atoms/Buttons/ButtonSecondary";
import CDropdown from "../atoms/CDropdown";

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

const FormProfileSection = ({
	uploadHandler,
	resetHandler,
	avatarSource,
	saveHandler,
	cancelHandler,
	disableSelect,
	emailChangeHandler,
	dropdownList,
	dropdownSelectHandler,
	droptdownSelectedOption,
	firstNameChangeHandler,
	lastNameChangeHandler,
	passwordChangeHandler,
	userNameChangeHandler,
}: Props) => {

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
				/>
				<InputWithInfo
					infoText="Username"
					onChange={userNameChangeHandler!}
					placeholder="john.doe"
					type="text"
				/>
				<InputWithInfo
					infoText="Firstname"
					onChange={firstNameChangeHandler!}
					placeholder="Johan"
					type="text"
				/>
				<InputWithInfo
					infoText="Lastname"
					onChange={lastNameChangeHandler!}
					placeholder="Doe"
					type="text"
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
