import axios from "axios";

const { REACT_APP_TOKEN, REACT_APP_BASE_URL } = process.env;

export const Adapter = REACT_APP_TOKEN
	? axios.create({
			baseURL: REACT_APP_BASE_URL,
			headers: {
				Authorization: "Bearer " + REACT_APP_TOKEN,
			},
	  })
	: axios.create({
			baseURL: REACT_APP_BASE_URL,
	  });

// See the example of the usage at https://bit.ly/3SW0S97