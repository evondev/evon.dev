import "../styles/global.scss";
import Page from "../components/Page";
import React, { useEffect } from "react";
import FelaProvider from "@components/fela/FelaProvider";

const MyApp = ({ Component, pageProps, router, renderer }) => {
  pageProps.query = router.query;
  pageProps.pathname = router.pathname;

  return (
    <FelaProvider renderer={renderer}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </FelaProvider>
  );
};

export default MyApp;
