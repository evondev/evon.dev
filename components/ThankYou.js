import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: ThankYou-wrapper;
    padding: 50px 0;
    background-color: var(--black-darkest);
    position: relative;
    z-index: 0;
  `,
  content: css`
    debug: thankyou-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  heart: css`
    debug: thankyou-heart;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    border-radius: 10px;
    background-image: linear-gradient(to right, #9525fb, #ff70a4);
    margin-bottom: 25px;
    img {
      max-width: 50px;
    }
    position: relative;
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      border-radius: inherit;
      transform: translate(2px, 2px);
      background-image: inherit;
      filter: brightness(75%);
      z-index: -1;
    }
  `,
  heading: css`
    debug: thankyou-heading;
    color: white;
    text-transform: uppercase;
  `,
};

const ThankYou = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View fcss={global.container}>
        <View fcss={styled.content}>
          <View fcss={styled.heart}>
            <img src="/images/icon-heart.png" alt="heart" />
          </View>
          <Text tagName="h2" fcss={styled.heading}>
            Thank you
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ThankYou;
