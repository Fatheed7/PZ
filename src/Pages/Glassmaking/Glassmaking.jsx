import { useContext } from "react";
import { ROMAN_1_TO_5 } from "../../assets/Utils/Constants";
import { handleCheckboxChange } from "../../assets/Utils/HandleCheckboxChange";
import { BooksContext } from "../../contexts/BooksContext";
import { Accordion, AccordionTab } from "primereact/accordion";

const GlassMakingPage = () => {
	const { booksData, checkedBooks, setCheckedBooks, STORAGE_KEY } =
		useContext(BooksContext);

	const glassmakingBooks = booksData["Glassmaking"] || [];

	return (
		<div className="p-12 max-w-6xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">Glassmaking</h1>

			<div className="grid">
				<div className="col-12 p-3">
					<Accordion activeIndex={0}>
						<AccordionTab header="Related Books">
							<ul className="ml-2">
								{glassmakingBooks.map((book, index) => (
									<li key={index} className="mb-1">
										<label className="flex align-items-center gap-2 text-left">
											<input
												type="checkbox"
												checked={checkedBooks["Glassmaking"]?.[index] || false}
												onChange={() =>
													handleCheckboxChange(
														"Glassmaking",
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
						</AccordionTab>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default GlassMakingPage;
