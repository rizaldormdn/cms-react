import { Outlet, useNavigate } from "react-router";
import { toast } from "react-toastify";
import UnauthorizedPage from "./Errors/UnauthorizedPage";

export const checkLogin = () => {
	const localAccessToken: string | null = localStorage.getItem("access_token")
		? localStorage.getItem("access_token")
		: null;
	const localRefreshToken: string | null = localStorage.getItem("refresh_token")
		? localStorage.getItem("refresh_token")
		: null;

	return { localAccessToken, localRefreshToken };
};

export const saveLoginInfo = (token: string, refresh: string) => {
	localStorage.setItem("access_token", token);
	localStorage.setItem("refresh_token", refresh);
};

export const removeLoginInfo = () => {
	localStorage.removeItem("access_token");
	localStorage.removeItem("refresh_token");
};

const UnauthorizedScene = () => {
	const navigate = useNavigate();
	setTimeout(() => {
		navigate("login");
	}, 3000);

	return <UnauthorizedPage />;
};

const RequireAuth = () => {
	if (
		checkLogin().localAccessToken !== null &&
		checkLogin().localRefreshToken !== null
	) {
		return <Outlet />;
	} else {
		toast('Please login')
		return <UnauthorizedScene />;
	}
};

export default RequireAuth;
