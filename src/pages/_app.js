import "../styles/globals.scss";

import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";

import { ThemeContextProvider } from "../contexts/ThemeContext";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
