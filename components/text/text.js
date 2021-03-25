import useFelaClassName from "@components/fela/useFelaClassName";
import PropTypes from "prop-types";
import React from "react";

const tagList = [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"div",
	"p",
	"span",
	"strong",
	"em",
	"i",
	"label",
	"a",
	"li",
	"time",
];

const Text = ({
	tagName = "p",
	children,
	className = "",
	style = {},
	fcss = {},
	...rest
}) => {
	const { felaClassName } = useFelaClassName({
		className,
		style,
		fcss,
	});

	return React.createElement(
		tagName,
		{
			...{
				["className"]: felaClassName,
			},
			...rest,
		},
		children
	);
};

Text.propTypes = {
	tagName: PropTypes.oneOf([...tagList]),
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.object,
	fcss: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	rest: PropTypes.object,
};

export default Text;
