import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: Hobbies-wrapper;
    padding: 50px 0;
    background-color: #020216;
    position: relative;
  `,
  list: css`
    debug: hobby-list;
    display: grid;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: 100px;
    grid-gap: 20px;
    justify-content: center;
    @media screen and (max-width: 1023px) {
      grid-template-columns: repeat(2, 80px);
      grid-auto-flow: row;
      grid-auto-rows: 80px;
      grid-template-rows: 80px;
      grid-gap: 25px;
    }
  `,
  item: css`
    debug: hobby-item;
    background-image: linear-gradient(
      to right bottom,
      rgb(0, 174, 253),
      rgb(32, 227, 178)
    );
    padding: 2px;
  `,
  itemInner: css`
    debug: hobby-itemInner;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black-darkest);
    padding: 10px;
    width: 100%;
    height: 100%;
    img {
      max-height: 50px;
    }
    @media screen and (max-width: 1023px) {
      img {
        max-height: 30px;
      }
    }
  `,
};

const Hobbies = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View fcss={global.container}>
        <View fcss={styled.list}>
          <View fcss={styled.item}>
            <View fcss={styled.itemInner}>
              <img src="/images/img-coding.png" alt="coding" />
            </View>
          </View>
          <View fcss={styled.item}>
            <View fcss={styled.itemInner}>
              <img src="/images/img-bowling.png" alt="bowling" />
            </View>
          </View>
          <View fcss={styled.item}>
            <View fcss={styled.itemInner}>
              <img src="/images/img-billiards.png" alt="billiards" />
            </View>
          </View>
          <View fcss={styled.item}>
            <View fcss={styled.itemInner}>
              <img
                src="/images/img-volleyball-ball.png"
                alt="volleyball-ball"
              />
            </View>
          </View>
          <View fcss={styled.item}>
            <View fcss={styled.itemInner}>
              <img
                src="/images/img-rounded-headphones.png"
                alt="rounded-headphones"
              />
            </View>
          </View>
          <View fcss={styled.item}>
            <View fcss={styled.itemInner}>
              <img src="/images/img-shuttlecock.png" alt="shuttlecock" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hobbies;
