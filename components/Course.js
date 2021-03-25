import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: about-wrapper;
  `,
};

const Course = () => {
  const { styles } = useStyles();

  return <View fcss={styled.wrapper}></View>;
};

export default Course;
