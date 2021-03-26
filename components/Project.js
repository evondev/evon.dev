import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import ProjectItem from "./ProjectItem";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: project-wrapper;
    padding: 50px 0;
    background-color: #242b42;
    position: relative;
    z-index: 0;
  `,
  projectList: css`
    debug: project-projectList;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 100%;
      grid-gap: 25px 0;
    }
  `,
};

const Project = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View fcss={global.container}>
        <Text tagName="h2" fcss={global.heading}>
          <Text
            tagName="span"
            fcss={[global.headingLetter, global.headingLetter3]}
          >
            A
          </Text>
          <Text tagName="span">wesome projects</Text>
        </Text>
        <View fcss={styled.projectList}>
          <ProjectItem
            href="https://codingui.dev"
            logo="/images/logo-codingui.png"
            alt="codingui.dev"
            name="Codingui.dev"
            desc="Just simple place to get a lot of free UI code with just one click"
            color="secondary"
          ></ProjectItem>
          <ProjectItem
            href="https://evondev.com"
            logo="/images/evondev-favicon.png"
            alt="evondev.com"
            name="Evondev.com"
            desc="Personal blog where I share knowledge about HTML and CSS"
            color="primary"
          ></ProjectItem>
          <ProjectItem
            href="https://kt.city"
            logo="/images/logo-ktcity.png"
            alt="kt.city"
            name="KT.city"
            desc="Best platform learning system about Digital Marketing"
            color="third"
          ></ProjectItem>
        </View>
      </View>
    </View>
  );
};

export default Project;
