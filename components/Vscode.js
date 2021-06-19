import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import ProjectItem from "./ProjectItem";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: vscode-wrapper;
    padding: 50px 0;
    background-color: #191a2e;
    position: relative;
    z-index: 0;
  `,
  list: css`
    debug: vscode-list;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px 50px;
    @media screen and (max-width: 1279px) {
      grid-gap: 30px;
    }
    @media screen and (max-width: 1023px) {
      display: grid;
      justify-content: flex-start;
      grid-auto-columns: 300px;
      grid-auto-flow: column;
      grid-gap: 0 20px;
      overflow: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      scroll-snap-stop: always;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      -webkit-overflow-scrolling: touch;
      scroll-padding: 0;
      grid-template-columns: unset;
      &::-webkit-scrollbar {
        display: none;
        width: 0;
      }
      & > * {
        scroll-snap-align: start;
      }
    }
  `,
  item: css`
    debug: vscode-item;
    padding: 50px 30px 75px;
    border-radius: 25px;
    background-color: #242b42;
    position: relative;
    transition: all 0.2s linear;
    @media screen and (max-width: 1023px) {
      padding: 30px 25px 55px;
    }
    @media (hover: hover) {
      &:hover {
        transform: translateY(-10px);
      }
    }
  `,
  icon: css`
    debug: vscode-icon;
    max-width: 150px;
    margin: 0 auto 50px;
    @media screen and (max-width: 1023px) {
      max-width: 100px;
      margin-bottom: 30px;
    }
  `,
  name: css`
    debug: vscode-name;
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
    z-index: 1;
    &:after {
      content: "";
      height: 20px;
      width: 50%;
      position: absolute;
      top: 10px;
      left: 0;
      z-index: -1;
      background-image: linear-gradient(to right bottom, #f62682, #6a5af9);
    }
    @media screen and (max-width: 1370px) {
      height: 60px;
    }
    @media screen and (max-width: 1023px) {
      height: auto;
      font-size: 20px;
      &:after {
        top: 5px;
        left: 1px;
      }
    }
  `,
  desc: css`
    debug: vscode-desc;
    color: white;
    font-size: 18px;
    font-weight: 300;
    line-height: 2;
    margin-bottom: 20px;
    @media screen and (max-width: 1023px) {
      font-size: 14px;
    }
  `,
  link: css`
    debug: vscode-link;
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    padding: 20px 50px;
    color: white;
    text-align: center;
    background-image: linear-gradient(to right top, #c29ffd 50%, #ffb4dc);
    border-radius: 20px 0px 20px 0;
    @media screen and (max-width: 1023px) {
      font-size: 15px;
      padding: 15px 35px;
    }
  `,
};

const Vscode = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View fcss={global.container}>
        <Text tagName="h2" fcss={global.heading}>
          <Text
            tagName="span"
            fcss={[global.headingLetter, global.headingLetter2]}
          >
            N
          </Text>
          <Text tagName="span">ice VSCode extensions</Text>
        </Text>
        <View fcss={styled.list}>
          <VscodeItem></VscodeItem>
          <VscodeItem
            name="Evondev snippets"
            desc="Best CSS snippets you should use to save a lot of time while coding CSS"
            cta="Check it out"
            link="https://marketplace.visualstudio.com/items?itemName=evondev.evondev-snippets"
          ></VscodeItem>
          <VscodeItem
            name="HTML to Css Class"
            desc="Convert HTML to CSS or Sass class quickly"
            cta="Download now"
            link="https://marketplace.visualstudio.com/items?itemName=evondev.generate-css-class"
          ></VscodeItem>
        </View>
      </View>
    </View>
  );
};

const VscodeItem = ({
  name = "Evondev Dracula",
  desc = `The VScode theme base on original Dracula Official Theme with
stuning color and high contrast`,
  link = `https://marketplace.visualstudio.com/items?itemName=evondev.dracula-high-contrast`,
  cta = "Download now",
}) => {
  return (
    <View fcss={styled.item}>
      <View
        tagName="img"
        src="/images/vscode.png"
        className="vscode-logo"
        fcss={styled.icon}
      />
      <Text tagName="h3" fcss={styled.name}>
        {name}
      </Text>
      <Text fcss={styled.desc}>{desc}</Text>
      <Text
        tagName="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        fcss={styled.link}
      >
        {cta}
      </Text>
    </View>
  );
};

export default Vscode;
