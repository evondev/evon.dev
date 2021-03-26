import React from "react";
import CourseItem from "./CourseItem";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: course-wrapper;
    background-color: #242b42;
    padding: 50px 0;
    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  `,
};

const Course = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View fcss={global.container} className="container">
        <Text tagName="h2" fcss={global.heading}>
          <Text tagName="span" fcss={global.headingLetter}>
            M
          </Text>
          <Text tagName="span">y best courses</Text>
        </Text>
        <View fcss={global.courseList}>
          <CourseItem href="https://evondev.com/khoa-hoc-html-css"></CourseItem>
          <CourseItem
            href="#"
            src="/images/html-css-master.jpg"
            cta="Coming soon"
            isFeatured="true"
            title="Training offline from beginner to master HTML CSS"
          ></CourseItem>
          <CourseItem
            href="https://evondev.com/khoa-hoc-huong-dan-cat-psd"
            src="/images/html-css-psd-course.png"
            title="Convert design from PSD to HTML CSS by using Gulp, Pug and Sass"
          ></CourseItem>
        </View>
      </View>
    </View>
  );
};

export default Course;
