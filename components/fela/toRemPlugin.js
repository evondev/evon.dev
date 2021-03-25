function toRemPlugin(style) {
	for (const property in style) {
		const value = style[property];
		if (typeof value === "string") {
			let newValue = value.replaceAll(/\d+px/g, function (match) {
				const number = parseFloat(match) / 10;
				return `${number}rem`;
			});
			style[property] = newValue;
		}
	}
	return style;
}

export default function toRemPluginFactory() {
	// we pass the formatter to ensure it's only created once and reused
	return (style) => toRemPlugin(style);
}
