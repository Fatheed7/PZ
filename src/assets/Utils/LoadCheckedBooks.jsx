import { decodeBools } from "./EncodeDecodeBools";

export function loadCheckedBooks(data, STORAGE_KEY) {
	const categories = Object.keys(data);
	const total = categories.reduce((sum, cat) => sum + data[cat].length, 0);

	const saved = localStorage.getItem(STORAGE_KEY);

	let flatChecks = new Array(total).fill(false);

	if (saved) {
		flatChecks = decodeBools(saved, total);
	}

	const rebuilt = {};
	let pointer = 0;

	for (const cat of categories) {
		const count = data[cat].length;
		rebuilt[cat] = flatChecks.slice(pointer, pointer + count);
		pointer += count;
	}

	return rebuilt;
}
