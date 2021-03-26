import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: Template-wrapper;
    padding: 50px 0;
    background-color: #0e0c28;
    position: relative;
  `,
};

const Template = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View fcss={global.container}>
        <Text tagName="h2" fcss={global.heading}>
          <Text tagName="span" fcss={[global.headingLetter]}>
            T
          </Text>
          <Text tagName="span">eam</Text>
        </Text>
      </View>
    </View>
  );
};

export default Template;
