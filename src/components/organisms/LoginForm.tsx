import { AxiosError } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Mask from "../../assets/images/Mask.svg";
import Tree from "../../assets/images/Tree.svg";
import Tree3 from "../../assets/images/Tree2-1.svg";
import { api } from "../../utils/api";
import Anchor from "../atoms/Anchor";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { saveLoginInfo } from "../pages/RequireAuth";
import FormTemplate from "../templates/FormTemplate";

const LoginForm = () => {
	const navigate = useNavigate();
	const { login } = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e: React.MouseEvent) => {
		e.preventDefault();
		await api
			.post("/v1/login", { email, password })
			.then(async (res) => {
				login(res.data.data.access_token, res.data.data.refresh_token);
				toast("Welcome!");
				navigate("/");
			})
			.catch((err: AxiosError) => {
				if (err.code === "400" || err.code === "404") {
					toast("Username or Password incorrect");
				} else {
					toast("Server error");
				}
			});
	};

	useEffect(() => {
		if (
			checkLogin().localAccessToken !== null &&
			checkLogin().localRefreshToken !== null
		) {
			toast("You have been authenticated");
			navigate("/login");
		}
	});

	return (
		<FormTemplate
			title="Welcome to CMS Admin! 👋🏻"
			content="Please sign-in to your account and start the adventure"
			src={Tree3}
			image={Tree}
			background={Mask}
		>
			<div className="flex p-6 w-full flex-col gap-4">
				<Input
					type="email"
					placeHolder="email"
					onchange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<Input
					type={"password"}
					placeHolder={"Password"}
					onchange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</div>
			<div className="flex flex-row justify-between text-[14px] mx-10">
				<div className="flex gap-3">
					<input type="checkbox" id="rember-me" />
					<label>Remember Me </label>
				</div>
			</div>
			<div className="flex flex-col px-5 w-full">
				<ButtonPrimary buttonStyle="w-full" action={handleLogin} title="login" />
			</div>
		</FormTemplate>
	);
};

export default LoginForm;