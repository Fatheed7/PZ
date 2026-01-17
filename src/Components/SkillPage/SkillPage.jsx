import { useContext, useEffect, useState } from "react";
import { ROMAN_1_TO_5 } from "../../assets/Utils/Constants";
import { handleCheckboxChange } from "../../assets/Utils/HandleCheckboxChange";
import { BooksContext } from "../../contexts/BooksContext";
import { MagazinesContext } from "../../Contexts/MagazinesContext";
import { loadCheckedBooks } from "../../assets/Utils/LoadCheckedBooks";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Tooltip } from "react-tooltip";

const SkillPage = ({ skillName, jsonUrl, storageKey, title = skillName }) => {
	const [instructionsData, setInstructionsData] = useState({});
	const [checkedInstructions, setCheckedInstructions] = useState({});

	const {
		booksData,
		checkedBooks,
		setCheckedBooks,
		STORAGE_KEY: BOOKS_KEY,
	} = useContext(BooksContext);

	const {
		magazinesData,
		checkedMagazines,
		setCheckedMagazines,
		STORAGE_KEY: MAGAZINES_KEY,
	} = useContext(MagazinesContext);

	useEffect(() => {
		fetch(jsonUrl)
			.then((res) => res.json())
			.then((data) => {
				setInstructionsData(data);

				const rebuilt = loadCheckedBooks(data, storageKey);
				setCheckedInstructions(rebuilt);
			})
			.catch((err) =>
				console.error(`Error loading ${skillName} instructions:`, err),
			);
	}, [jsonUrl, storageKey, skillName]);

	const skillBooks = booksData[skillName] || [];
	const magazines = magazinesData[skillName] || [];

	return (
		<div className="p-12 max-w-6xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">{title}</h1>

			{/* Books Section */}
			<div className="grid">
				<div className="col-12 p-3">
					<Accordion>
						<AccordionTab header="Related Books">
							<ul className="ml-2">
								{skillBooks.map((book, index) => (
									<li key={index} className="mb-1">
										<label className="flex align-items-center gap-2 text-left">
											<input
												type="checkbox"
												checked={checkedBooks[skillName]?.[index] || false}
												onChange={() =>
													handleCheckboxChange(
														skillName,
														index,
														setCheckedBooks,
														BOOKS_KEY,
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

			{magazines && magazines.length > 0 && (
				<>
					{/* Magazine Section */}
					<div className="grid">
						<div className="col-12 p-3">
							<Accordion>
								<AccordionTab header="Related Magazines">
									<ul className="ml-2">
										{magazines.map((magazine, index) => (
											<li key={index} className="mb-1">
												<label className="flex align-items-center gap-2 text-left">
													<input
														type="checkbox"
														checked={
															checkedMagazines[skillName]?.[index] || false
														}
														onChange={() =>
															handleCheckboxChange(
																skillName,
																index,
																setCheckedMagazines,
																MAGAZINES_KEY,
															)
														}
													/>
													{magazine.Icon && (
														<img src={magazine.Icon} alt={magazine.Name} />
													)}
													{magazine.Name}
													<Tooltip
														id={`tooltip-${magazine.Name}-${index}`}
														place="right"
														html={magazine.Recipes.join("<br/>")}
													/>
													<i
														className="text-xs bi bi-info-circle"
														data-tooltip-id={`tooltip-${magazine.Name}-${index}`}
													></i>
												</label>
											</li>
										))}
									</ul>
								</AccordionTab>
							</Accordion>
						</div>
					</div>
				</>
			)}

			{/* Instructions Section */}
			<div className="grid">
				<div className="col-12 p-3">
					{Object.keys(instructionsData).map((category) => {
						const entries = instructionsData[category] || [];

						return (
							<div key={category} className="mb-6">
								<h2 className="text-xl font-semibold mb-2">{category}</h2>

								<ul className="ml-2">
									{entries.map((entry, index) => (
										<li key={index} className="mb-1">
											<label className="flex align-items-center gap-2 text-left">
												<input
													type="checkbox"
													checked={
														checkedInstructions[category]?.[index] || false
													}
													onChange={() =>
														handleCheckboxChange(
															category,
															index,
															setCheckedInstructions,
															storageKey,
														)
													}
												/>
												{entry.Icon && (
													<img src={entry.Icon} alt={entry.Name} width={32} />
												)}
												<span>{entry.Name}</span>
												{entry.Tooltip && (
													<>
														<Tooltip
															id={`tooltip-${entry.Name}-${index}`}
															place="right"
															html={
																"Can also use: <br/><br/>" +
																entry.Tooltip.join("<br/>")
															}
														/>
														<i
															className="text-xs bi bi-info-circle"
															data-tooltip-id={`tooltip-${entry.Name}-${index}`}
														></i>
													</>
												)}
											</label>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SkillPage;
