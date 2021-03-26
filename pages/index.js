import Intro from "@components/Intro";
import Course from "@components/Course";
import Project from "@components/Project";
import TimeLine from "@components/Timeline";
import Head from "next/head";
import React, { Fragment } from "react";
import AboutMe from "@components/About";
import Skills from "@components/Skills";
import Team from "@components/Team";
import Hobbies from "@components/Hobbies";
import ThankYou from "@components/ThankYou";

export default function Home() {
  return (
    <Fragment>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Course></Course>
      <TimeLine></TimeLine>
      <Project></Project>
      <Skills></Skills>
      <Hobbies></Hobbies>
      <ThankYou></ThankYou>
    </Fragment>
  );
}
