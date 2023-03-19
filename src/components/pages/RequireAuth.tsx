import { Outlet, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Unauthorized from "./Unauthorized";
import { AuthProvider, LoginData } from "../../contexts/AuthContext";
import { useLocalStorage } from "../../hooks/useStorage";

const UnauthorizedScene = () => {
	const navigate = useNavigate();
	toast("Unauthorized");
		setTimeout(() => {
			navigate("login");
		}, 5000);
	
	return <Unauthorized />;
};

const RequireAuth = () => {
	const [data ] = useLocalStorage<LoginData | null>("userData", null);

	return (
		<AuthProvider>
			{data ? <Outlet /> : <UnauthorizedScene />}
		</AuthProvider>
	);
};

export default RequireAuth;
