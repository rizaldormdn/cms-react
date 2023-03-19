import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccessPage from "./components/pages/SuccessPage";
import Login from "./components/pages/Authentication/Login";
import BadRequest from "./components/pages/BadRequest";
import RequireAuth from "./components/pages/RequireAuth";
import OnboardingPage from "./components/pages/OnboardingPage";
import MediaPage from "./components/pages/MediaPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import Register from "./components/pages/Authentication/Register";

const App = () => {
	return (
		<BrowserRouter>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<Routes>
				{/* Public Routes */}
				<Route path="/success" element={<SuccessPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />

				{/* Protected Routes */}
				<Route element={<RequireAuth />}>
					<Route path="/" element={<OnboardingPage />} />
					<Route path="article"></Route>
					<Route path="author"></Route>
					<Route path="media" element={<MediaPage />} />
				</Route>
				{/* Error Route */}
				<Route path="*" element={<BadRequest />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
