import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccessPage from "./components/pages/SuccessPage";
import Login from "./components/pages/Authentication/Login";
import RequireAuth from "./components/pages/RequireAuth";
import OnboardingPage from "./components/pages/OnboardingPage";
import MediaPage from "./components/pages/MediaPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Register from "./components/pages/Authentication/Register";
import ProfilePage from "./components/pages/User/ProfilePage";
import NotFoundPage from "./components/pages/Errors/NotFoundPage";
import CreateAuthorPage from "./components/pages/Author/CreateAuthor";
import CreateArticlePage from "./components/pages/Article/CreateArticlePage";
import EditArticlePage from "./components/pages/Article/EditArticlePage";
import EditAuthorPage from "./components/pages/Author/EditAuthor";
import Logout from "./components/pages/Authentication/Logout";
import List from './components/pages/Product/List'

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
				<Route path="/logout" element={<Logout />} />

				{/* Protected Routes */}
				<Route element={<RequireAuth />}>
					<Route index element={<OnboardingPage />} />
					<Route path="article">
						{/* <Route index element={<CreateArticlePage />} /> */}
						{/* <Route path="edit" element={<EditArticlePage />} /> */}
					</Route>
					<Route path="author">
						<Route index element={<CreateAuthorPage />} />
						<Route path="edit" element={<EditAuthorPage />} />
					</Route>
					<Route path="product">
						<Route index element={<List />}/>
					</Route>
					<Route path="media" element={<MediaPage />} />
					<Route path="profile" element={<ProfilePage />} />
				</Route>

				{/* Error Route */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
