import { encodeBools } from "./EncodeDecodeBools";

export function handleCheckboxChange(
	category,
	index,
	setCheckedBooks,
	STORAGE_KEY
) {
	setCheckedBooks((prev) => {
		const updated = {
			...prev,
			[category]: prev[category].map((v, i) => (i === index ? !v : v)),
		};

		const flat = Object.keys(updated).flatMap((cat) => updated[cat]);

		const encoded = encodeBools(flat);
		localStorage.setItem(STORAGE_KEY, encoded);

		return updated;
	});
}
