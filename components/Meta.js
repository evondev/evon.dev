import Head from "next/head";
import React from "react";

const Meta = () => {
  return (
    <Head>
      <title>Evondev - Frontend Developer</title>
      <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
      />
      <meta charSet="utf-8" />
      <meta name="copyright" content="evondev" />
      <meta name="language" content="vi_VN" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <meta
        key="description"
        name="description"
        content="evondev personal website"
      />
      <meta key="keywords" name="keywords" content="evon, evondev, evon.dev" />
      <meta key="author" name="author" content="evondev" />
      <meta key="og-title" property="og:title" content="evondev" />
      <meta key="url" name="url" content="/" />
      <meta key="url" property="og:url" content="/" />
      <meta
        key="og-description"
        property="og:description"
        content="evondev personal website"
      />
      <meta
        key="og-image"
        property="og:image"
        content={`/images/html-css-course.jpeg`}
      />
      <link rel="shortcut icon" href="/images/evondev-favicon.png" />
    </Head>
  );
};

export default Meta;
