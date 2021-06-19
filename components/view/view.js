import { useStyles } from "@components/fela/felaCSS";
import PropTypes from "prop-types";
import React from "react";

const tagList = [
  "div",
  "section",
  "footer",
  "header",
  "nav",
  "article",
  "main",
  "aside",
  "figure",
  "figcaption",
  "ul",
  "ol",
  "li",
  "form",
  "button",
  "input",
  "textarea",
  "select",
  "img",
];

const View = React.forwardRef(
  (
    {
      tagName = "div",
      children,
      className = "",
      style = {},
      fcss = {},
      ...rest
    },
    ref
  ) => {
    const { styles } = useStyles();
    const viewRef = ref || React.createRef();

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

    const felaClassName = styles(
      style,
      ...(!!fcss ? (Array.isArray(fcss) ? fcss : [fcss]) : [])
    );

    return React.createElement(
      tagName,
      {
        ...{
          ["className"]: classNames(className, felaClassName),
        },
        ...rest,
        ref: viewRef,
      },
      children
    );
  }
);

View.propTypes = {
  tagName: PropTypes.oneOf([...tagList]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  fcss: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rest: PropTypes.object,
};
View.displayName = "View";

export default View;
