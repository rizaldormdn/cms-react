import AdminTemplate from "../../templates/AdminTemplate";
import Image from "../../atoms/Image";
import ButtonPrimary from "../../atoms/Buttons/ButtonPrimary";
import ButtonDanger from "../../atoms/Buttons/ButtonDanger";
import InputWithInfo from "../../molecules/inputs/InputWithInfo";
import ButtonSecondary from "../../atoms/Buttons/ButtonSecondary";

const ProfilePage = () => {
	return (
		<AdminTemplate>
			<h2>Profile</h2>
			<div className="flex flex-col w-full">
				<section className="flex w-full ">
					<figure className="bg-gray-500 rounded-md aspect-square">
						<Image alt="Profile Image" width={120} height={120} />
					</figure>
					<div className="flex flex-col justify-center gap-2">
            <div className="flex gap-4">
              <ButtonPrimary action={(e) => {}} title="upload new photo"  />
              <ButtonDanger action={(e) => {}} title="reset" />
            </div>
            <span className="text-[#3A3541AD]">Allowed JPG, GIF or PNG. Max size of 800K</span>
          </div>
				</section>
        <section className="grid grid-cols-2 gap-3">
          <InputWithInfo infoText="Username" onChange={(e) => {}} placeholder="john.doe" type="text"/>
          <InputWithInfo infoText="Fullname" onChange={(e) => {}} placeholder="Johan Doe" type="text"/>
          <InputWithInfo infoText="Email" onChange={(e) => {}} placeholder="john.doe@email.com" type="text"/>
          <InputWithInfo disabled infoText="Role" onChange={(e) => {}} placeholder="Member" type="text"/>
        </section>
				<section className="flex gap-5 py-5">
					<ButtonPrimary title="save changes" action={(e) => {}} />
					<ButtonSecondary title="cancel" action={(e) => {}} />
				</section>
			</div>
		</AdminTemplate>
	);
};

export default ProfilePage;
