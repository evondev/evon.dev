import React from "react";
import CourseItem from "./CourseItem";
import { css, useStyles } from "./fela/felaCSS";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: course-wrapper;
    background-color: #242b42;
    padding: 50px 0;
    @media screen and (min-width: 1024px) {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  `,
  heading: css`
    debug: course-heading;
    color: white;
    font-size: 50px;
    margin-bottom: 50px;
    @media screen and (max-width: 1023px) {
      font-size: 30px;
      margin-bottom: 25px;
    }
  `,
  headingLetter: css`
    debug: course-headingLetter;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 80px;
    height: 80px;
    border-radius: 100rem;
    background-image: linear-gradient(to right bottom, #f62682, #3389f8);
    margin-right: 10px;
    @media screen and (max-width: 1023px) {
      width: 40px;
      height: 40px;
    }
  `,
  courseList: css`
    debug: course-courseList;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 100%;
    }
  `,
};

const Course = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View className="container">
        <Text tagName="h2" fcss={styled.heading}>
          <Text
            tagName="span"
            fcss={styled.headingLetter}
            className="block-heading-letter"
          >
            C
          </Text>
          <Text tagName="span">ourse</Text>
        </Text>
        <View fcss={styled.courseList}>
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
