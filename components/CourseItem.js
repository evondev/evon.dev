import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  courseItem: css`
    debug: course-courseItem;
    background-color: #364061;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `,
  courseImage: css`
    debug: course-courseImage;
    position: relative;
    padding-top: 56.25%;
    flex-shrink: 0;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  courseContent: css`
    debug: course-courseContent;
    padding: 25px;
    flex: 1;
  `,
  courseTitle: css`
    debug: course-courseTitle;
    color: white;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
    color: white;
    margin-bottom: 25px;
  `,
  courseRating: css`
    debug: course-courseRating;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 30px;
    img {
      max-width: 20px;
      margin: 0 5px;
    }
  `,
  courseButton: css`
    debug: course-courseButton;
    display: block;
    width: 100%;
    text-align: center;
    color: white;
    border-radius: 4px;
    padding: 15px;
    background-color: #9a86fd;
    box-shadow: rgb(116 98 203) -2px 2px 0px 0px;
    font-size: 14px;
  `,
};

const CourseItem = ({
  href = "#",
  src = "/images/html-css-course.jpeg",
  alt = "",
  title = " HTML CSS from scratch for absolutely beginners",
}) => {
  const { styles } = useStyles();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles(styled.courseItem)}
    >
      <View fcss={styled.courseImage} className="course-image">
        <img src={src} alt={alt} />
      </View>
      <View fcss={styled.courseContent} className="course-content">
        <Text tagName="h2" fcss={styled.courseTitle} className="course-title">
          {title}
        </Text>
        {/* <View fcss={styled.courseRating}>
          <img src="/images/icon-star.svg" alt="rating" />
          <img src="/images/icon-star.svg" alt="rating" />
          <img src="/images/icon-star.svg" alt="rating" />
          <img src="/images/icon-star.svg" alt="rating" />
          <img src="/images/icon-star.svg" alt="rating" />
        </View> */}
        <View fcss={styled.courseButton}>Get this course</View>
      </View>
    </a>
  );
};

export default CourseItem;