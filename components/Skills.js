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
    text-shadow: 5px 5px 0 black;
    @media screen and (max-width: 1023px) {
      font-size: 100px;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 374px) {
      font-size: 80px;
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
    box-shadow: 5px 5px 0 0 #000;
    @media screen and (max-width: 1023px) {
      width: 150px;
      height: 150px;
    }
    @media screen and (max-width: 374px) {
      width: 100px;
      height: 100px;
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
  text: css`
    debug: skills-text;
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-size: 40px;
    @media screen and (max-width: 1023px) {
      font-size: 25px;
    }

    span {
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(
        to right,
        rgb(231, 76, 60),
        rgb(255, 107, 203)
      );
    }
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
        <View className={styles(styled.heading)}>
          <Text tagName="span">4</Text>
          <View className={styles(styled.zero)}>
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
          </View>
          <Text tagName="span">4</Text>
        </View>
        <Text tagName="h3" fcss={styled.text}>
          Skills <span>not</span> found 😱
        </Text>
      </View>
    </View>
  );
};

export default Skills;
