import React from "react";
import LoginForm from "../organisms/LoginForm";

const Login = () => {
  const loginHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    alert("Login Handler")
  }

	return (
		<LoginForm action={(e) => {loginHandler(e)}} />
	);
};

export default Login;
