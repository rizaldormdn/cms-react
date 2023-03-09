export type GlobalTypeState = {
	chat?: boolean;
	cart?: boolean;
	userProfile: boolean;
	notifications: boolean;
};

export const GlobalInitialState: GlobalTypeState = {
	userProfile: false,
	notifications: false,
	cart: false,
	chat: false,
};
