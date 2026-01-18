import { createContext, useState, useEffect } from "react";
import { loadCheckedBooks } from "../assets/Utils/LoadCheckedBooks";

export const BooksContext = createContext();

const JSON_URL = `${import.meta.env.BASE_URL}json/books.json`;
const STORAGE_KEY = "books";

export const BooksProvider = ({ children }) => {
	const [booksData, setBooksData] = useState({});
	const [checkedBooks, setCheckedBooks] = useState({});

	useEffect(() => {
		fetch(JSON_URL)
			.then((res) => res.json())
			.then((data) => {
				setBooksData(data);
				setCheckedBooks(loadCheckedBooks(data, STORAGE_KEY));
			})
			.catch((err) => console.error("Error loading books JSON:", err));
	}, []);

	return (
		<BooksContext.Provider
			value={{ booksData, checkedBooks, setCheckedBooks, STORAGE_KEY }}
		>
			{children}
		</BooksContext.Provider>
	);
};
