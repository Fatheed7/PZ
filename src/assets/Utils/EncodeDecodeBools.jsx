import { ALPHABET } from "./Constants";

export function encodeBools(boolArray) {
	const bits = boolArray.map((b) => (b ? "1" : "0")).join("");

	let output = "";
	for (let i = 0; i < bits.length; i += 5) {
		const chunk = bits.slice(i, i + 5).padEnd(5, "0");
		const value = parseInt(chunk, 2);
		output += ALPHABET[value];
	}
	return output;
}

export function decodeBools(encoded, expectedLength) {
	let bits = "";

	for (const char of encoded) {
		const value = ALPHABET.indexOf(char);
		if (value < 0) continue;
		bits += value.toString(2).padStart(5, "0");
	}

	bits = bits.slice(0, expectedLength);

	return bits.split("").map((b) => b === "1");
}
