import React, {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
import {
	checkLogin,
	removeLoginInfo,
	saveLoginInfo,
} from "../../components/pages/RequireAuth";

// Define the types for the user object and the login function
export type LoginData = {
	access_token: string;
	refresh_token: string;
};

export type AuthContextType = {
	access_token: string | null;
	refresh_token: string | null;
	login: (access_token: string, refresh_token: string) => void;
	logout: () => void;
};

const initialAuthState = {
	access_token: null,
	refresh_token: null,
	login: () => {},
	logout: () => {},
};

// Create the AuthContext
export const AuthContext = createContext<AuthContextType>(initialAuthState);

// Create the AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState<string | null>("");
	const [refreshToken, setRefreshToken] = useState<string | null>("");

	// Create a function to update the user and token
	const login = async (access_token: string, refresh_token: string) => {
		setToken(access_token);
		setRefreshToken(refreshToken);
		saveLoginInfo(access_token, refresh_token);
	};

	// Create a function to clear the user and token
	const logout = () => {
		setToken(null);
		setRefreshToken(null);
		removeLoginInfo();
	};

	useEffect(() => {}, []);

	return (
		<AuthContext.Provider
			value={{
				access_token: token,
				login,
				logout,
				refresh_token: refreshToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

// Create a custom hook to access the AuthContext
export const useAuth = () => {
	return useContext(AuthContext);
};
