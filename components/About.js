import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { global } from "./Global";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    padding: 50px 0;
    background-color: #1a1c28;
  `,
  connect: css`
    debug: about-connect;
    display: inline-block;
    position: relative;
    z-index: 1;
    margin-top: 20px;
    background-image: linear-gradient(to right bottom, #00aefd, #20e3b2);
    padding: 2px;
  `,
  connectText: css`
    debug: about-connectText;
    background-color: #1a1c28;
    color: white;
    font-weight: 500;
    padding: 10px 30px;
    display: block;
  `,
  info: css`
    debug: about-info;
    padding: 0 50px 0 0;
    color: white;
    font-size: 18px;
    font-weight: 200;
    line-height: 2;
    strong {
      font-weight: 600;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-image: linear-gradient(
        to right bottom,
        rgb(32, 227, 178),
        rgb(0, 174, 253)
      );
    }
    p {
      margin-bottom: 15px;
    }
    @media screen and (max-width: 1023px) {
      padding: 50px 0 0 0;
    }
  `,
  layout: css`
    debug: about-layout;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 100px;
    align-items: center;
    @media screen and (max-width: 1023px) {
      grid-template-columns: 100%;
      display: flex;
      flex-direction: column-reverse;
    }
  `,
  media: css`
    debug: about-media;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    transform-style: preserve-3d;
    perspective: 2000px;
    @media screen and (max-width: 1023px) {
      padding: 20px 0 0 0;
    }
  `,
  image: css`
    debug: about-image;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    transform: rotateY(20deg) rotateZ(0) translate3d(0, 0px, 50px);
    transform-style: preserve-3d;
    transition: all 0.2s linear;
    will-change: transform;
    &:hover {
      transform: rotateY(-20deg) rotateZ(0) translate3d(0, 0px, 50px);
    }
  `,
};

const AboutMe = () => {
  const { styles } = useStyles();

  return (
    <View fcss={styled.wrapper}>
      <View fcss={global.container}>
        <Text tagName="h2" fcss={global.heading}>
          <Text
            tagName="span"
            fcss={[global.headingLetter, global.headingLetter3]}
          >
            W
          </Text>
          <Text tagName="span">ho am I</Text>
        </Text>
        <div className={styles(styled.layout)}>
          <div className={styles(styled.info)}>
            <p>
              My real name is <strong>Tuan</strong>. I am currently working at
              KTcity as <strong>Frontend Developer</strong> and{" "}
              <strong>Senior HTML CSS</strong> position. I love to code with
              HTML CSS to make stunning UI and have good UX for website.
            </p>
            <p>
              Also I have my own business - <strong>codingui.dev</strong> and my
              best personal blog <strong>evondev.com</strong> where you can come
              and get a lot of knowledge about HTML CSS.
            </p>
            <a
              href="http://fb.com/tuan.trananh.0509"
              className={styles(styled.connect)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className={styles(styled.connectText)}>
                Connect with me
              </span>
            </a>
          </div>
          <div className={styles(styled.media)}>
            <img
              src="/images/evondev-coding.jpg"
              alt="evondev"
              className={styles(styled.image)}
            />
          </div>
        </div>
      </View>
    </View>
  );
};

export default AboutMe;
