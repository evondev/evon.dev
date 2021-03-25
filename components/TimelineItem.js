import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  item: css`
    debug: timeline-item;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 10px;
    background-color: #242b42;
    color: white;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 150px;
    z-index: 2;
    &:last-child {
      margin-bottom: 0;
    }
    @media screen and (max-width: 1023px) {
      font-size: 16px;
      padding: 10px;
      margin-bottom: 100px;
    }
    @media screen and (max-width: 479px) {
      font-size: 12px;
    }
    &:nth-child(odd) {
      transform: translateX(50%);
      position: relative;
      left: 30px;
    }
    &:nth-child(odd):before {
      content: "";
      width: 20px;
      height: 20px;
      background-color: #3d6ef7;
      border-radius: 100rem;
      box-shadow: 0 0 0 6px rgb(61, 110, 247, 0.5),
        0 0 0 12px rgb(61, 110, 247, 0.25), 0 0 0 18px rgb(61, 110, 247, 0.05);
      position: absolute;
      left: -30px;
      transform: translateX(-50%);
      z-index: 2;
    }
    &:nth-child(even) {
      transform: translateX(-50%);
      position: relative;
      left: -30px;
    }
    &:nth-child(even):before {
      content: "";
      width: 20px;
      height: 20px;
      background-color: #3d6ef7;
      border-radius: 100rem;
      box-shadow: 0 0 0 6px rgb(61, 110, 247, 0.5),
        0 0 0 12px rgb(61, 110, 247, 0.25), 0 0 0 18px rgb(61, 110, 247, 0.05);
      position: absolute;
      right: -30px;
      transform: translateX(50%);
      z-index: 2;
    }
  `,
  year: css`
    debug: timeline-year;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    border-radius: inherit;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    flex-shrink: 0;

    margin-right: 15px;
    @media screen and (max-width: 1023px) {
      font-size: 16px;
      margin-right: 10px;
    }
    @media screen and (max-width: 479px) {
      font-size: 12px;
      padding: 10px;
    }
    &.is-first {
      background-image: linear-gradient(
        to right bottom,
        rgb(51, 202, 248),
        rgb(51, 137, 248)
      );
    }
    &.is-second {
      background-image: linear-gradient(to right bottom, #fbe179, #eb5b81);
    }
    &.is-third {
      background-image: linear-gradient(to right bottom, #0f1767, #3295f7);
    }
    &.is-fourth {
      background-image: linear-gradient(to right bottom, #20e3b2, #00aefd);
    }
  `,
};

const TimelineItem = ({ year, company, color }) => {
  return (
    <View fcss={styled.item}>
      <View fcss={styled.year} className={`${color}`}>
        <span>20</span>
        <span>{year}</span>
      </View>
      <span>{company}</span>
    </View>
  );
};

export default TimelineItem;
