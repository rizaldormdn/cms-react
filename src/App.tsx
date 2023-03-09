import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Admin from "./components/pages/Admin";
import BadRequest from "./components/pages/BadRequest";
import { BrowserRouter } from "react-router-dom";
import CreateArticle from "./components/pages/CreateArticle";
import SuccessPage from "./components/pages/SuccessPage";
import Test from "./components/pages/Test";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Admin />} />
				{/* <Route path="/test" element={<Test />} /> */}
				{/* <Route path="/createarticle" element={<CreateArticle />} /> */}
				<Route path="/success" element={<SuccessPage />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/login" element={<Login />} />


				{/* Error Route */}
				<Route path="*" element={<BadRequest />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
