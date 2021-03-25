import isPlainObject from "isobject";

function isAnimation(style) {
	const styleNames = Object.getOwnPropertyNames(style);
	let isAnimationItem = false;

	for (let i = 0; i < styleNames.length; i++) {
		const property = styleNames[i].toString();

		isAnimationItem =
			property === "to" ||
			property.includes("from") ||
			property.includes("animation") ||
			property.includes("%");
	}

	return isAnimationItem;
}

function addImportantToValue(value) {
	if (
		typeof value === "number" ||
		(typeof value === "string" &&
			value.toLowerCase().indexOf("!important") === -1)
	) {
		return `${value}!important`;
	}

	return value;
}
function addImportant(style) {
	if (!isAnimation(style)) {
		for (const property in style) {
			const value = style[property];
			if (property === "className") {
				// Do nothing
			} else if (isPlainObject(value)) {
				style[property] = addImportant(value);
			} else if (Array.isArray(value)) {
				style[property] = value.map(addImportantToValue);
			} else {
				style[property] = addImportantToValue(value);
			}
		}
	}
	return style;
}

export default addImportant;
