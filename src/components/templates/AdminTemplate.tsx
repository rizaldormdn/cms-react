
import React from 'react'
import PrimaryNavbar from '../organisms/PrimaryNavbar'
import Sidebar from '../organisms/Sidebar'
import Footer from '../molecules/Footer'
import Container from '../atoms/Container'
import Login from "../pages/Login";
// =======
// import React from "react";
// import PrimaryNavbar from "../organisms/PrimaryNavbar";
// import Sidebar from "../organisms/Sidebar";
// import Footer from "../molecules/Footer";
// import Container from "../atoms/Container";
// 
// >>>>>>> 0cb19c594c230878c8ac980423b37fac25c3565b

type Props = {};

const AdminTemplate = (props: Props) => {
  return (
    <div className="flex flex-row-reverse min-h-screen w-full">
      <div className="flex flex-col justify-between w-full">
        <PrimaryNavbar />
        <Container>
          <Login />{" "}
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
