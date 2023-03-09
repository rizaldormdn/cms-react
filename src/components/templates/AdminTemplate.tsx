
import Container from '../atoms/Container'
import Footer from '../molecules/Footer'
import PrimaryNavbar from '../organisms/PrimaryNavbar'
import Sidebar from '../organisms/Sidebar'

type Props = {};

const AdminTemplate = (props: Props) => {
  return (
    <div className="flex flex-row-reverse min-h-screen w-full">
      <div className="flex flex-col justify-between w-full">
        <PrimaryNavbar />
        <Container>
          
        </Container>
        <Footer
          established={false}
          author="Salt Academy"
          authorLink="https://saltacademy.id"
        />
      </div>
      <div className="flex flex-col w-1/5">
        <Sidebar />
      </div>
    </div>
  );
};

export default AdminTemplate;
