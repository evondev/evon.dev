import React from "react";
import { css } from "./fela/felaCSS";
export const global = {
  heading: css`
    debug: global-heading;
    color: white;
    font-size: 40px;
    margin-bottom: 50px;
    font-weight: 500;
    @media screen and (max-width: 1023px) {
      font-size: 30px;
      margin-bottom: 35px;
    }
  `,
  headingLetter: css`
    debug: global-headingLetter;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 70px;
    height: 70px;
    border-radius: 100rem;
    background-image: linear-gradient(
      to right bottom,
      rgb(51, 202, 248),
      rgb(51, 137, 248)
    );
    margin-right: 5px;
    font-weight: bold;
    @media screen and (max-width: 1023px) {
      width: 40px;
      height: 40px;
    }
  `,
  headingLetter2: css`
    debug: global-headingLetter2;
    background-image: linear-gradient(to right bottom, #6723c5, #d23ff0);
  `,
  headingLetter3: css`
    debug: global-headingLetter3;
    background-image: linear-gradient(to right bottom, #ff6bcb, #ffa400);
  `,
  courseList: css`
    debug: global-courseList;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 100%;
    }
  `,
  container: css`
    debug: global-container;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 50px;
    @media screen and (max-width: 1023px) {
      padding: 0 20px;
    }
  `,
};
