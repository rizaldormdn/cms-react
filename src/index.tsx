import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-auth-kit";
import { GlobalContextProvider } from "./contexts/global";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<GlobalContextProvider>
			<AuthProvider
				authType="cookie"
				authName="auth"
				cookieDomain={window.location.host}
				cookieSecure={window.location.protocol === "http:"}
			>
				<App />
			</AuthProvider>
		</GlobalContextProvider>
	</React.StrictMode>
);

reportWebVitals();
