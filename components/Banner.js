import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: banner-wrapper;
    background-color: white;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,
  image: css`
    debug: banner-image;
    max-width: 500px;
    margin: 0 auto;
  `,
  iconSass: css`
    debug: banner-iconSass;
    max-width: 100px;
    position: absolute;
    top: 65%;
    left: 55%;
  `,
  iconVScode: css`
    debug: banner-iconVScode;
    position: absolute;
    top: 25%;
    left: 60%;
    max-width: 70px;
    animation-delay: 1s;
    animation-duration: 1s;
  `,
  iconPug: css`
    debug: banner-iconPug;
    position: absolute;
    top: 45%;
    left: 20%;
    max-width: 100px;
    animation-duration: 3s;
  `,
  iconGulp: css`
    debug: banner-iconGulp;
    position: absolute;
    top: 25%;
    left: 30%;
    max-width: 80px;
    animation-duration: 5s;
  `,
  iconBox: css`
    debug: banner-iconBox;
    position: absolute;
    bottom: 15%;
    left: 25%;
    max-width: 80px;
    animation-duration: 5s;
  `,
  iconBoxHigh: css`
    debug: banner-iconBoxHigh;
    position: absolute;
    bottom: 25%;
    left: 65%;
    max-width: 140px;
    animation-duration: 5s;
  `,
  iconBoxRect: css`
    debug: banner-iconBoxHigh;
    position: absolute;
    top: 55%;
    left: 30%;
    max-width: 100px;
    animation-duration: 5s;
  `,
};

const Banner = () => {
  const { styles } = useStyles();
  return (
    <View fcss={styled.wrapper}>
      <img
        src="/images/evondev.png"
        alt="evondev"
        className={styles(styled.image)}
      />
      <img
        src="/images/icon-sass.png"
        alt="sass"
        className={`${styles(styled.iconSass)} rotate`}
      />
      <img
        src="/images/icon-vscode.png"
        alt="vscode"
        className={`${styles(styled.iconVScode)} leftright`}
      />
      <img
        src="/images/icon-pug.png"
        alt="pug"
        className={`${styles(styled.iconPug)} rotate`}
      />
      <img
        src="/images/icon-gulp.png"
        alt="gulp"
        className={`${styles(styled.iconGulp)} rotate`}
      />
      <img
        src="/images/icon-high.png"
        alt="high"
        className={`${styles(styled.iconBoxHigh)} updown`}
      />
      <img
        src="/images/icon-box-rect.png"
        alt="box rect"
        className={`${styles(styled.iconBoxRect)} updown`}
      />
    </View>
  );
};

export default Banner;
