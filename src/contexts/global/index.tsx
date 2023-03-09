import React, { createContext, useState, useContext } from "react";
import { GlobalInitialState } from "./GlobalState";

const GlobalContext = createContext({});

type Props = {
	children: React.ReactNode;
};

export const GlobalContextProvider = (props: Props) => {
	const [activeMenu, setActiveMenu] = useState();

	return (
		<GlobalContext.Provider value={{ activeMenu, setActiveMenu }}>
			{props.children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};