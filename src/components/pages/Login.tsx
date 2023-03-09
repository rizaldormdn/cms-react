import React, { useState } from "react";
import LoginForm from "../organisms/LoginForm";
import { Adapter } from "../../utils/Adapter";
import { useSignIn } from "react-auth-kit";

const Login = () => {
	const [data, setData] = useState({});
	const signIn = useSignIn();

	const loginHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		Adapter.post("/v1/login", data)
			.then((res) => {
				signIn({
					token: res.data.access_token,
          expiresIn: 60,
					refreshToken: res.data.refresh_token,
					tokenType: "Bearer",
				});
			})
			.catch((err) => {
				throw new Error(err + " At Login HTTP");
			});
	};

	return (
		<LoginForm
			action={(e) => {
				loginHandler(e);
			}}
		/>
	);
};

export default Login;
