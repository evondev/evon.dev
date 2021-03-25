import React from "react";
import { css, useStyles } from "./fela/felaCSS";
import { Text } from "./text";
import { View } from "./view";
const styled = {
  wrapper: css`
    debug: timeline-wrapper;
    background-color: #141523;
    padding: 0.1px;
    position: relative;
    overflow: hidden;
    @media screen and (min-width: 1024px) {
      min-height: 100vh;
    }
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 125px;
      width: 1px;
      transform: translateX(-50%);
      background-color: #000;
      height: 100%;
    }
    @media screen and (max-width: 479px) {
      &:after {
        top: 100px;
      }
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
      <div className="container">
        {/* <View fcss={styled.circle}></View> */}
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-year is-second">
              <span>20</span>
              <span>15</span>
            </div>
            <div className="timeline-info">Graduated</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year is-third">
              <span>20</span>
              <span>16</span>
            </div>
            <div className="timeline-info">InceptionLabs</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year is-fourth">
              <span>20</span>
              <span>17</span>
            </div>
            <div className="timeline-info">UpFlow</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year is-first">
              <span>20</span>
              <span>19</span>
            </div>
            <div className="timeline-info">KTcity</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year is-first">
              <span>20</span>
              <span>21</span>
            </div>
            <div className="timeline-info">KTcity</div>
          </div>
        </div>
      </div>
    </View>
  );
};

export default TimeLine;
