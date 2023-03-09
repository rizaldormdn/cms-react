import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Admin from "./components/pages/Admin";
import BadRequest from "./components/pages/BadRequest";
import { BrowserRouter } from "react-router-dom";
import Registration from "./components/pages/Registration";
import CreateArticle from "./components/pages/CreateArticle";
import SuccessPage from "./components/pages/SuccessPage";
import Author from "./components/pages/Author";
import Test from "./components/pages/Test";
import Sidebar from "./components/organisms/Sidebar";
import PrimaryNavbar from "./components/organisms/PrimaryNavbar";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* <div className="flex flex-row min-h-screen w-full"> */}
				{/* Sidebar */}
				{/* <div className="flex flex-col justify-between pr-8"> */}
					{/* <Sidebar /> */}
				{/* </div> */}
				{/* Content */}
				{/* <div className="flex flex-col w-full"> */}
					{/* <PrimaryNavbar /> */}
					{/* <Routes> */}
						{/* <Route path="/" element={<Admin />} /> */}
						{/* <Route path="/test" element={<Test />} /> */}
						{/* <Route path="/createarticle" element={<CreateArticle />} /> */}

						{/* Error Route */}
						{/* <Route path="*" element={<BadRequest />} /> */}
						{/* <Route path="/success" element={<SuccessPage />} /> */}
					{/* </Routes> */}
				{/* </div> */}
			{/* </div> */}
				<Route path="/test" element={<Test />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
