import { Outlet, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthProvider } from "../../contexts/AuthContext";
import UnauthorizedPage from "./Errors/UnauthorizedPage";

export const checkLogin = () => {
	const localAccessToken: string | undefined | null =
		localStorage.getItem("access_token");
	const localRefreshToken: string | undefined | null =
		localStorage.getItem("refresh_token");

	return { localAccessToken, localRefreshToken };
};

export const saveLoginInfo = (token: string, refresh: string) => {
	localStorage.setItem('access_token', token)
	localStorage.setItem('refresh_token', refresh)
}

export const logout = () => {
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
};

const UnauthorizedScene = () => {
	const navigate = useNavigate();
	toast("Unauthorized");
	setTimeout(() => {
		navigate("login");
	}, 5000);

	return <UnauthorizedPage />;
};

const RequireAuth = () => {
	return (
		<AuthProvider>
			{checkLogin().localAccessToken ? <Outlet /> : <UnauthorizedScene />}
		</AuthProvider>
	);
};

export default RequireAuth;
