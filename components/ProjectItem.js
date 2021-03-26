import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { Text } from "./text";
import { View } from "./view";

const styled = {
  item: css`
    debug: project-item;
    display: flex;
    align-items: center;
    color: white;
    background-color: #364061;
    padding: 15px;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    @media screen and (max-width: 1023px) {
      padding: 10px;
    }
  `,
  image: css`
    debug: project-image;
    width: 100px;
    height: 100px;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      to right bottom,
      rgb(32, 227, 178),
      rgb(0, 174, 253)
    );
    position: relative;
    flex-shrink: 0;
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: inherit;
      transform: translate(2px, 2px);
      background-image: inherit;
      filter: brightness(75%);
      z-index: -1;
    }
    img {
      max-width: 90%;
      max-height: 90%;
      filter: brightness(100);
    }
    @media screen and (max-width: 1023px) {
      padding: 10px;
      width: 90px;
      height: 90px;
      img {
        max-width: 80%;
        max-height: 80%;
        filter: brightness(100);
      }
    }
  `,
  imageSecond: css`
    debug: project-imageSecond;
    background-image: linear-gradient(to right bottom, #5bf6a9, #422eee);
  `,
  imageThird: css`
    debug: project-imageThird;
    background-image: linear-gradient(to right bottom, #33cdf9, #2979ff);
  `,
  imageFour: css`
    debug: project-imageFour;
    background-image: linear-gradient(to right bottom, #fa9768, #ffa900);
  `,
  imageFifth: css`
    debug: project-imageFifth;
    background-image: linear-gradient(to right bottom, #dc52ba, #6d3c97);
  `,
  info: css`
    debug: project-info;
    padding: 0 20px;
    @media screen and (max-width: 1023px) {
      padding: 0 0 0 20px;
    }
  `,
  name: css`
    debug: project-name;
    margin-bottom: 10px;
    font-weight: 600;
    @media screen and (max-width: 1023px) {
      font-size: 16px;
    }
  `,
  desc: css`
    debug: project-desc;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.5;
    @media screen and (max-width: 1023px) {
      font-size: 12px;
    }
  `,
};

const ProjectItem = ({ href, logo, alt, name, desc, color }) => {
  const { styles } = useStyles();

  return (
    <a href={href} className={styles(styled.item)}>
      <View
        fcss={[
          styled.image,
          color === "secondary" && styled.imageSecond,
          color === "third" && styled.imageThird,
          color === "four" && styled.imageFour,
          color === "fifth" && styled.imageFifth,
        ]}
      >
        <img src={logo} alt={alt} className="project-logo" />
      </View>
      <View fcss={styled.info} className="project-info">
        <Text tagName="h3" fcss={styled.name} className="project-name">
          {name}
        </Text>
        <Text fcss={styled.desc} className="project-desc">
          {desc}
        </Text>
      </View>
    </a>
  );
};

export default ProjectItem;
