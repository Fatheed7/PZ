import React, { useState, useEffect } from "react";

const BOOKS_JSON_URL = "/books.json";

const ALPHABET =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function encodeBools(boolArray) {
	const bits = boolArray.map((b) => (b ? "1" : "0")).join("");

	let output = "";
	for (let i = 0; i < bits.length; i += 5) {
		const chunk = bits.slice(i, i + 5).padEnd(5, "0");
		const value = parseInt(chunk, 2);
		output += ALPHABET[value];
	}
	return output;
}

function decodeBools(encoded, expectedLength) {
	let bits = "";

	for (const char of encoded) {
		const value = ALPHABET.indexOf(char);
		if (value < 0) continue;
		bits += value.toString(2).padStart(5, "0");
	}

	bits = bits.slice(0, expectedLength);

	return bits.split("").map((b) => b === "1");
}

const BookList = () => {
	const [booksData, setBooksData] = useState({});
	const [checkedBooks, setCheckedBooks] = useState({});

	useEffect(() => {
		fetch(BOOKS_JSON_URL)
			.then((res) => res.json())
			.then((data) => {
				setBooksData(data);

				const categories = Object.keys(data);
				const total = categories.reduce(
					(sum, cat) => sum + data[cat].length,
					0
				);

				const saved = localStorage.getItem("books");

				let flatChecks = new Array(total).fill(false);

				if (saved) {
					const decoded = decodeBools(saved, total);
					flatChecks = decoded;
				}

				const rebuilt = {};
				let pointer = 0;

				for (const cat of categories) {
					const count = data[cat].length;
					rebuilt[cat] = flatChecks.slice(pointer, pointer + count);
					pointer += count;
				}

				setCheckedBooks(rebuilt);
			})
			.catch((err) => console.error("Error loading books JSON:", err));
	}, []);

	const handleCheckboxChange = (category, index) => {
		setCheckedBooks((prev) => {
			const updated = {
				...prev,
				[category]: prev[category].map((v, i) => (i === index ? !v : v)),
			};

			const flat = Object.keys(updated).flatMap((cat) => updated[cat]);

			const encoded = encodeBools(flat);
			localStorage.setItem("books", encoded);

			return updated;
		});
	};

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
									<label className="flex align-items-center gap-2">
										<input
											type="checkbox"
											checked={checkedBooks[category]?.[index] || false}
											onChange={() => handleCheckboxChange(category, index)}
										/>
										{book.Icon && <img src={book.Icon} alt={book.Name} />}
										<span>{book.Name}</span>
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
