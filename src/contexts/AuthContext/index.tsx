import React, { createContext, useContext, useState } from "react";

// Define the types for the user object and the login function
type User = {
	name: string;
};

export type LoginData = {
	user: User;
	token: string;
	refreshToken: string;
};

type AuthContextType = {
	user: User | null;
	token: string | null;
	refreshToken: string | null;
	login: (userData: LoginData) => void;
	logout: () => void;
};

// Create the AuthContext
export const AuthContext = createContext<AuthContextType>({
	user: null,
	token: null,
	refreshToken: null,
	login: () => {},
	logout: () => {},
});

// Create a custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);

// Create the AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	// Set up state to store the user and token
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [refreshToken, setRefreshToken] = useState<string | null>(null);

	// Create a function to update the user and token
	const login = (userData: LoginData) => {
		setUser(userData.user);
		setToken(userData.token);
		setRefreshToken(userData.refreshToken);
	};

	// Create a function to clear the user and token
	const logout = () => {
		setUser(null);
		setToken(null);
		setRefreshToken(null);
	};

	return (
		<AuthContext.Provider value={{ user, token, login, logout, refreshToken }}>
			{children}
		</AuthContext.Provider>
	);
};
