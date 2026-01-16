import { useState, useEffect, useContext } from "react";
import { ROMAN_1_TO_5 } from "../../assets/Utils/Constants";
import { encodeBools, decodeBools } from "../../assets/Utils/EncodeDecodeBools";
import { handleCheckboxChange } from "../../assets/Utils/HandleCheckboxChange";
import { loadCheckedBooks } from "../../assets/Utils/LoadCheckedBooks";
import { BooksContext } from "../../contexts/BooksContext";

const JSON_URL = "/json/books.json";
const STORAGE_KEY = "books";

const BookList = () => {
	const { booksData, checkedBooks, setCheckedBooks, STORAGE_KEY } =
		useContext(BooksContext);

	return (
		<div className="p-12 max-w-6xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">Book List</h1>

			<div className="grid">
				{Object.keys(booksData).map((category) => (
					<div key={category} className="col-12 md:col-6 p-3">
						<h2 className="text-2xl font-semibold mb-2">{category}</h2>

						<ul className="ml-2">
							{booksData[category].map((book, index) => (
								<li key={index} className="mb-1">
									<label className="flex align-items-center gap-2 text-left">
										<input
											type="checkbox"
											checked={checkedBooks[category]?.[index] || false}
											onChange={() =>
												handleCheckboxChange(
													category,
													index,
													setCheckedBooks,
													STORAGE_KEY
												)
											}
										/>
										{book.Icon && <img src={book.Icon} alt={book.Name} />}
										<span>
											{ROMAN_1_TO_5[index]}: {book.Name}
										</span>
									</label>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default BookList;
