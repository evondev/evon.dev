import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import LogoAnimation from "./LogoAnimation";
import Rocket from "./Rocket";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: intro-wrapper;
    height: 100vh;
    background-color: #000011;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    overflow-x: hidden;
    @media screen and (max-width: 1023px) {
      height: auto;
      padding: 50px 0;
    }
  `,
  heading: css`
    debug: intro-heading;
    font-size: 50px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    @media screen and (max-width: 767px) {
      font-size: 25px;
    }
  `,
  headingFeature: css`
    debug: intro-headingFeature;
    color: #9a86fd;
  `,
  iconList: css`
    debug: intro-iconList;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  `,
  icon: css`
    debug: intro-icon;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 8px;
    background-color: #4bc3ef;

    img {
      max-width: 50%;
    }
  `,
};

const Intro = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      {/* <Rocket></Rocket> */}
      <LogoAnimation></LogoAnimation>
      <Text tagName="h2" fcss={styled.heading}>
        <Text tagName="span" fcss={styled.headingFeature}>
          Hello
        </Text>
        , My name is
      </Text>
      <svg viewBox="0 0 900 100" className="svg-text">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="50%" dy=".35em">
            EVONDEV
          </text>
        </symbol>

        <use xlinkHref="#s-text" className="evon-text"></use>
        <use xlinkHref="#s-text" className="evon-text"></use>
        <use xlinkHref="#s-text" className="evon-text"></use>
        <use xlinkHref="#s-text" className="evon-text"></use>
        <use xlinkHref="#s-text" className="evon-text"></use>
      </svg>
      <Text tagName="h2" fcss={styled.heading}>
        I am{" "}
        <Text tagName="span" fcss={styled.headingFeature}>
          Frontend Developer
        </Text>
      </Text>
    </View>
  );
};

export default Intro;
