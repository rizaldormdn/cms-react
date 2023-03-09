
import Container from '../atoms/Container'
import Footer from '../molecules/Footer'
import PrimaryNavbar from '../organisms/PrimaryNavbar'
import Sidebar from '../organisms/Sidebar'

type Props = {};

const AdminTemplate = (props: Props) => {
	return (
		<div className="flex flex-row min-h-screen w-full">
			<Sidebar />
			<div className="flex flex-col justify-between pr-8 w-full">
        <PrimaryNavbar />
        <Container>
          
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
