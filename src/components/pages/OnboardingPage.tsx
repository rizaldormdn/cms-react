import AdminTemplate from "../templates/AdminTemplate";
import CoffeBreak from "../../assets/images/CoffeBreak.png";
import Image from "../atoms/Image";

const OnboardingPage = () => {
	return (
		<AdminTemplate>
			<main className="grid grid-cols-1 lg:grid-cols-2 w-full h-full justify-center items-center">
				<section className="flex flex-col items-center text-center">
					<h2>Welcome!</h2>
					<p>Now you cant start managing your content</p>
					<p>Happy content!</p>
				</section>
				<section className="flex flex-col justify-center items-center h-full bg-gradient-to-t lg:bg-gradient-to-l from-purple-500">
					<Image src={CoffeBreak} />
				</section>
			</main>
		</AdminTemplate>
	);
};

export default OnboardingPage;
