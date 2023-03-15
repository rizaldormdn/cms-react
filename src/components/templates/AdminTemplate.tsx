import PrimaryNavbar from "../organisms/PrimaryNavbar";
import Sidebar from "../organisms/Sidebar";
import Footer from "../molecules/Footer";
import Container from "../atoms/Container";

type Props = {
	children: React.ReactNode;
};

const AdminTemplate = (props: Props) => {
	return (
		<div className="flex flex-row min-h-screen w-full">
			<Sidebar />
			<div className="flex flex-col justify-between pr-8 w-full">
				<PrimaryNavbar />
				<Container>{props.children}</Container>
				<Footer
					established={false}
					author="Salt Academy"
					authorLink="https://saltacademy.id"
				/>
			</div>
		</div>
	);
};

export default AdminTemplate;
