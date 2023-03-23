import { useNavigate } from "react-router-dom";
import Container from "../../atoms/Container";
import { removeLoginInfo } from "../RequireAuth";
import { useEffect } from "react";

const Logout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		removeLoginInfo();
		navigate("/login");
	});

	return <Container>Logout...</Container>;
};

export default Logout;
