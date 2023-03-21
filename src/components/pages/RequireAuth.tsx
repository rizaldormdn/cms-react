import { Outlet, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthProvider, LoginData } from "../../contexts/AuthContext";
import { useLocalStorage } from "../../hooks/useStorage";
import UnauthorizedPage from "./Errors/UnauthorizedPage";

const UnauthorizedScene = () => {
	const navigate = useNavigate();
	toast("Unauthorized");
	setTimeout(() => {
		navigate("login");
	}, 5000);

	return <UnauthorizedPage />;
};

const RequireAuth = () => {
	const [data] = useLocalStorage<LoginData | null>("userData", null);

	return (
		<AuthProvider>{data ? <Outlet /> : <UnauthorizedScene />}</AuthProvider>
	);
};

export default RequireAuth;
