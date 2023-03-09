import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Admin from "./components/pages/Admin";
import BadRequest from "./components/pages/BadRequest";
import { BrowserRouter } from "react-router-dom";
import CreateArticle from "./components/pages/CreateArticle";
import SuccessPage from "./components/pages/SuccessPage";
import Test from "./components/pages/Test";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Admin />} />
				<Route path="/test" element={<Test />} />
				<Route path="/createarticle" element={<CreateArticle />} />

				{/* Error Route */}
				<Route path="*" element={<BadRequest />} />
				<Route path="/success" element={<SuccessPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
