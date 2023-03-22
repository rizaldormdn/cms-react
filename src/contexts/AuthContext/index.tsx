import React, { createContext, useContext, useEffect, useState } from "react";

// Define the types for the user object and the login function
export type LoginData = {
	access_token: string;
	refresh_token: string;
};

type AuthContextType = {
	access_token: string | null;
	refresh_token: string | null;
	login: (userData: LoginData) => void;
	logout: () => void;
};

// Create the AuthContext
export const AuthContext = createContext<AuthContextType>({
	access_token: null,
	refresh_token: null,
	login: () => {},
	logout: () => {},
});

// Create a custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);

// Create the AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [access_token, setToken] = useState<string | null>(null);
	const [refresh_token, setRefreshToken] = useState<string | null>(null);

	// Create a function to update the user and token
	const login = (userData: LoginData) => {
		console.log(userData, "From context");

		setToken(userData.access_token);
		setRefreshToken(userData.refresh_token);
	};

	// Create a function to clear the user and token
	const logout = () => {
		// setUser(null);
		setToken(null);
		setRefreshToken(null);
	};

	return (
		<AuthContext.Provider
			value={{ access_token, login, logout, refresh_token }}
		>
			{children}
		</AuthContext.Provider>
	);
};
