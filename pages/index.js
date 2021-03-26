import Intro from "@components/Intro";
import Course from "@components/Course";
import Project from "@components/Project";
import TimeLine from "@components/Timeline";
import Head from "next/head";
import React, { Fragment } from "react";
import AboutMe from "@components/About";

export default function Home() {
  return (
    <Fragment>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Course></Course>
      <TimeLine></TimeLine>
      <Project></Project>
    </Fragment>
  );
}
