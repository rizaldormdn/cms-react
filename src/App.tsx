import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/pages/Admin";
import Author from "./components/pages/Author";
import BadRequest from "./components/pages/BadRequest";
import CreateArticle from "./components/pages/CreateArticle";
import Login from "./components/pages/Login";
import SuccessPage from "./components/pages/SuccessPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Admin />} />
				<Route path="/s" element={<Author />} />
				<Route path="/createarticle" element={<CreateArticle />} />
				<Route path="/login" element={<Login />} />
				
				{/* Error Route */}
				<Route path="*" element={<BadRequest />} />
				<Route path="/success" element={<SuccessPage />} />
			</Routes >
		</BrowserRouter>
	);
};

export default App;
