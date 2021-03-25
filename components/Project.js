import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: project-wrapper;
    padding: 50px 0;
    background-color: #242b42;
  `,
};

const Project = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View fcss={global.container}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        numquam illo, vitae asperiores culpa, vel harum officia voluptas
        consequatur laudantium doloribus quo suscipit cupiditate sapiente
        nostrum iste aperiam molestiae perferendis.
      </View>
    </View>
  );
};

const ProjectItem = ({ href, logo }) => {
  return <div></div>;
};

export default Project;
