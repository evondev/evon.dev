import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import Rocket from "./Rocket";
import { Text } from "./text";
import TimelineItem from "./TimelineItem";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: timeline-wrapper;
    background-color: #141523;
    padding: 50px 0;
    position: relative;
    @media screen and (min-width: 1024px) {
      min-height: 100vh;
    }
  `,
  container: css`
    debug: timeline-container;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50px;
      width: 1px;
      transform: translateX(-50%);
      background-color: #000;
      height: calc(100% - 100px);
    }
  `,
  circle: css`
    debug: timeline-circle;
    width: 20px;
    height: 20px;
    background-color: #3d6ef7;
    border-radius: 100rem;
    margin: 25px auto;
    box-shadow: 0 0 0 6px rgb(61, 110, 247, 0.5),
      0 0 0 12px rgb(61, 110, 247, 0.25), 0 0 0 18px rgb(61, 110, 247, 0.05);
    position: relative;
    z-index: 2;
  `,
};

const TimeLine = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <Rocket className="reverse"></Rocket>
      <View fcss={global.container} className="container">
        <Text tagName="h2" fcss={global.heading}>
          <Text
            tagName="span"
            fcss={[global.headingLetter, global.headingLetter2]}
          >
            C
          </Text>
          <Text tagName="span">areer of mine</Text>
        </Text>
        <View fcss={styled.container}>
          <TimelineItem
            year="15"
            company="Sutrix Group"
            color="is-third"
          ></TimelineItem>
          <TimelineItem
            year="16"
            company="InceptionLabs"
            color="is-third"
          ></TimelineItem>
          <TimelineItem
            year="17"
            company="Upflow"
            color="is-fourth"
          ></TimelineItem>
          <TimelineItem
            year="19"
            company="KTcity"
            color="is-first"
          ></TimelineItem>
          <TimelineItem
            year="21"
            company="KTcity"
            color="is-first"
          ></TimelineItem>
        </View>
      </View>
    </View>
  );
};

export default TimeLine;
