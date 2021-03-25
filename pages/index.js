import About from "@components/About";
import Course from "@components/Course";
import TimeLine from "@components/Timeline";
import Head from "next/head";
import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <About></About>
      <Course></Course>
      <TimeLine></TimeLine>
    </Fragment>
  );
}
