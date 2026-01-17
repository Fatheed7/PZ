import { useState, useEffect, useContext } from "react";
import { ROMAN_1_TO_5 } from "../../assets/Utils/Constants";
import { encodeBools, decodeBools } from "../../assets/Utils/EncodeDecodeBools";
import { handleCheckboxChange } from "../../assets/Utils/HandleCheckboxChange";
import { loadCheckedBooks } from "../../assets/Utils/LoadCheckedBooks";
import { MagazinesContext } from "../../Contexts/MagazinesContext";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Tooltip } from "react-tooltip";

const JSON_URL = "/json/magazine.json";

const MagazineList = () => {
	const { magazinesData, checkedMagazines, setCheckedMagazines, STORAGE_KEY } =
		useContext(MagazinesContext);

	return (
		<>
			<div className="p-12 max-w-6xl mx-auto">
				<h1 className="text-3xl font-bold mb-6">Magazine List</h1>

				<div className="grid">
					<div className="col-12">
						<Accordion multiple>
							{Object.keys(magazinesData).map((category) => (
								<AccordionTab
									key={category}
									header={<span className="font-semibold p-1">{category}</span>}
								>
									<ul className="ml-2">
										{magazinesData[category].map((magazine, index) => (
											<li key={index} className="mb-2">
												<label className="flex align-items-center gap-2 text-left">
													<input
														type="checkbox"
														checked={
															checkedMagazines[category]?.[index] || false
														}
														onChange={() =>
															handleCheckboxChange(
																category,
																index,
																setCheckedMagazines,
																STORAGE_KEY,
															)
														}
													/>
													{magazine.Icon && (
														<img
															src={magazine.Icon}
															alt={magazine.Name}
															style={{ height: "20px" }}
														/>
													)}

													{magazine.Name}
													<Tooltip
														id={`tooltip-${category}-${index}`}
														place="right"
														html={magazine.Recipes.join("<br/>")}
													/>
													<i
														className="text-xs bi bi-info-circle"
														data-tooltip-id={`tooltip-${category}-${index}`}
													></i>
												</label>
											</li>
										))}
									</ul>
								</AccordionTab>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</>
	);
};

export default MagazineList;
