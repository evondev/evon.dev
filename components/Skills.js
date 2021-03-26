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
  heading: css`
    debug: skills-heading;
    color: white;
    text-align: center;
    margin: 50px auto;
    font-size: 150px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1023px) {
      font-size: 100px;
    }
  `,
  zero: css`
    debug: skills-zero;
    width: 200px;
    height: 200px;
    display: inline-flex;
    border-radius: 100rem;
    padding: 10px;
    background-image: linear-gradient(to right, #e74c3c, #ff6bcb);
    margin: 0 25px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;

    @media screen and (max-width: 1023px) {
      width: 150px;
      height: 150px;
    }
  `,
  astronaut: css`
    debug: skills-astronaut;
    max-width: 60%;
    transform: rotate(-20deg);
  `,
  rocket: css`
    debug: skills-rocket;
    position: absolute;
    z-index: 10;
    max-width: 50px;
    right: 0;
    top: 0;
    transform: translate(50%, 50%);
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
        </Text>
        <div className={styles(styled.heading)}>
          <span>4</span>
          <div className={styles(styled.zero)}>
            <img
              src="/images/img-astronaut.png"
              alt="astronaut"
              className={`${styles(styled.astronaut)} -as`}
            />
            <img
              src="/images/img-rocket.png"
              alt="rocket"
              className={`${styles(styled.rocket)} -rk`}
            />
          </div>
          <span>4</span>
        </div>
      </View>
    </View>
  );
};

export default Skills;
