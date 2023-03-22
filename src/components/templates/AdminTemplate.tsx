import PrimaryNavbar from "../organisms/PrimaryNavbar";
import Sidebar from "../organisms/Sidebar";
import Footer from "../molecules/Footer";
import Container from "../atoms/Container";

type Props = {
	children: React.ReactNode;
	pageTitle?: string;
};

const AdminTemplate = ({ children, pageTitle }: Props) => {
	return (
		<div className="flex flex-row min-h-screen w-full">
			<Sidebar />
			<div className="flex flex-col justify-between px-2 w-full">
				<PrimaryNavbar />
				<Container>
					<div className="py-4">
						<h2>{pageTitle}</h2>
						{pageTitle && <span className="block h-1 bg-slate-300 w-1/3 lg:w-1/4 rounded-full"></span>}
					</div>
					{children}
				</Container>
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
