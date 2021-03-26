import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: skills-wrapper;
    padding: 50px 0;
    background-color: #0e0c28;
    position: relative;
  `,
};

const Skills = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View fcss={global.container}>
        <Text tagName="h2" fcss={global.heading}>
          <Text tagName="span" fcss={[global.headingLetter]}>
            P
          </Text>
          <Text tagName="span">owerful skills</Text>
          <div className="skill-heading">
            <span>4</span>
            <div className="skill-zero">
              <img
                src="/images/img-astronaut.png"
                alt="astronaut"
                className="skill-astronaut"
              />
              <img
                src="/images/img-rocket.png"
                alt="rocket"
                className="skill-rocket"
              />
            </div>
            <span>4</span>
          </div>
        </Text>
      </View>
    </View>
  );
};

export default Skills;
