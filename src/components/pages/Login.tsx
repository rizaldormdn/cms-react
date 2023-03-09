import LoginForm from "../organisms/LoginForm";
import { Adapter } from "../../utils/Adapter";
// import { useSignIn } from "react-auth-kit";
import { useState } from 'react'

const Login = () => {
	const [data, setData] = useState({});
	// const signIn = useSignIn();

	const loginHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		Adapter.post("/v1/login", data)
			.then((res) => {
				// signIn({
				// 	token: res.data.access_token,
				// 	expiresIn: 60,
				// 	refreshToken: res.data.refresh_token,
				// 	tokenType: "Bearer",
				// });
			})
			.catch((err) => {
				throw new Error(err + " At Login HTTP");
			});
	};

	return (
		<LoginForm />
	);
};

export default Login;
