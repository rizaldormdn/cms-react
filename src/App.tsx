import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/pages/Admin";
import SuccessPage from "./components/pages/SuccessPage";
import Registration from "./components/pages/Registration";
import Login from "./components/pages/Login";
import BadRequest from "./components/pages/BadRequest";


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Admin />} />
				<Route path="/success" element={<SuccessPage />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/login" element={<Login />} />

				{/* Protected Routes */}
				

				{/* Error Route */}
				<Route path="*" element={<BadRequest />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
