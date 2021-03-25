import { useStyles } from "./felaCSS";
import addImportant from "./addImportant";

function useFelaClassName({
	className = "",
	style = {},
	fcss = {},
	override = false,
}) {
	const { styles } = useStyles();
	// eslint-disable-next-line no-undef
	if (override && process.env.NODE_ENV === "production") {
		addImportant(fcss);
		addImportant(style);
	}

	function classNames() {
		let classes = [];

		for (var _i = 0; _i < arguments.length; _i++) {
			classes[_i] = arguments[_i];
		}

		const space = " ";
		return classes
			.join(space)
			.replace("undefined", "")
			.replace(/\s+/g, space)
			.trim();
	}

	const newClassName = styles(
		style,
		...(!!fcss ? (Array.isArray(fcss) ? fcss : [fcss]) : [])
	);

	return {
		felaClassName: classNames(className, newClassName),
	};
}

export default useFelaClassName;
