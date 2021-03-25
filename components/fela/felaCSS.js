import { useFela } from "react-fela";
import cssToJson from "./cssToJson";
export const css = (template, ...args) => {
	const style = template.reduce((acc, cur, index) => {
		return acc + cur + (!!args[index] ? args[index] : "");
	}, "");
	return cssToJson(style.replace(/\[object\sObject\]/g, "undefined"));
};

export const useStyles = (value = {}) => {
	const { css, theme, renderer } = useFela(value);
	function _styles(...styles) {
		return css(...styles);
	}
	return {
		styles: _styles,
		fcss: css,
		theme,
		renderer,
	};
};
