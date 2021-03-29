import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: astronaut-wrapper;
    position: absolute;
    right: 100px;
    top: 100px;
    @media screen and (max-width: 1023px) {
      right: 10px;
      top: 10px;
    }
  `,
  image: css`
    debug: astronaut-image;
    max-width: 200px;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-name: {
      100% {
        transform: translateY(10px);
      }
    }
    @media screen and (max-width: 1023px) {
      max-width: 100px;
    }
  `,
};

const Rocket = () => {
  const { styles } = useStyles();
  return (
    <View fcss={styled.wrapper}>
      <img
        src="/images/swimming-astronaut-dark.png"
        alt="hello"
        className={styles(styled.image)}
      />
    </View>
  );
};

export default Rocket;
