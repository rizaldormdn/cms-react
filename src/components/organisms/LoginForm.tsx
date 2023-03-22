import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mask from "../../assets/images/Mask.svg";
import Tree from "../../assets/images/Tree.svg";
import Tree3 from "../../assets/images/Tree2-1.svg";
import { api } from "../../utils/api";
import Anchor from "../atoms/Anchor";
import Button from "../atoms/Button";
import FormTemplate from "../templates/FormTemplate";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Input from "../atoms/Input";
import { saveLoginInfo } from "../pages/RequireAuth";

const LoginForm = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e: React.MouseEvent) => {
		e.preventDefault();
		await api
			.post("/v1/login", { email, password })
			.then((res) => {
				saveLoginInfo(res.data.data.access_token, res.data.data.refresh_token)
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

	return (
		<FormTemplate
			title="Welcome to CMS Admin! 👋🏻"
			content="Please sign-in to your account and start the adventure"
			src={Tree3}
			image={Tree}
			background={Mask}
		>
			<div className="flex p-6 w-full md:flex-col gap-4">
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
				{/* <a href="/">Forgot Password</a> */}
			</div>
			<div className="mx-10">
				<Button
					title="LOGIN"
					action={(e) => {
						handleLogin(e);
					}}
				/>
				<p className="text-base">
					New on out Platform?{" "}
					<Anchor internal title="Signup" url="/register" />
				</p>
			</div>
			<div></div>
		</FormTemplate>
	);
};

export default LoginForm;