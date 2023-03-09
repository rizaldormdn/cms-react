import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/global";
import AdminTemplate from "../templates/AdminTemplate";

const Test = () => {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		await axios
			.get(
				"https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd"
			)
			.then((res) => setData(res.data))
			.catch((err) => {
				throw new Error(err + " at Test.tsx");
			});
	};

	return (
		<AdminTemplate />
	);
};

export default Test;
