import About from "@components/About";
import Banner from "@components/Banner";
import Head from "next/head";
import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      {/* <Banner></Banner> */}
      <About></About>
    </Fragment>
  );
}
