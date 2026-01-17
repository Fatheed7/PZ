import { createContext, useState, useEffect } from "react";
import { loadCheckedBooks } from "../assets/Utils/LoadCheckedBooks";

export const MagazinesContext = createContext();

const JSON_URL = "/json/magazine.json";
const STORAGE_KEY = "magazines";

export const MagazinesProvider = ({ children }) => {
	const [magazinesData, setmagazinesData] = useState({});
	const [checkedMagazines, setCheckedMagazines] = useState({});

	useEffect(() => {
		fetch(JSON_URL)
			.then((res) => res.json())
			.then((data) => {
				setmagazinesData(data);
				setCheckedMagazines(loadCheckedBooks(data, STORAGE_KEY));
			})
			.catch((err) => console.error("Error loading magazines JSON:", err));
	}, []);

	return (
		<MagazinesContext.Provider
			value={{
				magazinesData,
				checkedMagazines,
				setCheckedMagazines,
				STORAGE_KEY,
			}}
		>
			{children}
		</MagazinesContext.Provider>
	);
};
