/* eslint-disable no-undef */
function removeDebugClass(style, devMode = false) {
	for (const property in style) {
		if (property === "className" && !devMode) {
			delete style[property];
		}
	}
	return style;
}

export default function removeDebugClassFactory(devMode) {
	return (style) => removeDebugClass(style, devMode);
}
