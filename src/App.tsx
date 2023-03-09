import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/organisms/RegistrationForm";
import Admin from "./components/pages/Admin";
import BadRequest from "./components/pages/BadRequest";
import CreateArticle from "./components/pages/CreateArticle";
import Login from "./components/pages/Login";
import SuccessPage from "./components/pages/SuccessPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Admin />} />
				<Route path="/createarticle" element={<CreateArticle />} />
				
				{/* Error Route */}
				<Route path="*" element={<BadRequest />} />
				<Route path="/success" element={<SuccessPage />} />
				<Route path="/registrasi" element={<RegistrationForm />} />
				<Route path="/login" element={<Login />} />
			</Routes >
		</BrowserRouter>
	);
};

export default App;
