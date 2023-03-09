import React from "react";
import PrimaryNavbar from "../organisms/PrimaryNavbar";
import Sidebar from "../organisms/Sidebar";
import Footer from "../molecules/Footer";
import ArticleList from "../molecules/ArticleList"
import Container from "../atoms/Container";
import Login from "../pages/Login";
import Author from "../pages/Author";

type Props = {};

const AdminTemplate = (props: Props) => {
  return (
    <div className="flex flex-row-reverse min-h-screen w-full">
      <div className="flex flex-col justify-between w-full">
        <PrimaryNavbar />
        <Container>
          {/* Your content here */}
          {/* <Login />{" "} */}
          <ArticleList />
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
